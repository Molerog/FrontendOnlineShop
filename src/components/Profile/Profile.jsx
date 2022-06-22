import { useContext, useEffect } from "react";
import { OrderContext } from "../../context/OrderState";
import { UserContext } from "../../context/UserState";


const Profile = () => {
  const { getUserInfo, user } = useContext(UserContext);
  const { order, getOrder} = useContext(OrderContext);
  useEffect(() => {
    getUserInfo();
    getOrder();
  }, []);
  

  console.log('soy el map',order)

  const orders = order.map((element) => {
    return (
        <div key={element.id}>
            <span>{element.product}</span>
            <span>{element.price}</span>
        </div>
        
      
    );
  });

  if (!user) {
    return <span>Cargando...</span>;
  }

  return (
    <>
      <div>
        <h3>Datos personales</h3>
        <span>{user.user.name}</span>
        <br />
        <span>{user.user.email}</span>
      </div>
      <br />
      <h3>Pedidos</h3>
      <div>{orders}</div>
    </>
  );
};

export default Profile;
