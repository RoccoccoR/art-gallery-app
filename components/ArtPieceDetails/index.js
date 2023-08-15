import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ArtPieceDetails({ image, title, artist, year, genre }) {
  return (
    <div>
      <Link href="/art-pieces">← Go Back to Gallery</Link>
      <Image src={image} height={500} width={550} alt={title} />
      <p>{title}</p>
      <p>{artist}</p>
      <p>{genre}</p>
      <p>{year}</p>
    </div>
  );
}
