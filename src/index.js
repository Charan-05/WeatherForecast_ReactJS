import ReactDom from 'react-dom/client';
import App from './App';
import './style.css';
import React, {StrictMode} from 'react'
ReactDom.createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App/>
    </StrictMode>
)