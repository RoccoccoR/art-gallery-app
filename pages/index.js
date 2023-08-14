import useSWR from "swr";
import ArtPieces from "../components/ArtPieces/ArtPieces";
import Navbar from "../components/Navbar/navbar";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function HomePage() {
  const { data, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );
  if (isLoading) return <div>Loading.....</div>;
  console.log("data is: ", data);
  return (
    <div>
      <ArtPieces pieces={data} />
      <Navbar></Navbar>
    </div>
  );
}
