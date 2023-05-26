import { styled } from "styled-components";
import { TitleText } from "./Typography";

export const CardContainer = styled.div`

    position: relative;
    display: flex;
    flex-direction: column;
    /* justify-content: center;
    align-items: center; */

    & > img {
        width: 10rem;
        border-radius: 0.5rem;
    }
    & > strong {
        
        margin-top: 0.5rem;
        font-weight: 600;
    }
`

export const Card = ({label, imgSrc, ...rest}) => {
    return(
        <CardContainer {...rest}>
            
            {imgSrc && <img src={imgSrc} alt={imgSrc}></img>}
            {label && <TitleText>{label}</TitleText>}

        </CardContainer>
    )
}