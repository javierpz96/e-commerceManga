import React, { useState } from "react";
import { CommentText } from "semantic-ui-react";

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [unidades, setUnidades] = useState(0);
  const [total, setTotal] = useState(0);

  //Funciones

  //--------------------------------------------------------------------------------------------------------
  

  //El item existe? le hago un cart.find, por cada vuelta que de el find buscando se va llamar item
  //si ese item.id es IGUAL al item que me esta llegando lo guardo en itemExiste!

  const addItem = (producto, cantidad) => {
    const itemExiste = cart.find((item) => item.id === producto.id);
    if (!itemExiste) {
      //Si no existe le voy a pasar un nuevo objeto
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

      //Voy a agregar las unidades, no importa si son 5 remeras, va ser 1 producto

      setUnidades(unidades + 1);

      //Sacamos la cantidad de los productos

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
      value={{ cart, unidades, total, addItem, removeItem, clear }}
    >
      {children}
    </CartContext.Provider>
  );
};
