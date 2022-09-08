import React from "react";
import { useNavigate } from "react-router-dom";
import UseFoods from "../../../../SharedPage/hooks/UseFoods";
import Loading from "../../../../SharedPage/Loading/Loading";

const Dinner = () => {
  const [foods, setFoods, loading] = UseFoods();
  const dinner = foods.filter((f) => f.type === "dinner");
  const navigate = useNavigate();

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="grid grid-cols-3 gap-4 container mt-10">
      {dinner.map((d) => (
        <div
          onClick={() => navigate(`/productDetails/${d._id}?type=${d.type}`)}
          key={d._id}
          className=" hover:shadow-2xl p-3"
        >
          <div className="mx-auto flex justify-center items-center w-full flex-column">
            <img width={"200px"} src={d.img} alt="" />
            <div className="p-3 mt-3 w-full">
              <h5 className="text-center">{d.name}</h5>
              <p>
                {d.desciption.length > 100 ? (
                  <div>{d.desciption.slice(0, 80)}</div>
                ) : (
                  <div>{d.desciption}</div>
                )}
              </p>
              <h4 className="text-center">{d.price}</h4>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dinner;
