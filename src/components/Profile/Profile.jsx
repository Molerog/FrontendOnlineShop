import { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserState";

const Profile = () => {
  const { getUserInfo, user } = useContext(UserContext);
  useEffect(() => {
    getUserInfo();
  }, []);

  if (!user) {
    return <span>Cargando...</span>;
  } 
  
    return <div>{user.user.name}</div>;

  

};

export default Profile;