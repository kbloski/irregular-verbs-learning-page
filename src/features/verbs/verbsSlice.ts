import { createSlice } from "@reduxjs/toolkit";
import { VerbConfigurationType } from "./VerbType";

export type InitialStateType = {
    points: number,
    verbs: VerbConfigurationType[],
    currentVerbId: number 
}

const initialState : InitialStateType = {
    points: 0,
    verbs: [],
    currentVerbId: 0,
}

const learnSlice = createSlice({
    name: 'verbs',
    initialState,
    reducers: {
        setPoints: (state, action) => {
            state.points = action.payload;
        },
        setVerbs: (state, action) => {
            state.verbs = action.payload;
        },
        setCurrentVerbId: (state, action) => {
            state.currentVerbId = action.payload;
        },
        incrementCurrentVerbId(state, action){
            
            ++state.currentVerbId;
        }
    },
})

export default learnSlice;

// export const { setPoints, setVerbs, setCurrentVerbId } = learnSlice.actions;