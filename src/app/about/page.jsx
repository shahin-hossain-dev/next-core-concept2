import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";

export const metadata = {
  title: "About",
  description: "This is react core about page",
};

const getTime = async () => {
  // API by default cache হয়ে হয়ে থাকে এর জন্য রেসপন্স পাঠানোর সময় update value না পাঠিয়ে cache value পাঠায়।
  // client side থেকে যদি এটি কন্ট্রল করতে হয় তাহলে { cache: "no-store" } ব্যবহার করতে হয়।
  // যদি কিছু সময় পর পর আপডেট করতে চাই তাহলে {next: { revalidate: 5(second) } ব্যবহার করতে হয়।

  const res = await fetch("https://next-core-concept2.vercel.app/time", {
    cache: "no-store",
  }); // কোনো cache করবে না।
  // const res = await fetch("http://localhost:3000/time", {
  //   next: { revalidate: 5 }, //5 second পর পর cache update হবে।
  // });

  const data = await res.json();
  return data.currentTime;
};

const AboutPage = async () => {
  const session = await getServerSession(authOptions); // eikhane auth options pass kore dite hobe
  console.log(session);
  const currentTime = await getTime();
  return (
    <div>
      <h2>This is about page, {currentTime}</h2>
    </div>
  );
};

export default AboutPage;
