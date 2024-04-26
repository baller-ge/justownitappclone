import React from 'react';

const Details = () => {
  return (
    <div>
      <div className="mt-5 flex flex-col justify-center gap-5 items-center h-full bg-white md:py-10 p-7 md:px-32 rounded sm:shadow-sm w-full">
        <h1 className="font-bold mb-2 text-lg w-full text-center">Just Own It - First of its kind multi asset financing platform</h1>
        <p className="text-secondary text-md text-center">Just Own It is a first of its kind multi asset-financing platform that bridges the gap between financial institutions, customers and Original Equipment Manufacturers (OEMs).</p>
        <p className="text-secondary text-md text-center">In line with our mission to ensure products and services are accessible, affordable and usable across Africa, we have built a digital product warehouse combined with lending gateways</p>
        <a className="w-full self-center text-center text-sm underline mt-3" href="/our-story">read more</a>
      </div>
    </div>
  );
};

export default Details;