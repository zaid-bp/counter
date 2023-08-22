import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface count{
    value:number;
    displayClicked:boolean
}
const initialState:count={
    value:0,
    displayClicked:false,
}
const counterSlice= createSlice({
    name:'counter',
    initialState,
    reducers:{
        incrementAge:(state)=>{
            state.value++
        },
        decrementAge:(state)=>{
            state.value--
        },
        ageByUser(state, action: PayloadAction<number>){
            if(action.payload){
                state.value = action.payload;
                state.displayClicked = false
            }
            else{
                state.value=state.value;
                state.displayClicked = false
            }
        },
        getInput(state){            
            state.displayClicked = true
        }

    }

})
export default counterSlice.reducer;
export const {incrementAge, decrementAge, ageByUser, getInput} = counterSlice.actions