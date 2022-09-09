import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import Ordered from "./Ordered";

const Delivery = () => {
  const data = useSelector((state) => state.cart);
  const { product, item, subTotal } = data;
  let total = 0;
  for (const pro of product) {
    total += +pro.price;
  }

  return (
    <main className="flex w-full pt-20 min-h-[90vh]  justify-evenly">
      {/* Left side */}
      <div>
        <h4>Edit Delivery Details</h4>
        <hr />
        <form className="flex flex-col">
          <input
            className="lg:w-[600px] mt-3 px-3  py-3 rounded-lg focus:text-black bg-gray-200 text-gray-700 "
            type="text"
            name="type"
            placeholder="Your Name"
          />
          <input
            className="lg:w-[600px] mt-3 px-3  py-3 rounded-lg focus:text-black bg-gray-200 text-gray-700 "
            type="text"
            name="type"
            placeholder="Number"
          />
          <input
            className="lg:w-[600px] mt-3 px-3  py-3 rounded-lg focus:text-black bg-gray-200 text-gray-700 "
            type="text"
            name="type"
            placeholder="Delivery type - [Cash on delivery]"
          />
          <input
            className="lg:w-[600px] mt-3 px-3  py-3 rounded-lg focus:text-black bg-gray-200 text-gray-700 "
            type="text"
            name="type"
            placeholder="Address - [Mulaid,Sreepur, Gazipur]"
          />
          <textarea
            className="lg:w-[600px] mt-3 px-3  py-3 rounded-lg focus:text-black bg-gray-200 text-gray-700 "
            type="text"
            name="type"
            placeholder="About you briefly..."
          />
        </form>
      </div>
      {/* Right side */}
      <div>
        <section>
          <h3>From Gulshan plaza</h3>
          <p>Arriving in 20 - 30 minute time</p>
          <p>Road 147, No 8</p>
        </section>
        <section
          className={` mt-10 mb-10 h-[250px] ${
            product?.length > 2 ? "overflow-y-scroll" : ""
          } px-2 `}
        >
          {product?.map((order) => (
            <div key={order.price} className="h-[100px] ">
              <Ordered order={order} />
            </div>
          ))}
        </section>
        {product && (
          <section>
            <div className="my-3">
              <p>
                Sub Total- {subTotal} items:
                <span className="float-right">${total}</span>
              </p>
              <p>
                Delivery fee: <span className="float-right">$2.00</span>
              </p>
              <p>
                Text: <span className="float-right">$5.00</span>
              </p>
              <p>
                Total:
                <span className="float-right">
                  ${+total.toFixed(2) + +2.0 + +5.0}
                </span>
              </p>
            </div>
          </section>
        )}
        <button
          type=""
          className="mt-10 w-full  bg-gray-300 py-2 rounded-lg active:scale-105  duration-300 hover:bg-red-600 hover:scale-110 text-lg text-black"
        >
          Place Order
        </button>
      </div>
    </main>
  );
};

export default Delivery;
