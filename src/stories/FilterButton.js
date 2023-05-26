import { styled,css } from "styled-components";
import { LabelText } from "./Typography";
import globalToken from "../tokens/global.json";

const { Primary } = globalToken;

const ButtonContainer = styled.button`
    border: none;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;

    & > img {
        width: 82px;
        height: 82px;
        border-radius: 100%;
    }

    ${(props) => 
        props.primary 
        ?  css`
            & > h3 {
                color: ${Primary.value};
                border-bottom: solid 2px ${Primary.value};
            }
        ` 
        : css`
        `};


    
`
export const FilterButton = ({primary, label, imgSrc, ...rest}) => {
    return(
        <ButtonContainer primary={primary} gap={10} {...rest}>
            {imgSrc && <img src={imgSrc}></img>}
            {label && <LabelText>{label}</LabelText>}
        </ButtonContainer>
    )
}
