import GlobalStyle from "../styles";
import "../components/Navbar/navbar.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
