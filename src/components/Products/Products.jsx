import React from 'react'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import './Product.scss'
const { Meta } = Card;

function Products() {
  return (
    <div className='ProductsContainer'>
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
            title="Card title"
            description= 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ullam enim obcaecati pariatur numquam assumenda magni ab eius dicta alias animi rem deserunt reprehenderit dolorem, quasi iure corrupti cupiditate tenetur.'
          />
        </Card>
      </div>
  )
}

export default Products