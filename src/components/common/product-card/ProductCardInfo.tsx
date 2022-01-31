import React, { useState } from "react";
import styled from "styled-components";
import ToggleButton from "../button/ToggleButton";
import { Button } from "../index";

interface Props {
  name: string;
  price: string;
  value: boolean;
  onSwitch: React.MouseEventHandler<HTMLButtonElement>;
  onClickFunction: React.MouseEventHandler<HTMLButtonElement>;
}

const ProductCardInfo = (props: Props) => {
  const { name, price, value, onSwitch } = props;
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsClicked(true);
    props.onClickFunction(e);
    setTimeout(() => setIsClicked(false), 300);
  };

  return (
    <Wrapper>
      <SpanContainer>
        <span>
          {name}
          <strong>₪{price}</strong>
        </span>
        <ToggleButton
          color="#fff"
          isClicked={value}
          onChangeFunction={onSwitch}
        />
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

const SpanContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.2em;
  gap: 12px;
  strong {
    margin-left: 15px;
  }
`;
