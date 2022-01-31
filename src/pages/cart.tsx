import Page from "../layout/Page";
import { useAppSelector } from "../store/hooks";
import Cart from "../components/ui/cart/Cart";

export default function CartPage() {
  const cartState = useAppSelector((state) => state.cart);

  return (
    <Page title="Cart" description="Cart">
      <Cart lineItems={cartState.lineItems} />
    </Page>
  );
}
