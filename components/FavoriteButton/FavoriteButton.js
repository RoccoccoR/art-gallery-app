import { useState } from "react";
import favoriteImage from "../../public/assets/heart.svg";
import Image from "next/image";

export default function FavoriteButton() {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite((prevIsFavorite) => !prevIsFavorite);
  };

  return (
    <div className="favoriteButton">
      <button onClick={toggleFavorite} aria-label="favorite">
        {isFavorite ? <span>💚</span> : <span>🤍</span>}
      </button>
    </div>
  );
}
