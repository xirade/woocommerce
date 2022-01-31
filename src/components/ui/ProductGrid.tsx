import styled from "styled-components";
import { Product } from "../../interfaces/WooCommerceTypes";
import { ProductCard } from "../../components/common";

interface Props {
  products: Product[];
}

const ProductGrid = (props: Props) => {
  const { products } = props;

  return (
    <Grid>
      {products.map((product) => {
        return <ProductCard product={product} key={product.id} />;
      })}
    </Grid>
  );
};

export default ProductGrid;

const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr auto 1fr;
  gap: 16px;
  @media (max-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
