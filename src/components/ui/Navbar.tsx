import styled from "styled-components";
import { NavHeading } from "../../components/common/";

const Navbar = () => {
  return (
    <Wrapper>
      <NavHeading link="/">Menu</NavHeading>
      <NavHeading link="/cart">Cart</NavHeading>
      <NavHeading link="/checkout">Checkout</NavHeading>
      <div className="dot"></div>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  a:hover {
    color: #E4BC98;
  }

  .dot {
    order: -1;
    width: 6px;
    height: 6px;
    background: #E4BC98;
    border-radius: 50%;
    opacity: 0;
    -webkit-transform: translateX(50px) translateY(20px);
    transform: translateX(50px) translateY(20px);
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
  }

  a:nth-child(1):hover ~ .dot {
    -webkit-transform: translateX(50px) translateY(20px);
    transform: translateX(50px) translateY(20px);
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
    opacity: 1;
  }

  a:nth-child(2):hover ~ .dot {
    -webkit-transform: translateX(115px) translateY(20px);
    transform: translateX(115px) translateY(20px);
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
    opacity: 1;
  }

  a:nth-child(3):hover ~ .dot {
    -webkit-transform: translateX(190px) translateY(20px);
    transform: translateX(190px) translateY(20px);
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
    opacity: 1;
  }

  a:nth-child(4):hover ~ .dot {
    -webkit-transform: translateX(285px) translateY(20px);
    transform: translateX(285px) translateY(20px);
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
    opacity: 1;
  }
`;
