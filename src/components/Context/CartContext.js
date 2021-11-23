import React, { useState } from "react";
export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [unidades, setUnidades] = useState(0);
  const [total, setTotal] = useState(0);

  //Funciones

  //--------------------------------------------------------------------------------------------------------

  const addItem = (producto, cantidad) => {
    const itemExiste = cart.find((item) => item.id === producto.id);
    if (!itemExiste) {
      setCart([
        ...cart,
        {
          imagen: producto.imagen,
          id: producto.id,
          nombre: producto.nombre,
          cantidad: producto.cantidad,
          precio: producto.precio,
          subTotal: producto.precio * cantidad,
        },
      ]);

      setUnidades(unidades + cantidad);

      setTotal(total + producto.precio * cantidad);
    } else {
      const cartAux = cart.map((item) => {
        if (item.id === producto.id) {
          item.cantidad += cantidad;
          item.subTotal += producto.precio * cantidad;
          
          
        }
        return item;
      });
      setCart(cartAux);
      setTotal(total + producto.precio * cantidad);
      
    }
  };

  //-------------------------------------------------------------------------

  const removeItem = (id) => {
    const nuevoCarrito = cart.filter((item) => item.id !== id);
    setCart(nuevoCarrito);
  };

  //-------------------------------------------------------------------------

  const clear = () => {
    setCart([]);
  };

  //-------------------------------------------------------------------------

  return (
    <CartContext.Provider
      value={{ cart, unidades, total, addItem, removeItem, clear}}
    >
      {children}
    </CartContext.Provider>
  );
};
