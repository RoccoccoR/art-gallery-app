import React from "react";
import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

export default function ArtPiecePreview({ image, title, artist, slug }) {
  return (
    <>
      <Link href={`art-pieces/${slug}`}>
        <Image src={image} height={400} width={400} alt={`${title}`} />{" "}
      </Link>
      <h2>{title}</h2>
      <p>{artist}</p>
      <FavoriteButton />
    </>
  );
}
