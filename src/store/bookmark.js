import { createSlice } from "@reduxjs/toolkit";

const initialbookmarkState =
  localStorage.getItem("bookmark")
    ? JSON.parse(localStorage.getItem("bookmark"))
    : []


const bookmarkSlice = createSlice({
    name:"bookmark",
    initialState: initialbookmarkState,
    reducers: {
        toggleBookmark(state, action) {
            if(state.includes(action.payload)){
                state.splice(state.indexOf(action.payload),1); //있으면 삭제

            }else{
                state.push(action.payload); //없으면 추가
            }
            //로컬스토리에 다시 세팅
            localStorage.setItem("bookmark", JSON.stringify(state));
        }
    }
});

export const bookmarkActions = bookmarkSlice.actions;
export default bookmarkSlice.reducer;