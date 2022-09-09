import React from "react";

const Ordered = ({ order }) => {
  const { name, qnty, price, type, img } = order;

  return (
    <div className="flex my-4 rounded-xl bg-gray-100 lg:w-[400px] justify-between items-center h-28 px-3 ">
      <div>
        <img className="w-20" src={img} alt="" />
      </div>
      <div className="text-gray-800">
        <p className="max-w-24">{name.slice(0, 20)}</p>
        <p className="text-red-600 font-bold text-xl">${price}</p>
      </div>
      <div className="flex flex-row h-16  px-2  py-2 w-20 justify-between items-center">
        <p> Quantity: {`${qnty < 10 ? `0${qnty}` : qnty}`}</p>
      </div>
    </div>
  );
};

export default Ordered;
