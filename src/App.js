import "./sass/style.sass"

import {
    createRoutesFromElements,
    createBrowserRouter,
    Route, RouterProvider
} from "react-router-dom";
import Layout from "./Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import OrganizationPage from "./pages/OrganizationPage/OrganizationPage";
import PartnersPage from "./pages/PartnersPage/PartnersPage";
import Investor from "./pages/InvestorPage/Investor";
import SponsorsPage from "./pages/SponsorsPage/SponsorsPage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import Question from "./pages/Question/Question";
import NewsPage from "./pages/NewsPage/NewsPage";
import MeetPage from "./pages/MeetPage/MeetPage";




const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout/>}>
            <Route index element={<HomePage/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
            <Route path="organization" element={<OrganizationPage/>}/>
            <Route path="partner" element={<PartnersPage/>}/>
            <Route path="investor" element={<Investor/>}/>
            <Route path="sponsors" element={<SponsorsPage/>}/>
            <Route path="contacts" element={<ContactsPage/>}/>
            <Route path="question" element={<Question/>}/>
            <Route path="news" element={<NewsPage/>}/>
            <Route path="meet" element={<MeetPage/>}/>
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
