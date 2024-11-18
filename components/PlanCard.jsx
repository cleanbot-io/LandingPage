import React from "react";

const PlanCard = ({ plan, price, description, details, buttonText }) => {
  return (
    <div className="p-6 rounded-lg shadow-md bg-white max-w-xs">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold">{plan}</h3>
        <span className="text-lg font-semibold">{price}</span>
      </div>
      <p className="mt-4 font-semibold text-gray-700">{description}</p>
      <p className="mt-2 text-gray-600">{details}</p>
      <button className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-md">
        {buttonText}
      </button>
    </div>
  );
};
export default PlanCard;
