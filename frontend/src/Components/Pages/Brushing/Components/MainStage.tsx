import React, {useEffect, useState} from "react";
import styled from "styled-components";
import { updateTime } from "../BrushingSlice";
import { useDispatch, useSelector } from "react-redux";
import { BrushingSelectorState } from "../../../../Core/SberZarya";

interface MainStageProps {
    onEnd: () => void
}

const Container = styled.main`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  color: #fff;
`;

const TimePart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Timer = styled.h2`
  font-size: 60px;
`;

const MainStage = ({onEnd}:MainStageProps):JSX.Element => {
    const currentBrushingTime:number = useSelector(({brushing}: BrushingSelectorState) => brushing.time);
    const [seconds, setSeconds] = useState<number>(currentBrushingTime);
    const dispatch = useDispatch();
    const interval = setTimeout(timeUpdate, 1000);

    function timeUpdate() {
        setSeconds(seconds+1);
        dispatch(updateTime(seconds));
    }

    const getZeroed = ():string => {
        if (seconds >= 60) {
            return (seconds-60) >= 10 ? `${seconds-60}` : `0${seconds-60}`;
        } else {
            return seconds >= 10 ? `${seconds}` : `0${seconds}`;
        }
    }

    useEffect(() => {
        return function cleanup() {
            clearTimeout(interval);
        }
    }, []);

    useEffect(() => {
        if (seconds >= 120) {
            alert("Чистка закончилась!");
            clearTimeout(interval);
            onEnd();
        }
    }, [seconds]);


    return(
        <Container>

            <TimePart>
                <Timer>
                    {`0${Math.trunc(seconds / 60)}:${getZeroed()}`}
                </Timer>
            </TimePart>

        </Container>
    )
}

export default MainStage;