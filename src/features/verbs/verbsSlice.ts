import { createSlice } from "@reduxjs/toolkit";
import { VerbConfigurationType } from "./VerbType";

export type InitialStateType = {
    savedVerbsList: VerbConfigurationType[],
    verbs: VerbConfigurationType[],
    points: number,
    currentVerbId: number 
}

const initialState : InitialStateType = {
    savedVerbsList: [],
    verbs: [],
    points: 0,
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
            state.currentVerbId = Math.floor(Math.random() * action.payload.length); 
            
            state.verbs = action.payload;
            state.savedVerbsList = action.payload;
        },
        setCurrentVerbId: (state, action) => {
            state.currentVerbId = action.payload;
        },
        getNextVerb(state, action){
            if (!state.verbs.length) {
                state.verbs = state.savedVerbsList;
                console.log('test')
                
            } else {
                state.verbs.splice(state.currentVerbId, 1)
                console.log( state.verbs.length)

                // Get random ID
                state.currentVerbId = Math.floor(Math.random() * state.verbs.length); 

                state.points += 100;


            }


            // dodanie punktow
            // usuniecie bierzacego verb z id
            // wylosowanie kolejnego id z pozostalych wyrazow
        }
    },
})

export default learnSlice;

// export const { setPoints, setVerbs, setCurrentVerbId } = learnSlice.actions;