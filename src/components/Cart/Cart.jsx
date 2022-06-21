import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";

const Cart = () => {
    const { cart } = useContext(ProductsContext);

    if (cart.length <= 0) {
        return <span>No tienes ningún producto en tu carrito</span>
    };

    const cartItem = cart.map((cartItem, i) => {
        return (
            <div className="cart" key={i}>
                <span>{cartItem.name}</span>
                <span>{cartItem.price.toFixed(2)} €</span>
            </div>
        )
    });

    return (
        <div>
        {cartItem}
        </div>
    )
}

export default Cart