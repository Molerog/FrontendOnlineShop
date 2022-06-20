const users = (state, action) => {
    switch (action.type){
        case "REGISTER":
            return{
                ...state,
                message: action.payload.message
            }
    }
}

export default users