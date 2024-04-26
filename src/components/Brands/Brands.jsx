import React from "react";

const Brand = () => {
  return (
    <div className="w-full bg-white p-8">
      <h2 className="text-4xl font-bold mb-8">Shop by Brand</h2>
      <div className="grid grid-cols-5 gap-4">
        {[...Array(25)].map((_, index) => (
          <div
            key={index}
            className="bg-gray-200 p-4 text-center rounded-md"
          >
            <p>Brand {index + 1}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brand;