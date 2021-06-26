import React, {useEffect, useState} from "react";
import {Container, Header as HeaderBlock} from '@sberdevices/ui';
import Routes from "../../Core/PagesRoutingConfig";
import {useHistory, useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
import { AchievementSelectorState, RegularAchievements } from "../../Core/SberZarya";
import { locationsWithTitle } from "../../utils/consts";

const Header = (): JSX.Element => {
    const location = useLocation();
    const history = useHistory();
    const uniqueRegex = /achievement=(\d)/;
    const allAchievements: RegularAchievements[] = useSelector(({achievements}: AchievementSelectorState) => achievements.allAchievements);

    const [currLocation, setLocation] = useState<string>(location.pathname);
    const [locationTitle, setLocationTitle] = useState<string>(Routes[location.pathname]);


    useEffect(() => {
        const matches = location.pathname.match(uniqueRegex)

        if (matches) {
            const newTitle: string = allAchievements.filter((elem: RegularAchievements) => elem.id === Number(matches[1]))[0].title;
            setLocationTitle(newTitle);
        } else {
            setLocationTitle(Routes[location.pathname]);
            setLocation(location.pathname);
        }
    }, [location]);

    useEffect(() => {
        console.log(history);
    }, [history]);

    return(
        <Container>
            {locationsWithTitle.indexOf(currLocation) !== -1 &&
                <HeaderBlock
                    back={true}
                    title={locationTitle}
                    onBackClick={():void => {
                        history.goBack();
                    }}
                    style={{cursor: "pointer"}}
                />
            }

            {locationsWithTitle.indexOf(currLocation) === -1 &&
                <HeaderBlock
                  back={false}
                  logo={'./assets/icons/Header-icon.svg'}
                  logoAlt="SberZarya"
                  title="SberZarya"
                  subtitle="Чистим зубы правильно"
                />
            }

        </Container>
    );
}

export default Header;