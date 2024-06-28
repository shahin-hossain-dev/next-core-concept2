import { getData } from "@/services/postApi";
import Link from "next/link";
import React from "react";
import { Poppins } from "next/font/google"; //font load korte hobe next theke

//font setting
const poppins = Poppins({
  weight: ["600"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Posts",
  description: "Most Power full posts",
};

const PostsPage = async () => {
  const postsData = await getData();
  // console.log(postsData);
  return (
    <div>
      <h2>All Posts : {postsData.length}</h2>
      <div className="grid grid-cols-3 gap-5">
        {postsData?.slice(0, 20).map(({ title, body, id }) => (
          <div key={id} className="border p-3">
            {/* font use */}
            <h2 className={`${poppins.className} text-xl`}>Title: {title}</h2>
            <p>Description: {body}</p>
            <Link href={`/posts/${id}`}>
              <button className="bg-slate-500 py-3 px-4">Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostsPage;
