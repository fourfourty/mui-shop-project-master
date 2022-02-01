export const ORDER_ADD = 'ORDER_ADD';
export const ORDER_DLT = 'ORDER_DLT'

export const updateOrder = ( good ) => ({
    type: ORDER_ADD,
    payload: good
})

export const deleteOrder = ( good ) => ({
    type: ORDER_DLT,
    payload: good
})