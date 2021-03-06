import React from "react";
import { useContext, useEffect } from "react";
import { ProductContext } from "../../../context/ProductState";
import { Card, Button, notification, Image } from "antd";

const { Meta } = Card;

const Product = () => {
  const { products, getProducts, addCart, cart } = useContext(ProductContext);

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const functions = (product) => {
    addCart(product);
    openNotification(notification);
  };

  const openNotification = () => {
    notification.open({
      message: "Producto añadido a tu carrito",
    });
  };

  const productlist = products.map((product) => {
    return (
      <div key={product.id}>
        <Card
          style={{
            width: 300,
          }}
          cover={<Image alt="example" src={product.image} />}
          actions={[
            <Button onClick={() => functions(product)}>
              Añadir al carrito
            </Button>,
            <Meta className="PriceContainer" title={product.price}/>
          ]}
        >
        
          <Meta title={product.band} />
          <br></br>
          <div className= 'MetaContainer'>
          <Meta className="TitleContainer" description={product.product}/>
          <br></br>
          <Meta className="FormatContainer" description={product.Category.category}/>
          <br></br>
          <Meta className="GenreContainer" description={product.Section.section}/>
          </div>
        
        </Card>
      </div>
    );
  });

  return <>{productlist}</>;
};

export default Product;
