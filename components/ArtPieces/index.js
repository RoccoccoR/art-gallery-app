import ArtPiecesPreview from "../ArtPiecesPreview";
export default function ArtPieces({ pieces }) {
  return (
    <>
      {pieces.map((piece) => {
        return (
          <ArtPiecesPreview
            key={piece.slug}
            image={piece.imageSource}
            title={piece.name}
            artist={piece.artist}
          />
        );
      })}
    </>
  );
}
