import { useState } from "react";
import { styled } from "styled-components";
import {Star} from '@styled-icons/bootstrap';
import {StarFill} from '@styled-icons/bootstrap';


export const Bookmark = () =>{
    
    const [bookmark, setBookmark] = useState(false);
   
    const StarIcon = styled(Star)`
        color: gray;

    `;
    const StarFillIcon = styled(StarFill)`
        color: #ffd361;
    `
    const handleBookmark = () =>{
        setBookmark(!bookmark);
    }
    return(
        <>
        { !bookmark 
            ? <StarIcon size={35}  onClick={handleBookmark}/>
              : <StarFillIcon size={35} onClick={handleBookmark}/>}
        </>
    ) 
   
        
}

