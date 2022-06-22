const orders = (state, action) => {
    switch (action.type){
        case "GET_ORDERS":
            return{
                ...state,
                products: action.payload
            };
            default:
                return state
        }
    }
    
    export default orders
     