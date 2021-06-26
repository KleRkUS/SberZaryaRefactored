import styled from "styled-components";

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const GalleryCard = styled.div`
    height: 240px;
    width: 256px;
    left: 0;
    top: 0;
    border-radius: 20px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.74) 100%);
`;

const CarouselMargin = styled.div`
  margin: 0 16px 0 0;
`;

const FadeCard = styled.div`
    position: absolute;
    height: 240px;
    width: 256px;
    border-radius: 20px;
    z-index: 1000;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.74) 100%);
    margin: 0 16px 0 0
`;

const ImgCard = styled.img`
    height: 240px;
    width: 256px;
    left: 0;
    top: 0;
    border-radius: 20px;
`;

const DataCard = styled.div`
    position: absolute;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 16px;
    width: 224px;
    height: 36px;
    left: 0;
    bottom: 0;
`;

const BlockIconCard = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin: 0 13px 0 0;
    width: 36px;
    height: 36px;
    z-index: 2000;
    background-color: rgba(255,255,255,0.56);
    border-radius: 50%;
`;

const IconCard = styled.img`
    width: 20px;
    height: 20px;
    top: 2.19%;
    bottom: 2.19%;
`;

const TextCard = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    color: rgba(255, 255, 255, 0.96);;
`;

export {
    MainContainer,
    GalleryCard,
    CarouselMargin,
    FadeCard,
    ImgCard,
    DataCard,
    BlockIconCard,
    IconCard,
    TextCard
}