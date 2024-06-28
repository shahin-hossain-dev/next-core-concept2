import Meals from "@/components/Meals";
import React from "react";
import styles from "./styles.module.css";

export const metadata = {
  title: {
    absolute: "Meals", // যদি ‍নির্দিষ্ট করে একটা ভ্যালু/non-dynamic title সেট করতে হয়ে তাহলে absolute set করতে হবে।
  },
  description: "top popular meal in the world", // description meta tag er moddhe set hoy.
  keywords: ["about", "about page"], //meta tag egulo keyword hisae jabe
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
