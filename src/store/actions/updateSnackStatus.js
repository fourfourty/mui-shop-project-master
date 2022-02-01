export const UPDATE_SNACK_STATUS = 'UPDATE_SNACK_STATUS';

export const updateSnackStatus = ( status ) => ({
    type: UPDATE_SNACK_STATUS,
    snackStatus: status, 
})