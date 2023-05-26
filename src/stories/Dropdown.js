import { styled } from "styled-components";
import { useState } from "react";
import { Menu } from "react-feather";
import { LabelText } from "./Typography";

const DropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const DropShark = styled.div`
  width: 0px;
  height: 0px;
  border-bottom: calc(1rem * 1.732) solid white;
  border-left: 1rem solid transparent;
  border-right: 1rem solid transparent;
  background-color: transparent;
  /* width: 1.6rem;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  background-color: black;
  box-shadow: 0px -2px 8px 5px rgba(0, 0, 0, 0.1); */
  
  
`;
const DropdownMenu = styled.div`
  width: 15rem;
  border-radius: 1.2rem;
  background: white;
  box-shadow: 0px -2px 8px 5px rgba(0, 0, 0, 0.1);
`;
const ItemBox = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  text-align: center;
  padding-top: 0.5rem;

  &:last-child {
    border: none;
  }
`;
export const Dropdown = ({ list }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <DropdownContainer>
      <Menu onClick={() => setIsOpen(!isOpen)} />

      {isOpen && (
        <>
          <DropShark />
          <DropdownMenu>
            {list.map((e) => (
              <ItemBox>
                <LabelText>{e}</LabelText>
              </ItemBox>
            ))}
          </DropdownMenu>
        </>
      )}
    </DropdownContainer>
  );
};
