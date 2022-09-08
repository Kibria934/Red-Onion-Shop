import React, { Fragment } from "react";

const ExtraImgSection = ({ food }) => {
  return (
    <Fragment>
      <img className="w-64 mt-20 px-5" src={food.img} alt="" />
      <div className="flex flex-col">
        <p className="w-40">{food.name}</p>
        <p>{food.price}</p>
      </div>
    </Fragment>
  );
};

export default ExtraImgSection;
