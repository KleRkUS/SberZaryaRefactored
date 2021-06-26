import React from "react";
import {
    Row,
    Carousel,
    CarouselItem,
    CarouselGridWrapper
}  from '@sberdevices/ui';
import {
    MainContainer,
    GalleryCard,
    CarouselMargin,
    FadeCard,
    ImgCard,
    DataCard,
    BlockIconCard,
    IconCard,
    TextCard
} from "./mainStyles";
import { Link } from "react-router-dom";
import { routeBlocks } from "../../../utils/consts";
import { RouteBlock } from "../../../Core/SberZarya";

const Main = ():JSX.Element => (
        <MainContainer>
            <CarouselGridWrapper>

                <Carousel
                    as={Row}
                    axis="x"
                    scrollSnapType="mandatory"
                    paddingStart="58px"
                    index={0}
                >
                    {routeBlocks.map((item: RouteBlock, i: number) => (

                    <CarouselMargin>
                        <CarouselItem key={`item:${i}`} >
                            <Link to={item.link}>

                                <FadeCard>
                                    <DataCard>
                                        <BlockIconCard>
                                            <IconCard src={`./assets/icons/${item.icon}`} />
                                        </BlockIconCard>
                                        <TextCard>
                                            {item.title}
                                        </TextCard>
                                    </DataCard>
                                </FadeCard>
                                <GalleryCard>
                                    <ImgCard src={`./assets/pictures/main_page/${item.img}`}/>
                                </GalleryCard>

                            </Link>
                        </CarouselItem>
                    </CarouselMargin>

                ))}
            </Carousel>

        </CarouselGridWrapper>
    </MainContainer>
)

export default Main;