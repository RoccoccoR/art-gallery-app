import React from "react";
import { useRouter } from "next/router";
import ArtPieceDetails from "../../components/ArtPieceDetails";

export default function PieceOfArt({ artPieces }) {
  console.log("artPiecesss", artPieces);
  const router = useRouter();
  const { slug } = router.query;

  const oneArtPiece = artPieces.find((artPiece) => artPiece.slug === slug);
  console.log("oneArtPiece", oneArtPiece);

  if (!oneArtPiece) {
    return <h1>Art piece does not exist!</h1>;
  }

  return (
    <div className="add a class here">
      <ArtPieceDetails
        image={oneArtPiece.imageSource}
        title={oneArtPiece.name}
        artist={oneArtPiece.artist}
        year={oneArtPiece.year}
        genre={oneArtPiece.genre}
      />
    </div>
  );
}
