import React from "react";
import Partners1 from "../../assets/products/Partners1.png"

const Partners = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-10 text-center">Strategic Partners</h1>
      <div className="flex justify-center items-center">
        <img src={Partners1} alt="image 1" className="w-1/5 h-40 object-cover mr-5" />
        <img src={Partners1} alt="image 2" className="w-1/5 h-40 object-cover mr-5" />
        <img src={Partners1} alt="image 3" className="w-1/5 h-40 object-cover mr-5" />
        <img src={Partners1} alt="image 4" className="w-1/5 h-40 object-cover mr-5" />
        <img src={Partners1} alt="image 5" className="w-1/5 h-40 object-cover" />
      </div>
    </div>
  );
};

export default Partners;