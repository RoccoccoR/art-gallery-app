import useSWR from "swr";
import React from "react";
import ArtPieces from "../components/ArtPieces";
import Navbar from "../components/Navbar";
// import Spotlight from "../components/Spotlight/Spotlight";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function HomePage() {
  const { data, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );
  if (isLoading) return <div>Loading...</div>;
  console.log("data is: ", data);
  return (
    <div>
      <h1>ART GALLERY</h1>
      <ArtPieces pieces={data} />
      {/* <Spotlight pieces={data} /> */}
      <Navbar />
    </div>
  );
}
