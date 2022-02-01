import { Close } from "@mui/icons-material";
import { IconButton, ListItem, Typography } from "@mui/material";

const BasketItem = ({ removeFromOrder , id, name, price, quantity }) => {
    console.log(typeof removeFromOrder)
    return (
        <ListItem>
            <Typography
                variant="body2"
            >
                {name} {price}руб x{quantity}
            </Typography>
            <IconButton
                className='btn btn-primary'
                onClick={() => removeFromOrder(id)}
            >
                <Close />
            </IconButton>
        </ListItem>
    );
};

export default BasketItem;