const users = (state, action) => {
    switch (action.type){
        case "REGISTER":
            return{
                ...state,
                message: action.payload.message
            };

        case "LOGIN":
            return{
                ...state,
                token: action.payload.token
            };

        default:
            return state;
    }
}

export default users