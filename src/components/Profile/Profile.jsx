import { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserState";
import "../Profile/Profile.scss";

const Profile = () => {
  const { getUserInfo, user } = useContext(UserContext);
  console.log("soy el profile", user);
  useEffect(() => {
    getUserInfo();
  }, []);

  if (!user) {
    return <span>Cargando...</span>;
  }

  const orderList = user.user.Orders.map((element) => {
    return (
      <div className='TicketContainer'key={element.id}>
        <h4>{element.date.split("T")[0]}</h4>
        <span className='ProductsContainer'>
          {element.Products.map((product) => {
            return <div className= 'ProductContainer'>{product.product}</div>
          })}
        </span>
        <p>Cantidad total de productos: {element.Products.length}</p>
      </div>
    );
  });

  if (orderList.length === 0) {
    return (
      <div className="GeneralContainer">
      <div className="ProfileContainer">
        <div className="AvatarContainer">AVATAR</div>
        <div className="DataContainer">
          <h3>Datos Personales</h3>
          <p>{user.user.name}</p>
          <p>{user.user.email}</p>
        </div>
      </div>
      <div className= 'OrdersContainer'>
        <h2>Pedidos</h2>
        <div className= 'TicketsContainer'>
           <span>Todavía no tiene ningún producto</span>
        </div>
      </div>
    </div>
    );
  }

  return (
    <div className="GeneralContainer">
      <div className="ProfileContainer">
        <div className="AvatarContainer">AVATAR</div>
        <div className="DataContainer">
          <h3>Datos Personales</h3>
          <p>{user.user.name}</p>
          <p>{user.user.email}</p>
        </div>
      </div>
      <div className= 'OrdersContainer'>
        <h2>Pedidos</h2>
        <div className= 'TicketsContainer'>
           {orderList}
        </div>
      </div>
    </div>
  );
};

export default Profile;
