import { useState } from "react";
import favoriteImage from "../../public/assets/heart.svg";
import Image from "next/image";

export default function FavoriteButton() {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite((prevIsFavorite) => !prevIsFavorite);
  };

  return (
    <button onClick={toggleFavorite} aria-label="favorite">
      {isFavorite ? (
        <Image src={favoriteImage} alt={`Favorite Button`} />
      ) : (
        <p>❓</p>
      )}
    </button>
  );
}
