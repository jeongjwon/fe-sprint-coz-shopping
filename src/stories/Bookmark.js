import { useState } from "react";
import { styled } from "styled-components";
// import {Star}  from 'react-feather';
import {Star} from '@styled-icons/bootstrap';
import {StarFill} from '@styled-icons/bootstrap';

const bookmarkOn = '#ffd361';

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
    // <FeatherIcon  color="#ffd361" onClick={() => setBookmark(!bookmark)}/>;
        /* <><Star bookmark={bookmark} onClick={() => setBookmark(!bookmark)}/></> */

        
}

