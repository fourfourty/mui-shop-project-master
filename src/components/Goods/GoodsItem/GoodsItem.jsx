import React from 'react';
import {Button, Card, CardContent, CardMedia, Grid, Typography} from '@mui/material';

const GoodsItem = (props) => {
    const { name, price, poster, setOrder } = props;

    return (
        <Grid item xs={12} md={4}>
            <Card sx={{
                height: '100%'
            }}>
                <CardMedia
                    src={poster}
                    alt={name}
                    title={name}
                    sx={{height: 140}}
                    component='img'
                />
                <CardContent>
                    <Typography
                        variant="h6"
                        component="h5"
                    >   {name}

                    </Typography>
                    <Typography
                        variant="body1"
                    >   Цена: {price} руб.

                    </Typography>
                </CardContent>
                    <Button
                        onClick={() =>
                            setOrder({
                                id: props.id,
                                name: props.name,
                                price: props.price,
                            })
                        }
                        variant="contained"
                        sx={{mb: '20px'}}
                    >
                        Купить
                    </Button>
            </Card>
        </Grid>
    );
};

export default GoodsItem;