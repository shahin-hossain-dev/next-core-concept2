import React from "react";
import Image from "next/image";

const Gallery = () => {
  return (
    <div className="min-h-screen mx-12 py-12">
      <h2 className="text-3xl mt-12">Gallery Page</h2>
      {/* next js er image component automatic image optimize kore fele */}
      <Image src="/images/3.jpg" alt="" height="1080" width="1920" />
      {[1, 2, 3, 4, 5].map((img, idx) => (
        <Image
          key={idx}
          src={`/images/${img}.jpg`}
          alt="nature"
          height={1080}
          width={1920}
        />
      ))}
    </div>
  );
};

export default Gallery;
