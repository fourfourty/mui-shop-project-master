export const UPDATE_CART_STATUS = 'UPDATE_CART_STATUS';

export const updateCartStatus = ( status ) => ({
    type: UPDATE_CART_STATUS,
    payload: status, 
})