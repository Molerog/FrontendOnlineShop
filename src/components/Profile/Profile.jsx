import { useContext, useEffect } from "react";
import { OrderContext } from "../../context/OrderState";
import { UserContext } from "../../context/UserState";

const Profile = () => {
  const { getUserInfo, user } = useContext(UserContext);
  const { getOrder , order} = useContext(OrderContext);
  useEffect(() => {
    getUserInfo();
    getOrder();
  }, []);



    if (!user) {
        return <span>Cargando...</span>
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
                <div>
                    <h3>Pedidos</h3>
                </div>
                <div>
                    <span>{order}</span>
                </div>
            </>
        )
        
}

export default Profile
