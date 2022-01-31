import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import { Order } from "../interfaces/WooCommerceTypes";

// init the WooCommerceApi
const api = new WooCommerceRestApi({
  url: process.env.API_URL!,
  consumerKey: process.env.WOOCOMMERCE_KEY!,
  consumerSecret: process.env.WOOCOMMERCE_SECRET!,
  version: "wc/v3"
});

// fetch all products from Woocommerce

export async function fetchWooCommerceProducts() {
  try {
    const res = await api.get("products");
    return res;
  } catch (err: any) {
    throw new Error(err);
  }
}

//  create a new WooComerce order
export async function createWooCommerceOrder(data: Order) {
  try {
    const res = await api.post("orders", data);
    return res;
  } catch (err: any) {
    throw new Error(err);
  }
}

export async function retrieveProductById(productId: string) {
  try {
    const response = await api.get(`products/${productId}`);
    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
}
