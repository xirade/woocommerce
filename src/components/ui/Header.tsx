import styled from "styled-components";
import { Heading } from "../../components/common";
import Navbar from "../../components/ui/Navbar";

const Header = () => {
  return (
    <Wrapper>
      <Heading textAlign="center">But First Coffee Shop</Heading>
      <Navbar />
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  width: 100%;
  padding: 1em 0;
`;
