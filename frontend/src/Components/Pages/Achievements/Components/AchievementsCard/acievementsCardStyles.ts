import styled from "styled-components";

const Image = styled.img`
  width: 48px;
  height: 48px;
`;

const CardTitle = styled.h2`
  font-size: 14px;
  margin: 0;
  color: #FFFFFF;
`;

const CardBody = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TextBox = styled.div`
  margin: 6px auto 0 auto;
`;

export {
    Image,
    CardTitle,
    CardBody,
    TextBox
}