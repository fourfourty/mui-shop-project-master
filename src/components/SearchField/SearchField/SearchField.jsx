import { TextField } from "@mui/material";
import React from 'react';
//TextField -компонент @mui - текст поле

const SearchField = (props) => {
    const { onChange, value } = props;

    return <TextField 
    label='search'
    variant='standard'
    fullWidth
    type='search' 
    value={value} 
    onChange={onChange} />;
};

export default SearchField;