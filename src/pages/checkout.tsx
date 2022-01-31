import Page from "../layout/Page";
import CardPayment from "../components/ui/cart/CartPayment";
import { useAppSelector } from "../store/hooks";

export default function Checkout() {
  const lineItems = useAppSelector((state) => state.cart.lineItems);

  return (
    <Page title="Checkout" description="Checkout">
      <CardPayment lineItems={lineItems} />
    </Page>
  );
}
