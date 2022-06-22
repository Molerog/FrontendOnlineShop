import { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserState";


const Profile = () => {
  const { getUserInfo, user } = useContext(UserContext);
 
  useEffect(() => {
    getUserInfo();  
  }, []);

  console.log(user)

  if (!user) {
    return <span>Cargando...</span>;
  }
  const orderList = user.user.Orders.map((element) => {
    return (
        <div key={element.id}>
            <span>{element.date.split("T")[0]}</span>
            {element.Products.map(product =>{
                return (<span>{product.product}</span>)
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
      <div>{orderList}</div>
    </>
  );
};

export default Profile;
