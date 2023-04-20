import "./sass/style.sass"

import {
    createRoutesFromElements,
    createBrowserRouter,
    Route, RouterProvider
} from "react-router-dom";

import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Layout from "./Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout/>}>
            <Route index element={<HomePage/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
        </Route>
    )
);

function App() {
    return (
        <>
            <RouterProvider router={router}/>
        </>
    );
}

export default App;
