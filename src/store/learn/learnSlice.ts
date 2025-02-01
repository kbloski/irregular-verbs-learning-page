import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    points: 0,
    verbs: [],
    currentVerb: null,
}

const learnSlice = createSlice({
    name: 'learn',
    initialState,
    reducers: {
        setPoints: (state, action) => {
            state.points = action.payload;
        },
        setVerbs: (state, action) => {
            state.verbs = action.payload;
        },
        setCurrentVerb: (state, action) => {
            state.currentVerb = action.payload;
        }
    },
})

export default learnSlice;

export const { setPoints, setVerbs, setCurrentVerb } = learnSlice.actions;