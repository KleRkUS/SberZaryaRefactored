import React from "react";
import {
    Card,
    CardBody,
    CardContent,
    TextBox,
    TextBoxBigTitle,
    Row,
    Col,
    Container,
    CardMedia
} from "@sberdevices/ui";
import {
    CardAmount,
    Image,
    Fade
} from "./generalBlockStyles";
import styled from "styled-components";
import { RegularAchievements } from "../../../../../Core/SberZarya";

interface GeneralBlock {
    achievements: number[],
    allAchievements: RegularAchievements[]
}

const StyledCardMedia = styled(CardMedia)`
  position: absolute;
`;

const StyledCardContent = styled(CardContent)`
  text-align: center
`;

const StyledContainer = styled(Container)`
  margin-top: 20px
`;

const GeneralBlock = ({achievements, allAchievements}: GeneralBlock): JSX.Element => {
    const amount = achievements.length;

    const generateIcons = ():Array<JSX.Element> => {
        const icons: JSX.Element[] = [];
        for (let i:number = 0; i < 4; i++) {
            let icon: JSX.Element;

            if (achievements[i] !== undefined) {
                const current = allAchievements[achievements[i]];
                icon = <Image
                            src={`/assets/pictures/achievements/all/${current.img}`}
                            alt={current.title}
                        />
            } else {
                icon = <Image
                            src="/assets/pictures/achievements/all/empty.svg"
                            alt="None"
                        />
            }
            icons.push(<Col size={1} key={i}> {icon} </Col>);
        }
        return icons;
    }


    const icons:Array<JSX.Element> = generateIcons();

    return(
        <Card>
            <CardBody>

                <StyledCardMedia src="/assets/pictures/achievements/main_background.jpg"/>
                <Fade/>

                <StyledCardContent>

                    <CardAmount>{amount}</CardAmount>
                    <TextBox>
                        <TextBoxBigTitle>награда</TextBoxBigTitle>
                    </TextBox>

                    <StyledContainer>
                        <Row>
                            {icons}
                        </Row>
                    </StyledContainer>

                </StyledCardContent>

            </CardBody>
        </Card>
    )
}

export default GeneralBlock;