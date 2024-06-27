import Meals from "@/components/Meals";
import React from "react";
import styles from "./styles.module.css";

export const metadata = {
  title: "Meal | Next Core",
  description: "top popular meal in the world",
};
const MealPage = async () => {
  // const [search, setSearch] = useState(""); //server page এ useState কাজ করবে না।

  return (
    <div className="p-12">
      <h2 className={styles.text_tomato}>Chose your Meals by search</h2>
      <p className={styles.multiple_style}>Search now for a meal</p>
      {/* meal কে আলাদা একটা component এ রাখার হয়েয়ে কারণ সার্ভার পেজ useState support করে না। */}
      <Meals />
    </div>
  );
};

export default MealPage;
