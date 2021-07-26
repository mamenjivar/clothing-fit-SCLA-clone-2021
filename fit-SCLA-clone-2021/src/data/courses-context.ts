import { createContext } from "react";

interface ShoppingCart {
  id: string;
  image: string;
  price: string;
}

interface Context {
    shoppingCart: ShoppingCart[];
    addToCart: () => void;
    deleteFromCart: () => void;
}

const ApparelCartContext = createContext<Context>({
  shoppingCart: [],
  addToCart: () => {},
  deleteFromCart: () => {},
});

export default ApparelCartContext;