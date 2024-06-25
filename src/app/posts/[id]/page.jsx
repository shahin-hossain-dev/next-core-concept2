import { getDataWithId } from "@/services/postApi";
import React from "react";

const postDetails = async ({ params }) => {
  console.log(params);
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
