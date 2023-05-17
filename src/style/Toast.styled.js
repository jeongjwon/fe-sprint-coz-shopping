import { keyboard } from "@testing-library/user-event/dist/keyboard";
import styled, { keyframes } from "styled-components";
export const ToastContainer = styled.div`
  position: absolute;
  bottom: 2rem;
  right:0;
  border-radius: 12px;
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.15);

  animation-duration: 1.5s;
  animation-name: ${slideIn};
  z-index: 1;
  /* transform: translateX(calc(100%-2rem));
  transition: all 2s  cubic-bezier(0.68, -0.55, 0.25, 1.35); */
`;

const slideIn = keyframes`
  from {
    margin-left: 100%;
    /* width: ; */
  }
  to{
    margin-left: 30%;
    width: 100%;
  }
`

export const ToastDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 1.5rem;
  > svg {
    fill: rgba(223, 223, 223);
    color: transparent;
    margin-right: 0.2rem;
  }
`;

