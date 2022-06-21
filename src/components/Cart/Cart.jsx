import { useContext } from "react";
import { ProductContext } from "../../context/ProductState";

const Cart = () => {
    const { cart } = useContext(ProductContext);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart]);

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
            <button onClick={() => clearCart()}>Vacía tu carrito</button>
        </div>
    )
}

export default Cart