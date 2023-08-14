import React from "react";
import ArtPiecePreview from "../ArtPiecesPreview/ArtPiecesPreview";

export default function Spotlight({ pieces }) {
  const randomIndex = Math.floor(Math.random() * pieces.length);
  const { imageSource, artist } = pieces[randomIndex];

  return <ArtPiecePreview image={imageSource} artist={artist} />;
}
