import ArtPiecesPreview from "../ArtPiecesPreview/ArtPiecesPreview";
// export default function ArtPieces({ pieces }) {
//   console.log("piece is: ", pieces);
//   return (
//     <>
//       {pieces.map((ArtPiece) => {
//         return (
//           <ArtPiecesPreview
//             key={ArtPiece.slug}
//             image={ArtPiece.imageSource}
//             title={ArtPiece.name}
//             artist={ArtPiece.artist}
//           />
//         );
//       })}
//     </>
//   );
// }

export default function ArtPieces({ pieces }) {
  console.log("piece is: ", pieces);
  return (
    <ul>
      {pieces.map((ArtPiece) => {
        return (
          <li key={ArtPiece.slug}>
            <ArtPiecesPreview
              image={ArtPiece.imageSource}
              title={ArtPiece.name}
              artist={ArtPiece.artist}
            />
          </li>
        );
      })}
    </ul>
  );
}
