import GlobalStyle from "../styles";
import "../components/navbar/navbar.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
