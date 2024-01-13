import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    logged : false,
    userId : null,
    userCount:null,
    loading:false,
    file:[],
    content:"",
}

const ASlice = createSlice({
    name:"log",
    initialState,
    reducers:{
        login: (state,action)=>{
            state.logged = true;
            state.userId = action.payload.id;
            state.userCount = action.payload.country;
            console.log(state.userCount);
            state.loading=true;
        },
        logout: (state)=>{
            state.logged = false;
            state.userId=null;
            state.userCount =null;
            state.loading=true;
            state.file=[];
        },
        setLoad:(state,action)=>{
            console.log(action);
            const curr=action.payload;
            return{
                ...state,
                loading:curr,
            }
        },
        setA:(state,action)=>{
            console.log(action);
            state.file=action.payload;
        },
        setC:(state,action)=>{
            console.log(action);
            state.content=action.payload;
        }
    }
})


export const {login, logout,setLoad,setA,setC} = ASlice.actions;

export default ASlice.reducer;