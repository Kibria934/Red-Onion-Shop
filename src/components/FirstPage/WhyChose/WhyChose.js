import React from "react";
import { Link } from "react-router-dom";
import "./WhyChose.css";
import bus from '../../../images/icons/Group 204.png'
import truck from '../../../images/icons/Group 245.png'
import bell from '../../../images/icons/Group 1133.png'
import { BsArrowRight } from 'react-icons/bs';

const WhyChose = () => {
  return (
    <div className="container mt-10">
      <div className="w-[600px]">
        <h1 className="fw-normal">Why You choose us</h1>
        <p className="semi-bold">
          Barton waited twenty always repair in within we do.An delighted
          offending curiosity my is dashwoods at. Boy prosperous increasing
          surrounded.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-10">
        <div className="shadow">
        <div><img  src="https://i.ibb.co/26MRNsT/adult-blur-blurred-background-687824.png" alt=""/></div>
        <div className="p-4">
          <p className="flex items-center"> <span className="me-2"><img src={bus} alt=""/></span> Fast Delivery</p>
          <p>We serve our customer in a very fast Delivery system. We dont late never. We are very carefull of our respected customer.</p>
          <Link className="text-decoration-none flex items-center text-blue-600" to={'/'}><span className="me-2 text-xl">See more</span> < BsArrowRight/> </Link>
        </div>
        </div>
        <div className="shadow">
        <div><img  src="https://i.ibb.co/z2Mj81N/chef-cook-food-33614.png" alt=""/></div>
        <div className="p-4">
          <p className="flex items-center"> <span className="me-2"><img src={truck} alt=""/></span> Fast Delivery</p>
          <p>We serve our customer in a very fast Delivery system. We dont late never. We are very carefull of our respected customer.</p>
          <Link className="text-decoration-none flex items-center text-blue-600" to={'/'}><span className="me-2 text-xl">See more</span> < BsArrowRight/> </Link>
        </div>
        </div>
        <div className="shadow">
        <div><img  src="https://i.ibb.co/W3ygmpk/architecture-building-city-2047397.png" alt=""/></div>
        <div className="p-4">
          <p className="flex items-center"> <span className="me-2"><img src={bell} alt=""/></span> Fast Delivery</p>
          <p>We serve our customer in a very fast Delivery system. We dont late never. We are very carefull of our respected customer.</p>
          <Link className="text-decoration-none flex items-center text-blue-600" to={'/'}><span className="me-2 text-xl">See more</span> < BsArrowRight/> </Link>
        </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChose;
