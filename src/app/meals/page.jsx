import Meals from "@/components/Meals";
import React from "react";

const MealPage = async () => {
  // const [search, setSearch] = useState(""); //server page এ useState কাজ করবে না।

  return (
    <div className="p-12">
      <h2>Chose your Meals by search</h2>
      {/* meal কে আলাদা একটা component এ রাখার হয়েয়ে কারণ সার্ভার পেজ useState support করে না। */}
      <Meals />
    </div>
  );
};

export default MealPage;
