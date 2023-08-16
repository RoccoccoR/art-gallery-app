import React from "react";
import Image from "next/image";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import Link from "next/link";

export default function Spotlight({ image, artist, slug }) {
  return (
    <div className="spotlight">
      <Image src={image} alt={`${artist}`} width={400} height={400} />
      <div className="art-piece-title-button-container">
        <span className="art-piece-title">{artist}</span>
        <FavoriteButton />
      </div>
    </div>
  );
}
