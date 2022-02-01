const initialState = {
    cartStatus: false
}

export const cartStatusReducer = ( state = initialState, action ) => {
    switch(action.type) {
        case "UPDATE_CART_STATUS":
            return {
                ...state,
                cartStatus: action.payload
            }
        default: return state;
    }
    
}