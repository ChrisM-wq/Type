import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import LandingPage from "./pages/LandingPage";
import CreateGame from "./pages/CreateGame";
import JoinGame from "./pages/JoinGame";
import TypeRacer from './pages/TypeRacer';

const router = createBrowserRouter([
    {
        path: "",
        element: <App />,
        children: [
            {
                path: '/',
                element: <LandingPage />,
            },
            {
                path: "/game/create",
                element: <CreateGame />,
            },
            {
                path: "/game/join",
                element: <JoinGame />,
            },
            {
                path: "/game/:gameID",
                element: <TypeRacer />,
            },
        ]
    },
    
]);

export default router;