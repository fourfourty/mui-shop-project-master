const initialState = {
    ordersList: []
}

export const ordersReducer = ( state = initialState, action ) => {
    switch(action.type) {
        case "ORDER_ADD":
            return {
                ...state,
                ordersList: action.payload
            }
        case "ORDER_DLT":
        return {
            ...state,
            ordersList: action.payload
        }
        default: return state;
    }
    
}