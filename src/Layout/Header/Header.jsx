import React from 'react';

import { Laptop, ShoppingBasket } from '@mui/icons-material';
import { AppBar, Badge, Icon, IconButton, Toolbar, Typography } from '@mui/material';

import { useDispatch } from 'react-redux';
import { updateCartStatus } from '../../store/actions/updateCartStatus';

// sx={'специаьный компонент 5 версии MUI - аналог style="" '}
const Header = ({ orderLength }) => {
    const dispatch = useDispatch();

    function setCartStatus () {
        dispatch(updateCartStatus(true))
    }

    return (
        <AppBar position="static" sx={{ flexFlow: 'row', justifyContent: 'space-between' }}>
            <Toolbar>
                <IconButton 
                    color="inherit"
                >
                    <Laptop />
                </IconButton>
                <Typography 
                    variant="h6"
                    component="span"
                    sx={{ flexGrow: 2 }}
                >
                    Mui SHOP
                </Typography>
            </Toolbar>
            <Toolbar>
                <IconButton
                    color="inherit"
                    onClick={setCartStatus}
                    sx={{alignItems:'flex-end'}}
                >
                    <Badge 
                        color="secondary"
                        badgeContent={orderLength}
                    />
                    <ShoppingBasket />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default Header;