import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const rotating = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const ButtonWrapper = styled.button`
  outline: none;
  height: 40px;
  text-align: center;
  width: 130px;
  border-radius: 40px;
  background: #fff;
  border: 2px solid #1ecd97;
  color: #1ecd97;
  letter-spacing: 1px;
  text-shadow: 0;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    color: white;
    background: #1ecd97;
  }

  &.onclic {
    width: 40px;
    border-color: #bbb;
    border-width: 3px;
    font-size: 0;
    border-left-color: #1ecd97;
    animation: ${rotating} 2s 0.25s linear infinite;
  }

  &.validate {
    font-size: 13px;
    color: white;
    background: #1ecd97;

    &:after {
      font-family: "FontAwesome";
      content: "\f00c";
    }
  }
`;

const CustomButton = ({ onClick, children }) => {
  const [buttonState, setButtonState] = useState("");

  const handleClick = () => {
    setButtonState("onclic");
    setTimeout(() => {
      setButtonState("");
      setButtonState("validate");
      setTimeout(() => {
        setButtonState("");
      }, 1250);
    }, 2250);
    if (onClick) onClick();
  };

  return (
    <ButtonWrapper className={buttonState} onClick={handleClick}>
      {children}
    </ButtonWrapper>
  );
};

export default CustomButton;
