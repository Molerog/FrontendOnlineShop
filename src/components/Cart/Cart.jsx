import { useContext, useEffect } from "react";
import { OrderContext } from "../../context/OrderState";
import { ProductContext } from "../../context/ProductState";
import { Modal } from "antd";
import { useState } from "react";
import {useNavigate} from 'react-router-dom'

const Cart = () => {
  const products = JSON.parse(localStorage.getItem("cart"));

  const { cart, clearCart } = useContext(ProductContext);
  const { createOrder } = useContext(OrderContext);
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState(products.map(e => {
        return <span>{e.product}</span>
  }));
  const navigate = useNavigate()

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = (useEffect) => {
    setModalText('Tu compra ha sido realizada con éxito');
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
      clearCart()
      navigate('/profile')
    }, 2000);
    
};
// useEffect(() => {       
//   navigate("/profile")
// } , [])


  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  if (cart.length <= 0) {
    return <span>No tienes ningún producto en tu carrito</span>;
  }

  const createNewOrder = (showModal) => {
    showModal();
    createOrder(cart);

    // clearCart();
  };

  const cartItem = cart.map((cartItem, i) => {
    return (
      <div className="cart" key={i}>
        <span>{cartItem.product}</span>
        <span> {cartItem.price.toFixed(2)} €</span>
      </div>
    );
  });

  return (
    <div>
      {cartItem}
      <p>Cantidad total de productos: {cart.length}</p>
      <button onClick={() => clearCart()}>Vacía tu carrito</button>
      <button onClick={() => createNewOrder(showModal)}>Crea tu pedido</button>
      <Modal
        title="¿Deseas continuar con la compra?"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>{modalText}</p>
      </Modal>
    </div>
  );
};

export default Cart;
