import favoriteImage from "../../public/assets/heart.svg";
import Image from "next/image";

export default function FavoriteButton() {
  const isFavorite = true;

  return (
    <button onClick={() => {}} aria-label="favorite">
      {isFavorite ? <Image src={favoriteImage} /> : "set the empty svg"}
    </button>
  );
}
