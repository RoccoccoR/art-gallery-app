import React from "react";
import Image from "next/image";

export default function ArtPiecePreview({ image, title, artist }) {
  return (
    <>
      <Image src={image} height={500} width={550} alt={title} />
      <h2>{title}</h2>
      <p>{artist}</p>
    </>
  );
}
