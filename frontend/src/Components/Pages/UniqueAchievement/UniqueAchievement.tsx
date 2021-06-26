import React from "react";
import {
    Card,
    CardBody,
    CardContent,
    CardMedia
} from "@sberdevices/ui";
import {
    Container,
    Fade,
    AchievementIcon,
    UniqueTitle,
    UniqueSubTitle,
    CardText
} from "./uniqueAchievementsStyles";
import styled from "styled-components";
import {useSelector} from "react-redux";
import { AchievementSelectorState, RegularAchievements } from "../../../Core/SberZarya";

interface UniqueAchievement {
    id:number
}

const StyledCard = styled(Card)`
  height: 240px;
`;

const StyledCardMedia = styled(CardMedia)`
  position: absolute;
`;

const StyledCardContent = styled(CardContent)`
  margin-top: 40px
`;

const UniqueAchievement = ({id}: UniqueAchievement): JSX.Element => {
    const achievement: RegularAchievements = useSelector(({achievements}: AchievementSelectorState) => achievements.allAchievements)
                                                      .filter((elem: RegularAchievements) => elem.id === Number(id))[0];

    return(
        <Container>
            <StyledCard>
                <CardBody>
                    <StyledCardMedia src="/assets/pictures/achievements/unique/img.jpg"/>
                    <Fade/>

                    <StyledCardContent>
                        <Container>

                            <CardText>
                                <AchievementIcon
                                    src={`/assets/pictures/achievements/all/${achievement.img}`}
                                />
                                <UniqueTitle>{achievement.title}</UniqueTitle>
                                <UniqueSubTitle>{achievement.description}</UniqueSubTitle>
                            </CardText>

                        </Container>
                    </StyledCardContent>
                </CardBody>
            </StyledCard>
        </Container>
    );
}

export default UniqueAchievement;