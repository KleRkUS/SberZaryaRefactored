import React from "react";
import { Card } from "@sberdevices/ui";
import {
  Image,
  CardTitle,
  CardBody,
  TextBox
} from "./acievementsCardStyles";
import styled from "styled-components";

interface AchievementCard {
    title:  string,
    description?: string,
    picture: string,
    earned?: boolean
}

const StyledCard = styled(Card)`
    width: 162px;
    height: 114px;
    margin-right: 12px;
    box-sizing: border-box;
`;

const AchievementCard = ({title, picture}: AchievementCard):JSX.Element => {
    return(
        <StyledCard>
            <CardBody>
                <Image src={`/assets/pictures/achievements/all/${picture}`} alt={title}/>

                <TextBox>
                    <CardTitle>{title}</CardTitle>
                </TextBox>
            </CardBody>
        </StyledCard>
    );
}

export default AchievementCard;