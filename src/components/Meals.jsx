"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

/* meal কে আলাদা একটা component এ রাখার হয়েয়ে কারণ সার্ভার পেজ useState support করে না। */

const Meals = () => {
  const [search, setSearch] = useState("a");
  const [error, setError] = useState("");
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const loadMealData = async () => {
      try {
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`
        );
        const data = await res.json();
        setMeals(data.meals);
        setError("");
      } catch (error) {
        setError("Data Not Found");
      }
    };
    loadMealData();
  }, [search]);

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className="mt-12">
      <input
        onChange={searchHandler}
        type="text"
        className="border-2 border-slate-600 outline-none p-2 "
        name="search"
        id=""
      />
      <button className="bg-slate-400 px-3 py-2 ">Search</button>
      <div className="grid grid-cols-3 gap-3 mt-12">
        {meals.length > 0 &&
          !error &&
          meals.map((meal) => (
            <div key={meal?.idMeal} className="border border-black  p-3">
              <Image
                src={meal.strMealThumb}
                width={500}
                height={500}
                alt="Picture of the author"
              />
              <h2 className="text-2xl font-medium">{meal.strMeal}</h2>
              <p>{meal.strInstructions}</p>
            </div>
          ))}
      </div>
      <div>{error && <h2>Data Not Found</h2>}</div>
    </div>
  );
};

export default Meals;
