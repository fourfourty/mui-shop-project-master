import React from 'react';
import {Grid} from '@mui/material';
import GoodsItem from '../GoodsItem/GoodsItem';

const GoodsList = (props) => {
    const { goods, setOrder } = props;

    return (
        <Grid container spacing={2} sx={{pt: '50px'}}>
                {goods.map((item) => (
                    <GoodsItem key={item.id} setOrder={setOrder} {...item} />
                ))}
        </Grid>
    );
};

export default GoodsList;