import { useState } from 'react';
import { Container } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { ordersState } from '../store/selectors/selectors';

import Header  from '../Layout/Header';

import BasketMain from './Basket';
import GoodsList from './Goods';
import SearchField from './SearchField';
import SnackItem from './Snack';

import { deleteOrder, updateOrder } from '../store/actions/updateOrder';

import { goods } from '../data/goods';


const App = () => {
    const currOrderState = useSelector(ordersState);
    const dispatch = useDispatch();
    const [search, setSearch] = useState('');
    const [products, setProducts] = useState(goods);
    const [isAdd, setAdd] = useState(false);

    const handleChange = (e) => {
        if (!e.target.value) {
            setProducts(goods);
            setSearch('');
            return;
        }

        setSearch(e.target.value);
        setProducts(
            products.filter((good) =>
                good.name.toLowerCase().includes(e.target.value.toLowerCase())
            ))
    };

    const setAddForSnack = () => {
        setAdd(true);
        return setTimeout(() => setAdd(false), 3000);
    }

    const addToOrder = (goodsItem) => {
        let quantity = 1;

        const indexInOrder = currOrderState.ordersList.findIndex(
            (item) => item.id === goodsItem.id
        );

        if (indexInOrder > -1) {
            quantity = currOrderState.ordersList[indexInOrder].quantity + 1;

            dispatch(updateOrder(currOrderState.ordersList.map(item => {
                    if (item.id !== goodsItem.id) return item;
                        
                    return {
                        id: item.id,
                        name: item.name,
                        price: item.price,
                        quantity,
                    }
                })
                )
            )
        }
        else {
            dispatch(updateOrder([
                ...currOrderState.ordersList,
                {
                    id: goodsItem.id,
                    name: goodsItem.name,
                    price: goodsItem.price,
                    quantity,
                }
            ]));
        }

        setAddForSnack();
    };


    const handleRemoveFromOrder = (goodsItem) => {
        dispatch(deleteOrder(currOrderState.ordersList.filter(item => item.id !== goodsItem)));
    };

    return (
        <>
            <Header 
                orderLength={currOrderState.ordersList.length}
            />
            <Container sx={{mt: '1rem'}}>
            <SearchField
                value={search}
                onChange={handleChange}
            />
            <GoodsList
                goods={products}
                setOrder={addToOrder}
            />
            </Container>
            <BasketMain
                ordersList={currOrderState.ordersList}
                removeFromOrder={handleRemoveFromOrder} 
            />
            <SnackItem 
                addedInCart={isAdd}
            />
        </>
    );
}

export default App;
