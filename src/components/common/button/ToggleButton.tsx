import React from "react";
import styled from "styled-components";

interface Props {
  children?: React.ReactNode;
  className?: string;
  onChangeFunction?: React.ChangeEventHandler<HTMLInputElement>;
  isClicked?: boolean;
  color?: string;
}

const ToggleButton = (props: Props) => {
  const { isClicked, color, onChangeFunction } = props;
  return (
    <Wrapper>
      <label
        style={{ background: `${isClicked && color}` }}
        className="react-switch"
      >
        <input
          checked={isClicked}
          onChange={onChangeFunction}
          className="react-switch-checkbox"
          type="checkbox"
        />
        <div className="react-switch-button" />
        <div className="react-switch-labels">
          <span>IU</span>
          <span>KG</span>
        </div>
      </label>
    </Wrapper>
  );
};

export default ToggleButton;

const Wrapper = styled.div`
  display: flex;
  justifycontent: center;
  alignitems: center;
  .react-switch-checkbox {
    height: 0;
    width: 0;
    position: absolute;
    visibility: hidden;
  }

  .react-switch {
    cursor: pointer;
    width: 100px;
    height: 50px;
    background: #fff;
    position: relative;
    transition: font background-color 0.2s;
  }

  .react-switch .react-switch-button {
    position: absolute;
    z-index: 1;
    top: 2px;
    left: 2px;
    width: 45px;
    height: 45px;
    transition: 0.2s;
    background: rgba(247, 242, 249, 0.5);
    box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
  }

  .react-switch-checkbox:checked + .react-switch-button {
    left: calc(100% - 2px);
    transform: translateX(-100%);
  }

  .react-switch-checkbox:active + .react-switch-button {
    width: 60px;
  }

  .react-switch-labels {
    display: relative;
    z-index: 0;
    height: 100%;
  }

  .react-switch-labels span {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 100%;
  }
  .react-switch-labels span:first-child {
    left: 0;
  }
  .react-switch-labels span:last-child {
    right: 0;
  }
`;
