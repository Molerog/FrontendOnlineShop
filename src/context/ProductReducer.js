const products = (state, action) => {
    switch (action.type){
        case "GET_PRODUCTS":
            return{
                ...state,
                products: action.payload
            };

        case "ADD_CART":
            return {
                ...state,
                cart: [action.payload, ...state.cart]
            };

        case "CLEAR_CART":
            return {
                ...state,
                cart: []
            };
        case "DELETE_ONE":
            state.cart.splice(action.payload, 1)
            return {
                ...state,
                cart: [...state.cart]
            };

        default:
            return state
    }
}

export default products