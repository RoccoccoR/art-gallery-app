import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ArtPieceDetails from "../ArtPieceDetails";
import { useRouter } from "next/router";

//render the ArtPieceDetails component with some test props and
//then asserts that the expected elements are present in the document.
describe("ArtPieceDetails", () => {
  it("renders the art piece details correctly", () => {
    const props = {
      image: "/test-image.jpg",
      title: "Test Title",
      artist: "Test Artist",
      year: "2023",
      genre: "Test Genre",
    };

    render(<ArtPieceDetails {...props} />);

    expect(screen.getByText("← Go Back to Gallery")).toBeInTheDocument();
    expect(screen.getByAltText(props.title)).toBeInTheDocument();
    expect(screen.getByText(props.artist)).toBeInTheDocument();
    expect(screen.getByText(props.title)).toBeInTheDocument();
    expect(screen.getByText(props.genre)).toBeInTheDocument();
    expect(screen.getByText(props.year)).toBeInTheDocument();
  });
});

////////////////////////////////////////////////////////////////////
//The test checks if the component renders the art piece details correctly,
//including the image, title, artist, year, and genre. It also checks if the image is rendered
//with the correct props, such as the source, height, and width.

describe("ArtPieceDetails", () => {
  it("renders the art piece details correctly", () => {
    const props = {
      image: "/test-image.jpg",
      title: "Test Title",
      artist: "Test Artist",
      year: "2023",
      genre: "Test Genre",
    };

    render(<ArtPieceDetails {...props} />);

    expect(screen.getByText("← Go Back to Gallery")).toBeInTheDocument();
    expect(screen.getByAltText(props.title)).toBeInTheDocument();
    expect(screen.getByText(props.artist)).toBeInTheDocument();
    expect(screen.getByText(props.title)).toBeInTheDocument();
    expect(screen.getByText(props.genre)).toBeInTheDocument();
    expect(screen.getByText(props.year)).toBeInTheDocument();
  });

  it("renders the image with the correct props", () => {
    const props = {
      image: "/test-image.jpg",
      title: "Test Title",
      artist: "Test Artist",
      year: "2023",
      genre: "Test Genre",
    };

    render(<ArtPieceDetails {...props} />);

    const image = screen.getByAltText(props.title);
    expect(image.src).toContain(encodeURIComponent(props.image));
    expect(image).toHaveAttribute("height", "400");
    expect(image).toHaveAttribute("width", "400");
  });
});
