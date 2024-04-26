import React, { useState } from "react";
import axios from "axios";
import OpenAI from "openai";

const Chatbox = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true, 
});

  async function main() {
    const completion = await 
    openai.chat.completions.create({
      messages: [
        { 
          role: "system",
          content: "You are a helpful assistant" },
        { 
          role: "user",content: 
          "Who won the world series in 2020?" }
      ],
    model: 'gpt-3.5-turbo',
  });
  console.log(completion.choices[0]);
}

main();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input) return;
    setMessages((prev) => [...prev, { text: input, from: "user" }]);

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          prompt: `You: ${input}\nAI: `,
          max_tokens: 50,
          temperature: 0.5,
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
          }
        }
      );

      const aiResponse = response.choices[0].message.content;

      setMessages((prev) => [...prev, { text: aiResponse, from: "ai-message" }]);
      console.log("AI Response:", aiResponse);
    } catch (error) {
      console.log(error);
      
      
    }
    setInput("");
  };

  return (
    <div
      className="chatbox"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        display: "grid",
        gridTemplateColumns: "8fr 22fr",
        gap: "10px",
        backgroundColor: "#ff4000",
      }}
    >
      <div className="messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.from}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div>
        <div>Hello there 👋</div>
      </div>
      <form onSubmit={handleSubmit} style={{ gridColumn: "1 / -1" }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Chat with us..."
          className="border-2 border-[#ff4000] rounded pl-7 pr-5 py-3 focus:outline-none ease transition-all placeholder:text-black text-sm"
        />
        <button
          type="submit"
          className="ease transition-all bg-orange-100 text-orange-500 border-[#ff4000] rounded-md py-3 px-4 border hover:opacity-70"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Chatbox;