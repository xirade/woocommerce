import React from "react";
import styled from "styled-components";

interface Props {
  className?: string;
  children?: React.ReactNode;
  onClickFunction: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

const CTA = (props: Props) => {
  return (
    <StyledButton
      className={props.className}
      onClick={props.onClickFunction}
      disabled={props.disabled}
    >
      {props.children}
    </StyledButton>
  );
};

export default CTA;

const StyledButton = styled.button`
  width: 100%;
  padding: 16px 20px;
  border: none;
  background: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.darkText};
  &:disabled {
    opacity: 0.4;
    background: lightgrey;
  }
  transition: background-color 0.2s ease;
  padding: 1em 1em;
  cursor: pointer;
  transition: 0.25s;
  margin-top: 20px;
  &:hover {
    color: #f7f2f9;
    background-color: #b98667;
  }
  &:active {
    font-weight: bold;
  }
`;
