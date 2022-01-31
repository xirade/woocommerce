import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import { GetStaticProps } from "next";
import { fetchWooCommerceProducts } from "../api/wooCommerce.api";
import { Product } from "../interfaces/WooCommerceTypes";
import Page from "../layout/Page";
import ProductGrid from "../components/ui/ProductGrid";

// declare types for the functional component props //
interface Props {
  products: Product[];
}

export default function Home(props: Props) {
  // destructure props //
  const { products } = props;

  return (
    <Page title="Menu" description="Menu page">
      <ProductGrid products={products} />
    </Page>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const wooCommerceProducts = await fetchWooCommerceProducts().catch((error) =>
    console.error(error)
  );

  if (!wooCommerceProducts) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      products: wooCommerceProducts.data
    }
    // revalidate: 60 // regenerate page with new data fetch after 60 seconds
  };
};
