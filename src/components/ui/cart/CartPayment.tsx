import styled from "styled-components";
import { CTA, Modal } from "../../common";
import React, { useState } from "react";
import { LineItem } from "../../../interfaces/WooCommerceTypes";
import { useAppDispatch } from "../../../store/hooks";
import { resetCartState } from "../../../store/slices/cartSlice";
import { useRouter } from "next/router";

interface Props {
  lineItems: LineItem[];
}

const CardPayment = (props: Props) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();

    // clear Redux cart
    dispatch(resetCartState());

    // re-direct to menu
    router.push("/");
  };

  return (
    <>
      <Form id="card-payment-form">
        <Row>
          <div>
            <label htmlFor="fName">First name</label>
            <input name="fName" type="text" />
          </div>
          <div>
            <label htmlFor="lName">Last name</label>
            <input name="lName" type="text" />
          </div>
          <div>
            <label htmlFor="country">Country</label>
            <select name="country" id="country">
              <option value="USA">USA</option>
              <option value="ISRAEL">ISRAEL</option>
              <option value="MEXICO">MEXICO</option>
            </select>
          </div>
          <div>
            <label htmlFor="street">Street address</label>
            <input name="street" type="text" />
          </div>
          <div>
            <label htmlFor="city">City</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="state">State / Province</label>
            <input name="state" type="text" />
          </div>
          <div>
            <label htmlFor="zip">ZIP / Postal code</label>
            <input name="zip" type="text" />
          </div>
          <CTA
            onClickFunction={handleFormSubmit}
            disabled={!props.lineItems.length}
          >
            PAY NOW
          </CTA>
        </Row>
        <ErrorMessage>{error}</ErrorMessage>
      </Form>
      {isLoading && <Modal message="Processing card..." />}
    </>
  );
};

export default CardPayment;

const Form = styled.form`
  width: 100%;
  /* Stripe Element containers can also be styled by class */
  .card-element {
    width: 100%;
    margin-bottom: 1rem;
    border: 1px solid ${(props) => props.theme.colors.primary};
    border-radius: 3px;
    padding: 10px;
  }
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  padding: 10px;
  div {
    grid-column: span 6 / span 6;
    label {
      display: block;
    }
    input,
    select {
      display: block;
      width: 100%;
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
      border-color: rgba(209, 213, 219, 0.2);
      appearance: none;
      background-color: #fff;
      border-color: #6b7280;
      border-width: 1px;
      border-radius: 0;
      margin-top: 15px;
      padding-top: 0.5rem;
      padding-right: 0.75rem;
      padding-bottom: 0.5rem;
      padding-left: 0.75rem;
      font-size: 1rem;
      line-height: 1.5rem;
    }
    select {
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
      background-position: right 0.5rem center;
      background-repeat: no-repeat;
      background-size: 1.5em 1.5em;
      padding-right: 2.5rem;
      -webkit-print-color-adjust: exact;
    }
  }
`;

const ErrorMessage = styled.div`
  color: #fa004f;
  padding-top: 8px;
`;
