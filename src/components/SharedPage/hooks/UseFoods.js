import React, { useEffect, useState } from "react";

const UseFoods = () => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5000/foods")
      .then((res) => res.json())
      .then((data) => {
        setFoods(data);
        setLoading(false);
      });
  }, []);
  const b = foods.filter((f) => f.type === "breakfast");
  return [foods, setFoods, loading];
};

export default UseFoods;
