import styled from "styled-components";

export const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  max-width: 100%;
  display: block;
`;

export const Img = styled.img`
  object-fit: cover;
  object-position: center;
  border: dashed 2px rgba(164, 165, 173, 0.875);
  width: 6.5rem;
  height: 6.5rem;
  border-radius: 100%;
  max-width: 100%;
  display: inline-block;
  vertical-align: top;
`;
