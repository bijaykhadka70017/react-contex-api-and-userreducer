import { createContext } from 'react';

/* Default fallback value for CartContext; used when no Provider is present. The real cart data will be supplied via the Provider in App.jsx */
export const CartContext = createContext({
    items: [],
    addItemToCart: () => { },
    updateItemQuantity: () => { }
});