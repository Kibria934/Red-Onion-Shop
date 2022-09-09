import React, { Fragment, useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import UseFoods from "../../SharedPage/hooks/UseFoods";
import Loading from "../../SharedPage/Loading/Loading";
import ExtraImgSection from "../ExtraImgSection";
import "./ProductDetails.css";
import { useDispatch } from "react-redux";
import { add_to_cart } from "../../../Redux/CartSlice";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import toast from "react-hot-toast";

const ProductDetails = () => {
  const { productId } = useParams();
  const [count, setCount] = useState(0);
  const [foods, setFoods, loading] = UseFoods();
  const location = useLocation();
  const type = location.search.split("=")[1];
  const dispatch = useDispatch();
  const extra = foods.filter(
    (f) => f.type.toLowerCase() === type.toLowerCase()
  );

  if (loading) {
    return <Loading />;
  }

  const selected = foods.find((food) => food._id === productId);
  console.log(selected);

  return (
    <div style={{ minHeight: "87vh" }}>
      <div className="flex justify-center mt-3">
        <Link
          className={
            type == "breakfast"
              ? `mr-20  no-underline font-medium text-xl  text-red-600`
              : `mr-20  no-underline font-medium text-xl text-black`
          }
          to={"/home/breakfast"}
        >
          Breakfast
        </Link>
        <Link
          className={
            type == "lunch"
              ? `mr-20  no-underline font-medium text-xl  text-red-600`
              : `mr-20  no-underline font-medium text-xl text-black`
          }
          to={"/home/lunch"}
        >
          Lunch
        </Link>
        <Link
          className={
            type == "dinner"
              ? `mr-20  no-underline font-medium text-xl  text-red-600`
              : `mr-20  no-underline font-medium text-xl text-black`
          }
          to={"/home/dinner"}
        >
          Dinner
        </Link>
      </div>
      <Fragment>
        {ProductDetails && (
          <div className="flex w-11/12 m-auto min-h-[70vh] items-center justify-around">
            <div>
              <div className="w-[40vw]">
                <h1>{selected?.name}</h1>
                <p>{selected?.desciption}</p>

                <div className="flex w-100 h-100  items-center">
                  <span className="text-3xl">{selected?.price}</span>
                  <div className="border-2 ml-4 rounded-3xl h-10 w-28 flex justify-center items-center">
                    <button
                      onClick={() => setCount(count - 1)}
                      className="text-4xl active:text-green-600 mr-4 focus:text-red-600 text-red-600"
                    >
                      -
                    </button>
                    {count}
                    <button
                      className="text-3xl active:text-green-600  ml-4 focus:text-red-600 text-red-600"
                      onClick={() => setCount(count + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <br />
                <button
                  onClick={() => {
                    if (count > 0) {
                      dispatch(
                        add_to_cart({
                          name: selected?.name,
                          qnty: count,
                          price: selected?.price.split("$")[1],
                          type: selected?.type,
                          img: selected?.img,
                        })
                      );
                    }
                  }}
                  className=" px-4 py-2 text-white rounded-3xl bg-red-600 hover:bg-green-700"
                >
                  Add to cart
                </button>
              </div>
              <div className="flex w-[600px] px-10 ">
                <>
                  <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                  >
                    {extra?.map((food) => (
                      <SwiperSlide
                        className="flex h-20 justify-center items-center"
                        key={food.price + food.name + 1}
                      >
                        {
                          <ExtraImgSection
                            key={food.price + food.name}
                            food={food}
                          />
                        }
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </>
              </div>
            </div>
            <caption>
              <figure>
                <img className=" w-[30vw]" src={`${selected?.img}`} alt="" />
              </figure>
            </caption>
          </div>
        )}
      </Fragment>
    </div>
  );
};

export default ProductDetails;
