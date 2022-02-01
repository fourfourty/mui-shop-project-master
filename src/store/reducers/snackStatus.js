const initialState = {
    isSnackStatus: false
}

export const snackReducer = ( state = initialState, action ) => {
    switch(action.type) {
        case "UPDATE_SNACK_STATUS":
            return {
                ...state,
                ...action.payload
            }
        default: return state;
    }
    
}