import React from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { useContext, useEffect } from "react";
import { ProductContext } from "../../../context/ProductState";
import { Avatar, Card } from "antd";
const { Meta } = Card;

const Product = () => {
  const { products, getProducts } = useContext(ProductContext);
  useEffect(() => {
    getProducts();
  }, []);
  const productlist = products.map((element) => {
    return (
      <div key= {element.id}>
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
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
        >
          <Meta
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            title={element.product}
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ullam enim obcaecati pariatur numquam assumenda magni ab eius dicta alias animi rem deserunt reprehenderit dolorem, quasi iure corrupti cupiditate tenetur."
          />
        </Card>
      </div>
    );
  });

  return <>{productlist}</>;
};

export default Product;
