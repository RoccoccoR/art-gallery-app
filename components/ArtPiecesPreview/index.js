import React from "react";
import Image from "next/image";

export default function ArtPiecePreview({ image, title, artist }) {
  return (
    <>
      <Image src={image} height={300} width={300} alt={title} />
      <h2>{title}</h2>
      <p>{artist}</p>
    </>
  );
}
