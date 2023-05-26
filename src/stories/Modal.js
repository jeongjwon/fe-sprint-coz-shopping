import { Card } from "./Card";
import { useState } from "react";
import { styled } from "styled-components";
import { X } from "react-feather";

const Backdrop = styled.div`
  position: fixed;
  top: 0%;
  left: 0%;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.backdrop ? "rgba(0,0,0,0.25)" : undefined};
`;
const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  padding: 2rem;
  display: flex;

  box-shadow: ${`rgba(0,0,0,0.25) 0px 4px 16px`};
  border-radius: 8px;
  width: 20rem;
  height: 15rem;
  background-image: url(${(props) => props.imgSrc});
  background-repeat: no-repeat;
  background-size: cover;
`;
export const Modal = ({ backdrop, label, imgSrc, ...rest }) => {
  const [isModal, setIsModal] = useState(false);
  return (
    <>
      <Card
        label={label}
        imgSrc={imgSrc}
        onClick={() => setIsModal(!isModal)}
      />
      {isModal && (
        <Backdrop backdrop={backdrop || undefined}>
          <ModalBody imgSrc={imgSrc}>
            <X onClick={() => setIsModal(!isModal)} />
            {label && <div>{label}</div>}
          </ModalBody>
        </Backdrop>
      )}
    </>
  );
};
