import { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserState";

const Profile = () => {
  const { getUserInfo, user } = useContext(UserContext);
 console.log('soy el profile', user)
  useEffect(() => {
    getUserInfo();  
  }, []);


  if (!user) {
    return <span>Cargando...</span>;
  }
  const orderList = user.user.Orders.map((element) => {
    console.log('soy el perfil', element)
    return (
        <div key={element.id}>
            <p>{element.date.split("T")[0]}</p>
            {element.Products.map(product =>{
                return product.product
            })}        
        </div>     
    );
  });
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
      <h4>{orderList.date}</h4>
      <p>{orderList}</p>
      <p>Cantidad total de productos: {orderList.length}</p> 
    </>
  );
};

export default Profile;
