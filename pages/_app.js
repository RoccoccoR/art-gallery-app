import GlobalStyle from "../styles";
import useSWR from "swr";
import "../components/Navigation/navbar.css";
import Layout from "../components/Layout";
import { useState } from "react";

const URL = "https://example-apis.vercel.app/api/art";
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const [artPiecesInfo, setArtPiecesInfo] = useState();
  const { data: artPieces, error, isLoading } = useSWR(URL, fetcher);
  if (error) {
    return <div>Error! Failed to Load!</div>;
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} artPieces={artPieces} />
      <Layout />
    </>
  );
}
