import React, { useState } from "react";
import styled from "styled-components";
import ToggleButton from "../button/ToggleButton";
import { Button, CartQty } from "../index";

interface Props {
  name: string;
  price: string;
  value: boolean;
  quantity: number;
  onSwitch: React.ChangeEventHandler<HTMLInputElement>;
  onClickFunction: React.MouseEventHandler<HTMLButtonElement>;
  onDecrementFunction: React.MouseEventHandler<HTMLButtonElement>;
}

const calculatePrice = (quantity: number, price: string) => {
  if (quantity) {
    const formattedPrice = parseFloat(price) * 100;
    const result = (formattedPrice * quantity) / 100;
    return result.toFixed(2);
  }
  return price;
};

const ProductCardInfo = (props: Props) => {
  const { name, price, value, quantity, onSwitch } = props;
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsClicked(true);
    props.onClickFunction(e);
    setTimeout(() => setIsClicked(false), 300);
  };

  return (
    <Wrapper>
      <SpanContainer>
        <span>{name}</span>
        <ToggleButton
          color="#fff"
          isClicked={value}
          onChangeFunction={onSwitch}
        />
      </SpanContainer>
      <SpanContainer>
        <CounterWrapper>
          <button onClick={props.onDecrementFunction}>-</button>
          <p>{quantity || 1}</p>
          <button onClick={props.onClickFunction}>+</button>
        </CounterWrapper>
        <strong>₪{calculatePrice(quantity, price)}</strong>
      </SpanContainer>
      <Button onClickFunction={handleClick} isClicked={isClicked}>
        ADD TO CART
      </Button>
    </Wrapper>
  );
};

export default ProductCardInfo;

const Wrapper = styled.div`
  width: 100%;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 5%;
  padding-bottom: 7%;
`;

const CounterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1em;
  gap: 0.8em;
  button {
    background: none;
    border: 1px solid ${(props) => props.theme.colors.primary};
    border-radius: 3px;
    padding: 6px 12px;
    cursor: pointer;
    transition: all 0.25s ease;
    &:hover {
      background-color: #b98667;
      color: white;
    }
  }
`;

const SpanContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.2em;
  gap: 12px;
`;
