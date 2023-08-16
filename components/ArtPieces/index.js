import React from "react";
import ArtPiecePreview from "../ArtPiecesPreview";

export default function ArtPieces({ pieces }) {
  return (
    <div className="artPieces-container">
      <h1>ART GALLERY</h1>
      {pieces.map((piece, index) => (
        <ArtPiecePreview
          key={piece.slug}
          image={piece.imageSource}
          title={piece.title}
          artist={piece.artist}
          slug={piece.slug}
        />
      ))}
      {/* Spacer element */}
      <div style={{ height: "80px" }} />
    </div>
  );
}
