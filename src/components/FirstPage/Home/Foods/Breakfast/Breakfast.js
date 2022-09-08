import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UseFoods from "../../../../SharedPage/hooks/UseFoods";
import Loading from "../../../../SharedPage/Loading/Loading";

const Breakfast = () => {
  const [foods, setFoods, loading] = UseFoods();
  const navigate = useNavigate();
  const breakfast = foods.filter((f) => f.type === "breakfast");

  if (loading) {
    return <Loading />;
  }

  const handleNavigate = (id, type) => {
    navigate(`/productDetails/${id}?type=${type}`);
  };
  return (
    <div className="grid grid-cols-3 gap-4 container mt-10">
      {breakfast?.map((b) => (
        <div
          key={b._id}
          className=" hover:shadow-2xl p-3"
          onClick={() => handleNavigate(b._id, b.type)}
        >
          <div className="mx-auto flex justify-center items-center w-full flex-column">
            <img width={"200px"} src={b.img} alt="" />
            <div className="p-3 mt-3 w-full">
              <h5 className="text-center">{b.name}</h5>
              <p>
                {b.desciption?.length > 100 ? (
                  <div>{b.desciption?.slice(0, 80)}</div>
                ) : (
                  <div>{b.description}</div>
                )}
              </p>
              <h4 className="text-center">{b.price}</h4>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Breakfast;
