import { Alert, Snackbar } from '@mui/material';
import React from 'react';
import gridStyles from '../styles';

export const SnackItem = ({ addedInCart }) => {

    const classes = gridStyles;

    return (
        <Snackbar
            sx={classes.Box}
            open={addedInCart}
        >
            <Alert
                sx={classes.Alert}
                severity="success"
            >Товар добавлен в корзину.</Alert>
        </Snackbar>
    )
}