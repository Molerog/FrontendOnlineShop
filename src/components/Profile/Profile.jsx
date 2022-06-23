import { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserState";

const Profile = () => {
  const { getUserInfo, user } = useContext(UserContext);
 
  useEffect(() => {
    getUserInfo();  
  }, []);

  if (!user) {
    return <span>Cargando...</span>
  }

  const orderList = user.user.Orders.map((element) => {
    
      return (
          <div key={element.id}>
              <h4>{element.date.split("T")[0]}</h4>
              <span>{element.Products.map((product) =>{
                  return (product.product)
              })}</span>
              <p>Cantidad total de productos: {element.Products.length}</p>
          </div>
      )
  });

  if (orderList.length === 0) {
    return (
      <>
        <div>
          <h3>Datos personales</h3>
          <span>{user.user.name}</span>
          <br />
          <span>{user.user.email}</span>
        </div>
        <span>Todavía no has hecho ningún pedido</span>
      </>
    )        
  }
  
  return (
    <>
      <div>
        <h3>Datos personales</h3>
        <span>{user.user.name}</span>
        <br />
        <span>{user.user.email}</span>
      </div>
      <div>
        <h3>Pedidos</h3>
        <span>{orderList}</span>
      </div>
    </>
  );
};

export default Profile