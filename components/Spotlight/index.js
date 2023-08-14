import React from "react";
import Image from "next/image";

export function Spotlight({ image, artist }) {
  return (
    <div className="spotlight">
      <Image src={image} alt={artist} width={300} height={300} />
      <p>{artist}</p>
    </div>
  );
}