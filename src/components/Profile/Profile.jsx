import { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserState";

const Profile = () => {
    const { getUserInfo, user } = useContext(UserContext);

    useEffect(() => {
        getUserInfo()
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
            </>
        )
        
}

export default Profile