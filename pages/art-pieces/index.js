import React from "react";
import ArtPieces from "../../components/ArtPieces";

export default function index({ artPieces }) {
  return (
    <>
      <ArtPieces pieces={artPieces} />
    </>
  );
}
