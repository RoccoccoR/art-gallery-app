import React from "react";
import Image from "next/image";

export function Spotlight({ image, artist }) {
  return (
    <div>
      <Image src={image} alt={artist} width={300} height={300} />
      <h3>Artist: {artist}</h3>
    </div>
  );
}

