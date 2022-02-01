import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/store';
import { Provider } from 'react-redux';
import { createTheme, ThemeProvider } from '@mui/material';

import './index.css';
import App from './components/App';

const theme = createTheme({
    palette: {
        primary: {
            main: "#1b1b1c"
        },
        secondary: {
            main: "rgba(0,0,0,0.9)"
        }
    }
})
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider theme={theme}> 
                <App />
            </ThemeProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
