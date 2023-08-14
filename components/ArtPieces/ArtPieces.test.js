import { render, screen } from "@testing-library/react";
import ArtPieces from "./ArtPieces.js";

const pieces = [
  {
    slug: "art-1",
    imageSource: "https://www.hausfrage.de/wp-content/uploads/besitzer.jpeg",
    artist: "Rocco Ali1",
    name: "Art 1",
  },
  {
    slug: "art-2",
    imageSource: "https://www.hausfrage.de/wp-content/uploads/besitzer1.jpg",
    artist: "Rocco Ali2",
    name: "Art 2",
  },
  {
    slug: "art-3",
    imageSource: "https://www.hausfrage.de/wp-content/uploads/besitzer2.jpg",
    artist: "Rocco Ali3",
    name: "Art 3",
  },

  {
    slug: "art-4",
    imageSource: "https://www.hausfrage.de/wp-content/uploads/besitzer3.jpg",
    artist: "Rocco Ali4",
    name: "Art 4",
  },

  {
    slug: "art-5",
    imageSource: "https://www.hausfrage.de/wp-content/uploads/besitzer5.jpg",
    artist: "Rocco Ali5",
    name: "Art 5",
  },
];

// test 1 tests if the component ArtPieces renders an unordered list that holds list elements.
test("renders art pieces with image, title, and artist", () => {
  render(<ArtPieces pieces={pieces} />);
  const listItems = screen.getAllByRole("listitem");
  listItems.forEach((listItem, index) => {
    const imgElement = listItem.querySelector("img");
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute(
      "src",
      expect.stringMatching(
        /\/_next\/image\?url=https%3A%2F%2Fwww.hausfrage.de%2Fwp-content%2Fuploads%2Fbesitzer\d*\.jpe?g/
      )
    );

    // test 2 tests if the component ArtPieces whether the ArtPieces component correctly
    //  renders the title, image and artist information for each art piece.

    const titleElement = screen.getByText(pieces[index].name);
    expect(titleElement).toBeInTheDocument();
    const artistElement = screen.getByText(pieces[index].artist);
    expect(artistElement).toBeInTheDocument();
  });
});

//  This test also verifying that the ArtPieces component correctly renders different image sources for each art piece.
test("renders art pieces with different image sources", () => {
  render(<ArtPieces pieces={pieces} />);
  const imgElements = screen.getAllByRole("img");
  const imageSources = imgElements.map((imgElement) =>
    imgElement.getAttribute("src")
  );
  expect(new Set(imageSources).size).toBe(imageSources.length);
});
