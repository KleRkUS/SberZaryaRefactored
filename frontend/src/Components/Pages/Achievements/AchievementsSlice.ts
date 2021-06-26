import {CaseReducer, createSlice, PayloadAction} from '@reduxjs/toolkit';
import { AchievementState, RegularAchievements } from "../../../Core/SberZarya";

const initialState: AchievementState = {
    allState: false,
    userState: false,
    userAchievements: [],
    allAchievements: []
}

const setAll:CaseReducer<AchievementState, PayloadAction<Array<RegularAchievements>>> = (state, action:PayloadAction<Array<RegularAchievements>>): void => {
    state.allAchievements = action.payload;
    state.allState = !0;
};
const setUser:CaseReducer<AchievementState, PayloadAction<Array<number>>> = (state, action:PayloadAction<Array<number>>): void => {
    state.userAchievements = action.payload;
    state.userState = !0;
}

const AchievementsSlice = createSlice({
    name: "achievements",
    initialState: initialState,
    reducers: {
        setAllAchievements: setAll,
        setUserAchievements: setUser
    }
});

export const {setAllAchievements, setUserAchievements} = AchievementsSlice.actions;
export default AchievementsSlice.reducer;