import styled from "styled-components";

const CardAmount = styled.h2`
  font-size: 96px;
  align-self: center;
  color: #FFFFFF;
  margin: 57px 0;
`;

const Image = styled.img`
  width: 24px;
  height: 24px;
`;

const Fade = styled.div`
  width: 100%;
  height: 100%;
  position:absolute;
  top: 0;
  left: 0;
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.74) 100%);,
`;

export {
    CardAmount,
    Image,
    Fade
}