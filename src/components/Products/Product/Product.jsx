import React from "react";
import { useContext, useEffect } from "react";
import { ProductContext } from "../../../context/ProductState";

import { Avatar, Card, Button } from "antd";

const { Meta } = Card;

const Product = () => {
    const { products, getProducts, addCart, cart } = useContext(ProductContext);

    useEffect(() => {
        getProducts()
    }, []);
    
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const productlist = products.map((product) => {
        return (
            <div key= {product.id}>
                <Card
                    style={{
                        width: 300,
                    }}
                    cover={
                        <img
                            alt="example"
                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                        />
                    }
                    actions={[
                        <Button onClick={() =>addCart(product)}>Añadir al carrito</Button> 
                    ]}
                >
                    <Meta
                        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                        title={product.product}
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ullam enim obcaecati pariatur numquam assumenda magni ab eius dicta alias animi rem deserunt reprehenderit dolorem, quasi iure corrupti cupiditate tenetur."
                        
                    />
                </Card>
            </div>
        )
    })

  return <>{productlist}</>;
};

export default Product;
