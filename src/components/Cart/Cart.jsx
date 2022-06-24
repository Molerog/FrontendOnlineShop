import { useContext, useEffect } from "react";
import { OrderContext } from "../../context/OrderState";
import { ProductContext } from "../../context/ProductState";
import { Modal } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Cart/Cart.scss";

const Cart = () => {
  // const products = JSON.parse(localStorage.getItem("cart"));

  const { cart, clearCart, deleteOne } = useContext(ProductContext);
  const initialCart = cart.map((e) => {
   return  <span>{e.product}</span>
  });
  const { createOrder } = useContext(OrderContext);
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState(initialCart);

  const navigate = useNavigate();

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    // setSubtotal("")
    setModalText("Tu compra ha sido realizada con éxito");
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
      clearCart(initialCart);
      navigate("/profile");
    }, 2000);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  if (cart.length <= 0) {
    return <span>No tienes ningún producto en tu carrito</span>;
  }

  const clearProduct = (i) => {
    deleteOne(i);
  };

  const createNewOrder = (showModal) => {
    showModal();
    createOrder(cart);
  };

  const cartItem = cart.map((cartItem, i) => {
    return (
      <div className="ProductContainer" key={i}>
        <span className="NameContainer">{cartItem.product}</span>
        <span className="PriceContainer"> {cartItem.price.toFixed(2)} €</span>
        <button className="DeleteContainer" onClick={() => clearProduct(i)}>
          Eliminar
        </button>
      </div>
    );
  });

  return (
    <div className="Super">
      <div className="GeneralContainer">
        <div className="MainContainer">
          <div className="ProductsContainer">{cartItem}</div>
          <div className="GlobalInfoContainer">
            <div className="InfoContainer">
              <span className="QuantityContainer">
                Cantidad total: {cart.length}
              </span>
              <span className="TotalContainer">
                Precio total:{" "}
                {cart
                  .map((item) => item.price)
                  .reduce((prev, next) => prev + next)}{" "}
                €
              </span>
              <button className="ClearContainer" onClick={() => clearCart()}>
                Vacíar
              </button>
            </div>
          </div>
        </div>

        <div className="OrderContainer">
          <button onClick={() => createNewOrder(showModal)}>Comprar</button>
        </div>
        <Modal
          title="¿Deseas continuar con la compra?"
          visible={visible}
          onOk={handleOk}
          confirmLoading={confirmLoading}
          onCancel={handleCancel}
        >
          <div className="ModalContainer">{modalText}</div>
        </Modal>
      </div>
    </div>
  );
};

export default Cart;
