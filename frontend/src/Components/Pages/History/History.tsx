import React from "react";
import {
  Row,
  Carousel,
  CarouselItem,
  CarouselGridWrapper,
  CardContent,
  Card,
  TextBox
}  from '@sberdevices/ui';
import styled from "styled-components";
import { timeMock } from "../../../utils/consts";
import { HistoryPart } from "../../../Core/SberZarya";
import {
    Time,
    TimeText,
    WeekText,
    NewHr,
    AverageTimeText
} from "./historyStyles";

const StyledCard = styled(Card)`
    height: 208px;
    width: 165px;
    margin: 0 16px 0 0
`;

const History = (): JSX.Element => {

    return(
        <CarouselGridWrapper>
            <Carousel
                as={Row}
                axis="x"
                index={1}
                scrollSnapType="mandatory"
                detectActive
                detectThreshold={0.5}
                paddingStart="10%"
                paddingEnd="10%"
            >
                    <CarouselItem>

                        <StyledCard>
                            <CardContent>
                                <Time>
                                    01<AverageTimeText>:</AverageTimeText>40
                                </Time>
                                <TimeText>
                                    Среднее время
                                </TimeText>
                                <WeekText>
                                    За неделю
                                </WeekText>
                            </CardContent>
                        </StyledCard>

                    </CarouselItem>
                    <CarouselItem>

                        <StyledCard>
                            <CardContent>
                                {timeMock.map((item: HistoryPart, i: number) => (
                                    <>
                                    <TextBox
                                        key={i}
                                        size="m"
                                        subTitle={item.subTitle}
                                        title={item.title}
                                    />
                                    {i < timeMock.length - 1 &&
                                        <NewHr />
                                    }
                                    </>
                                ))}
                            </CardContent>
                        </StyledCard>

                    </CarouselItem>
            </Carousel>
        </CarouselGridWrapper>
    );
}

export default History;