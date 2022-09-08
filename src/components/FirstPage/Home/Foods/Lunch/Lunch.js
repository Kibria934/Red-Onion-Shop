import React from "react";
import { useNavigate } from "react-router-dom";
import UseFoods from "../../../../SharedPage/hooks/UseFoods";
import Loading from "../../../../SharedPage/Loading/Loading";

const Lunch = () => {
  const [foods, setFoods, loading] = UseFoods();
  const lunch = foods.filter((f) => f.type === "lunch");
  const navigate = useNavigate();

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="grid grid-cols-3 gap-4 container mt-10">
      {lunch.map((l) => (
        <div
          onClick={() => navigate(`/productDetails/${l._id}?type=${l.type}`)}
          key={l._id}
          className=" hover:shadow-2xl p-3"
        >
          <div className="mx-auto flex justify-center items-center w-full flex-column">
            <img width={"200px"} src={l.img} alt="" />
            <div className="p-3 mt-3 w-full">
              <h5 className="text-center">{l.name}</h5>
              <p>
                {l?.desciption.length > 100 ? (
                  <div>{l.desciption.slice(0, 80)}</div>
                ) : (
                  <div>{l.desciption}</div>
                )}
              </p>
              <h4 className="text-center">{l.price}</h4>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Lunch;
