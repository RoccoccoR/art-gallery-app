import React from "react";
import { useRouter } from "next/router";
import ArtPieceDetails from "../../components/ArtPieceDetails";
import { useEffect } from "react";
export default function PieceOfArt({ artPieces }) {
  console.log("artPiecesss", artPieces);
  const router = useRouter();
  const { slug } = router.query;

  const filteredArtPiece = artPieces.find((artPiece) => artPiece.slug === slug);
  console.log("oneArtPiece", filteredArtPiece);

  if (!filteredArtPiece) {
    router.push("/");
  }

  // if (!filteredArtPiece) {
  //   return <h1>Art piece does not exist!</h1>;
  // }

  return (
    <>
      <ArtPieceDetails
        image={filteredArtPiece.imageSource}
        title={filteredArtPiece.name}
        artist={filteredArtPiece.artist}
        year={filteredArtPiece.year}
        genre={filteredArtPiece.genre}
      />
    </>
  );
}
