import useSWR from "swr";
import ArtPieces from "../components/ArtPieces/ArtPieces ";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

import Navbar from "../components/navbar/navbar";


export default function HomePage() {
  const { data, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );
  if (isLoading) return <div>loading...</div>;
  console.log("data is: ", data);
  return (
    <div>

      <ArtPieces />
      <Navbar />
    </div>
  );
}
