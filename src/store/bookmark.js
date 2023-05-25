import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { styled } from "styled-components";
// import Toast from "../components/Toast";
import bookmarkIconOff from "../assets/bookmark_off.png";
import bookmarkIconOn from "../assets/bookmark_on.png";

export const ToastBox = styled.div`
    display: flex;
    align-items: center;
    > img {
        margin-right: 0.5rem;
    }
    > span{
        color: black;
    }
`;
const Toast = ({ text, image}) => {
    return (
      <ToastBox>
        <img src={image} alt='toast' />
        <span>{text}</span>
      </ToastBox>
    );
  };

const initialbookmarkState =
  localStorage.getItem("bookmark")
    ? JSON.parse(localStorage.getItem("bookmark"))
    : [];


const bookmarkSlice = createSlice({
    name:"bookmark",
    initialState: initialbookmarkState,
    reducers: {
        toggleBookmark(state, action) {
            if(state.includes(action.payload)){
                state.splice(state.indexOf(action.payload),1); //있으면 삭제
                toast(<Toast 
                    text='상품이 북마크에서 제거되었습니다.'
                    image={`${bookmarkIconOff}`}/>);
              
          
            }else{
                state.push(action.payload); //없으면 추가
                toast(<Toast 
                    text='상품이 북마크에서 추가되었습니다.'
                    image={`${bookmarkIconOn}`}/>);
            }
            //로컬스토리에 다시 세팅
            localStorage.setItem("bookmark", JSON.stringify(state));
        }
    }
});

export const bookmarkActions = bookmarkSlice.actions;
export default bookmarkSlice.reducer;