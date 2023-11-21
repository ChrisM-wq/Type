import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import router from './Routes';
import GameContextProvider from './context/GameContextProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <GameContextProvider>
            <RouterProvider router={router} />
        </GameContextProvider>
    </React.StrictMode>,
)
