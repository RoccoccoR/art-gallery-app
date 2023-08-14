import GlobalStyle from "../styles";
import useSWR from "swr";
import "../components/Navbar/navbar.css"

const URL = "https://example-apis.vercel.app/api/art";
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function App({ Component, pageProps }) {
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
    </>
  );
}
