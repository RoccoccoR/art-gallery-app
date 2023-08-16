import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

const ArtPieceDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const BackLink = styled(Link)`
  margin-top: 20px;
  margin-bottom: 20px;
`;

const ArtInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  margin-top: 20px;
`;

export default function ArtPieceDetails({ image, title, artist, year, genre }) {
  return (
    <ArtPieceDetailsContainer>
      <BackLink href="/art-pieces">← Go Back to Gallery</BackLink>
      <Image src={image} height={400} width={400} alt={title} />
      <ArtInfo>
        <span>{artist}</span>
        <span>{title}</span>
        <span>{genre}</span>
        <span>{year}</span>
        <FavoriteButton />
      </ArtInfo>
    </ArtPieceDetailsContainer>
  );
}
