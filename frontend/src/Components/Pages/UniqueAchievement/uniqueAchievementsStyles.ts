import styled from "styled-components";

const Container = styled.section`
  margin: 0 auto;
  width: 526px;
`;

const Fade = styled.div`
  width: 100%;
  height: 100%;
  position:absolute;
  top: 0;
  left: 0;
  background-image: linear-gradient(180deg, rgba(8, 8, 8, 0) 0%, #080808 100%)
`;

const AchievementIcon = styled.img`
    width: 48px;
    height: 48px;
`;

const UniqueTitle = styled.h2`
  font-size: 20px;
  color: #fff;
  margin-top: 21px;
  margin-bottom: 12px;
`;

const UniqueSubTitle = styled.span`
  font-size: 14px;
  color: #fff;
`;

const CardText = styled.div`
  align-self: center; 
`;

export {
    Container,
    Fade,
    AchievementIcon,
    UniqueTitle,
    UniqueSubTitle,
    CardText
}