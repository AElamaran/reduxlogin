// normally redux says to maintain the features folder for maintain reducers

import {createSlice} from '@reduxjs/toolkit';

//create slice helps to make particular state object like userprofile details

export const themeSlice= createSlice({
    name:'user',
    initialState:{value:{color:'black'}},
    // reducers is the object. in this object we going to pass list of Actions
    //Action means when user interact with app , how the state going to change
    //login is on action
    reducers:{
        changeColor:(state,action)=>{
            //action has 2 parameters that are type and payload
            //payload is helps to change the valuse of state when we calling the action
            //helps to identifu which type of action tiggered
            state.value=action.payload

        }

    }
})

export default themeSlice.reducer;
export const {changeColor}=themeSlice.actions;