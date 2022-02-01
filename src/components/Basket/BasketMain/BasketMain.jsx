import React, { useEffect, useState } from 'react';
import { ShoppingBasket } from '@mui/icons-material';
import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';

import { cartStatus } from '../../../store/selectors/selectors';
import { updateCartStatus } from '../../../store/actions/updateCartStatus';
import BasketItem from '../BasketItem/BasketItem';

export const BasketMain = ( { ordersList, removeFromOrder } ) => {
    let [order, setOrder] = useState([]);
    
    useEffect(() => {
        if (ordersList) {
            setOrder(ordersList);
        }
    }, [ordersList]);

    const currentCartStatus = useSelector(cartStatus);
    const dispatch = useDispatch();

    function setCartStatus () {
        dispatch(updateCartStatus(!currentCartStatus))
    }

    return (
        <Drawer
            anchor="right"
            open={currentCartStatus.cartStatus}
            onClose={setCartStatus}
        >
            <List sx={{width: '400px'}}>
                <ListItem>
                    <ListItemIcon>
                        <ShoppingBasket></ShoppingBasket>
                    </ListItemIcon>
                    <ListItemText  primary="Корзина"/>
                </ListItem>
                <Divider />
                {!order.length ? (
                    <ListItem>Корзина пустая</ListItem>
                    ):(
                    <>
                        {order.map(item => {
                         return (
                            <BasketItem key={item.name} removeFromOrder={removeFromOrder} {...item} />
                         )  
                        })}
                        <Divider />
                        <ListItem>
                            <Typography sx={{fontWeight: '700'}}>
                                Общая стоимость: {' '}
                                {order.reduce((acc, item) =>{
                                    return acc + item.price * item.quantity;
                                }, 0)} {' '} рублей.
                                    
                            </Typography>
                        </ListItem>
                    </>
                    )
                }
            </List>
        </Drawer>
    )
}