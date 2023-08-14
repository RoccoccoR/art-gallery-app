import ArtPiecePreview from "../components/ArtPiecePreview/ArtPiecePreview";
export default function ArtPieces({ pieces }) {
  return (
    <>
      {pieces.map((ArtPiece) => {
        return (
          <ArtPiecePreview
            key={ArtPiece.slug}
            image={ArtPiece.imageSource}
            title={ArtPiece.name}
            artist={ArtPiece.artist}
          />
        );
      })}
    </>
  );
}
