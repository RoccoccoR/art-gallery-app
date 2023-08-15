import React from "react";
import ArtPiecePreview from "../ArtPiecesPreview";

export default function ArtPieces({ pieces }) {
  return (
    <>
      {pieces.map((piece) => (
        <ArtPiecePreview
          key={piece.slug}
          image={piece.imageSource}
          title={piece.title}
          artist={piece.artist}
        />
      ))}
    </>
  );
}
