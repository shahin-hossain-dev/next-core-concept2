import React from "react";
import { getDataWithId } from "@/services/postApi";

//dynamic meta data set

export const generateMetadata = async ({ params }) => {
  //fetch data
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const postDate = await res.json();
  //return meta items
  return {
    title: {
      absolute: postDate.title,
    },
    description: postDate.body,
    keywords: postDate.title.split(" "),
  };
};

const postDetails = async ({ params }) => {
  // console.log(params);
  const { id, body, title } = await getDataWithId(params.id); //dynamic data fetching

  return (
    <div className="border-2 p-3 m-5">
      <h3>{id}</h3>
      <h2 className="font-medium text-xl"> Title: {title}</h2>
      <p>Description: {body}</p>
    </div>
  );
};

export default postDetails;
