import Link from "next/link";

export default function Navbar() {
  return (
    <section className="navbar-container">
      <nav className="navbar">
        <Link href="/spotlight" className="navbar__spotlight">
          Spotlight
        </Link>
        <Link className="navbar__art-pieces" href="#">
          Pieces
        </Link>
        <Link className="navbar__favourites" href="#">
          Favorites
        </Link>
      </nav>
    </section>
  );
}
