import styled from "styled-components";
import Head from "next/head";
import Header from "../components/ui/Header";

interface Props {
  title: string;
  description: string;
  children?: React.ReactNode;
}

export default function Page(props: Props) {
  const { title, description, children } = props;
  return (
    <Container>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cabin&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <main>{children}</main>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  max-width: 1320px;
  margin: 0 auto;
  padding: 0 auto;
`;
