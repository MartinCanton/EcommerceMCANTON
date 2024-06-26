import React, { useState, useContext, useEffect } from 'react';

const CartContext = React.createContext('');
export const useCartContext = () => useContext(CartContext);

function CartProvider({ children }) {
    // Leer el carrito inicial desde localStorage
    const initialCart = JSON.parse(localStorage.getItem('cart')) || [];
    const [cart, setCart] = useState(initialCart);

    useEffect(() => {
        // Actualizar localStorage cada vez que el carrito cambie
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const totalPrice = () => {
        return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
    }

    const totalProducts = () => cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0);

    const clearCart = () => setCart([]);

    const isInCart = (id) => cart.find(product => product.id === id) ? true : false;

    const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));

    const addProduct = (item, quantity) => {
        if (isInCart(item.id)) {
            setCart(cart.map(product => {
                return product.id === item.id ? { ...product, quantity: product.quantity + quantity } : product
            }));
        } else {
            setCart([...cart, { ...item, quantity }]);
        }
    }

    return (
        <CartContext.Provider value={{
            clearCart,
            isInCart,
            removeProduct,
            addProduct,
            totalPrice,
            totalProducts,
            cart
        }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;
