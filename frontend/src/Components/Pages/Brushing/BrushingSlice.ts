import { CaseReducer, createSlice, PayloadAction, Draft } from '@reduxjs/toolkit';
import { BrushingState } from "../../../Core/SberZarya";

const initialState: BrushingState = {
    ongoingBrushing:false,
    time: 0
}

const brushingStarted: CaseReducer<BrushingState> = (state: Draft<BrushingState>): void => {
    state.ongoingBrushing = true;
}

const brushingEnded: CaseReducer<BrushingState> = (state: Draft<BrushingState>): void => {
    state.ongoingBrushing = false;
}

const setTime: CaseReducer<BrushingState, PayloadAction<number>> = (state: Draft<BrushingState>, action:PayloadAction<number>): void => {
    state.time = action.payload;
}

const BrushingSlice = createSlice({
    name: "brushing",
    initialState: initialState,
    reducers: {
        brushStart: brushingStarted,
        brushEnd: brushingEnded,
        updateTime: setTime
    }
});

export const {brushStart, brushEnd, updateTime} = BrushingSlice.actions;
export default BrushingSlice.reducer;