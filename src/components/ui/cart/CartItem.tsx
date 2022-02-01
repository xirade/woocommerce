import styled from "styled-components";
import { CartQty } from "../../common";
import { useAppDispatch } from "../../../store/hooks";
import {
  decrementLineItemQuantity,
  addLineItem,
  removeLineItem
} from "../../../store/slices/cartSlice";
import { LineItem } from "../../../interfaces/WooCommerceTypes";

interface Props {
  lineItem: LineItem;
}

// TODO refactor to separate file
const calculatePrice = (quantity: number, price: string) => {
  const formattedPrice = parseFloat(price) * 100;
  const result = (formattedPrice * quantity) / 100;
  return result.toFixed(2);
};

const CartItem = (props: Props) => {
  const dispatch = useAppDispatch();

  // copy lineItem object and set the quantity to 1 so only incrementing/decrementing by 1
  const data = { ...props.lineItem };
  data.quantity = 1;

  const increment = () => {
    dispatch(addLineItem(data));
  };

  const decrement = () => {
    dispatch(decrementLineItemQuantity(data));
  };

  const remove = () => {
    dispatch(removeLineItem(data));
  };

  return (
    <Wrapper>
      <button onClick={remove}>X</button>
      <div>{props.lineItem.name}</div>
      <CartQty
        key="cartqty1"
        quantity={props.lineItem.quantity}
        decrementFunction={decrement}
        incrementFunction={increment}
      />
      <div>
        ₪{calculatePrice(props.lineItem.quantity, String(props.lineItem.price!))}
      </div>
    </Wrapper>
  );
};

export default CartItem;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
    :first-child {
      width: 10%;
    }
    :nth-child(2) {
      width: 40%;
      text-align: left;
    }
    :nth-child(3) {
      width: 25%;
      text-align: center;
    }
    :nth-child(4) {
      width: 25%;
      text-align: right;
    }
  }
  button {
    background: none;
    padding: 6px 12px;
    border: 1px solid ${(props) => props.theme.colors.primary};
    border-radius: 3px;
    cursor: pointer;
    transition: all 0.25s ease;
    &:hover {
      background-color: #b98667;
      color: white;
    }
  }
`;
