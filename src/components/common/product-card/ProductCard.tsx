import styled from "styled-components";
import Image from "next/image";
import { Product } from "../../../interfaces/WooCommerceTypes";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import {
  addLineItem,
  decrementLineItemQuantity
} from "../../../store/slices/cartSlice";
import ProductCardInfo from "./ProductCardInfo";
import { useState } from "react";

interface Props {
  product: Product;
}

const ProductCard = (props: Props) => {
  const { product } = props;
  const [value, setValue] = useState(false);
  const [itemPrice, setItemPrice] = useState(product.sale_price);

  const cartState = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const lineItem: any = {
    name: product.name,
    product_id: product.id,
    quantity: 1,
    price: itemPrice
  };

  const handleSwitch = () => {
    setItemPrice((prevState) =>
      value ? product.sale_price : product.regular_price
    );
    setValue(!value);
  };

  const handleIncrement = () => {
    dispatch(addLineItem(lineItem));
  };

  const handleDecrement = () => {
    dispatch(decrementLineItemQuantity(lineItem));
  };

  const currQuantity: any =
    cartState.lineItems.length &&
    cartState.lineItems.find(
      (state) => state.product_id === lineItem.product_id
    )?.quantity;

  return product.images[0]?.src ? (
    <Card>
      <ImageContainer>
        <Image
          src={product.images[0].src}
          alt={product.images[0].alt}
          layout="fill"
          objectFit="cover"
        />
      </ImageContainer>
      <ProductCardInfo
        value={value}
        name={product.name}
        quantity={currQuantity}
        price={itemPrice}
        onSwitch={handleSwitch}
        onClickFunction={handleIncrement}
        onDecrementFunction={handleDecrement}
      />
    </Card>
  ) : (
    <div>Nothing</div>
  );
};

export default ProductCard;

const Card = styled.div`
  width: 100%;
  padding: 0 8px;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  /* height: 100%; */
  padding-bottom: 100%; /* forces square aspect ratio */
`;
