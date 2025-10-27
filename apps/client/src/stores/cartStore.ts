import { create } from "zustand";
import { SelectedProduct } from "../../../types";
import { persist, createJSONStorage } from "zustand/middleware";
import { products } from "@/components/home/ProductList";
export type CartStoreSchema = {
  step: number;
  products: SelectedProduct[] | [];
  totalProducts?: number;
  discount?: number;
  shippingFee?: number;
  totaltopay?: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  nameOnCard: string;
  cardNumber: string;
  experationDate: string;
  addProduct: (product: SelectedProduct) => void;
  removeProduct: (id: string) => void;
  updateProductQuantity: (id: string, quantity: number) => void;
  addShippmentDetail: (
    name: string,
    email: string,
    phone: string,
    address: string,
    city: string
  ) => void;
  addPaymentInfo: (
    nameOnCard: string,
    cardNumber: string,
    experationDate: string
  ) => void;
  next: () => void;
  previous: () => void;
  setStep: (i: number) => void;
  resetCart: () => void;
};
export const useCartStore = create<
  CartStoreSchema,
  [["zustand/persist", unknown]]
>(
  persist(
    (set) => ({
      step: 0,
      products: [],
      totalProducts: 0,
      discount: 10,
      shippingFee: 10,
      totaltopay: 0,
      name: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      nameOnCard: "",
      cardNumber: "",
      experationDate: "",
      addProduct: (product: SelectedProduct) =>
        set((state) => {
          const existingProduct = state.products
            .filter((p) => p.orderId === product.orderId)
            .at(0);
          if (existingProduct) {
            if (existingProduct.quantity) {
              existingProduct.quantity += 1;
            } else {
              existingProduct.quantity = 2;
            }

            return { products: state.products };
          }
          return { products: [...state.products, product] };
        }),
      removeProduct: (orderId: string) =>
        set((state) => ({
          /**...state */
          products: state.products.filter((p) => p.orderId !== orderId),
        })),
      addDiscount: (discount: number) =>
        set((state) => ({ /**...state */ discount: discount })),
      updateShippingFee: (shippingFee: number) =>
        set((state) => ({ /**...state */ shippingFee })),
      addShippmentDetail: (
        name: string,
        email: string,
        phone: string,
        address: string,
        city: string
      ) =>
        set((state) => ({ /**...state */ name, email, phone, address, city })),
      addPaymentInfo: (
        nameOnCard: string,
        cardNumber: string,
        experationDate: string
      ) =>
        set((state) => ({
          /**...state */ nameOnCard,
          cardNumber,
          experationDate,
        })),
      next: () => set((state) => ({ /**...state */ step: state.step + 1 })),
      previous: () => set((state) => ({ /**...state */ step: state.step - 1 })),
      resetCart: () =>
        set(() => ({
          step: 0,
          products: [],
          totalProducts: 0,
          discount: 10,
          shippingFee: 10,
          totaltopay: 0,
          name: "",
          email: "",
          phone: "",
          address: "",
          city: "",
          nameOnCard: "",
          cardNumber: "",
          experationDate: "",
        })),

      updateProductQuantity: (id: string, quantity: number) =>
        set((state) => {
          const updatedProducts: SelectedProduct[] = state.products;
          const index = updatedProducts.findIndex((p) => p.orderId === id);
          const product = updatedProducts[index];
          if (!product) return { products: updatedProducts };
          product.quantity = quantity;
          return { products: updatedProducts };
        }),

      setStep: (i: number) => set(() => ({ step: i })),
    }),

    { name: "cart", storage: createJSONStorage(() => sessionStorage) }
  )
);
