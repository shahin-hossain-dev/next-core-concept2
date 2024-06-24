import { getData } from "@/services/postApi";
import React from "react";

const PostsPage = async () => {
  const postsData = await getData();

  return (
    <div>
      <h2>All Posts : {postsData.length}</h2>
      <div className="grid grid-cols-3 gap-5">
        {postsData?.slice(0, 20).map(({ title, body, id }) => (
          <div key={id} className="border p-3">
            <h2 className="text-xl">Title: {title}</h2>
            <p>Description: {body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostsPage;
