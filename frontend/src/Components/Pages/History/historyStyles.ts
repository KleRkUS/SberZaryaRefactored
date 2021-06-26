import styled from "styled-components";

const Time = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0 0 0;
    font-style: normal;
    font-weight: normal;
    font-size: 50px;
    line-height: 64px;
    letter-spacing: -0.019em;
    color: rgba(255, 255, 255, 0.96);
`;

const TimeText = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: -0.019em;
    color: rgba(255, 255, 255, 0.96);
`;

const WeekText = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.019em;
    color: rgba(255, 255, 255, 0.56);
`;

const NewHr = styled.div`
    height: 1px;
    width: 100%;
    background: rgba(255, 255, 255, 0.2);
    margin: 11px 0;
`;

const AverageTimeText = styled.span`
    margin: 0 8.5px; 
    font-size: 30px; 
    color: #2AC673
`;

export {
    Time,
    TimeText,
    WeekText,
    NewHr,
    AverageTimeText
}