import { useContext, useEffect } from "react";
import { OrderContext } from "../../context/OrderState";
import { UserContext } from "../../context/UserState";

const Profile = () => {
  const { getUserInfo, user } = useContext(UserContext);
  const { getOrder} = useContext(OrderContext);
  useEffect(() => {
    getUserInfo();
    getOrder();
  }, []);

  if (!user) {
    return <span>Cargando...</span>;
  }

  return <div>{user.user.name}</div>;
};

export default Profile;
