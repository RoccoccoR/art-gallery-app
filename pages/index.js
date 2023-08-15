import React from "react";
import useSWR from "swr";
import { Spotlight } from "../components/Spotlight";
import Navigation from "../components/Navigation";


// the name of the function was HomePage at the beginning
export default function SpotlightPage({ artPieces }) {
  // getting a random art piece at a time
  function getRandomArtPiece(artPieces) {
    const randomIndex = Math.floor(Math.random() * artPieces.length);
    console.log("randomIndex", randomIndex);
    return artPieces[randomIndex];
  }

  if (!artPieces) {
    return <div>Loading...</div>;
  }

  //this is the art piece which we need to render
  const spotlight = getRandomArtPiece(artPieces);

  return (
    <div>
      <h1>ART GALLERY</h1>
      <Spotlight image={spotlight.imageSource} artist={spotlight.artist} />
      <Navigation />
    </div>
  );
}
