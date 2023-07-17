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
import ForumPage from "./pages/ForumPage/ForumPage";
// import PlacePage from "./pages/PlacePage/PlacePage";
import ExpectPage from "./pages/ExpectPage/ExpectPage";
import BenefitsPage from "./pages/BenefitsPage/BenefitsPage";
import MembersPage from "./pages/MembersPage/MembersPage";
import Hotel from "./components/Hotel/Hotel";
import LocationPage from "./pages/LocationPage/LocationPage";
import MassPage from "./pages/MassPage/MassPage";
import TradePage from "./pages/TradePage/TradePage";
import InvestPage from "./pages/InvestPage/InvestPage";
import Loader from "./components/Registration/Loading/Loader";
import UserTicket from "./pages/UserTicket/UserTicket";
import AccountPage from "./pages/AccountPage/AccountPage";
import Aside from "./pages/AccountPage/Aside/Aside";
import React from "react";
import Profile from "./pages/AccountPage/ProfileSection/Profile/Profile";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";
import ProfileSection from "./pages/AccountPage/ProfileSection/ProfileSection";

import TradeZonePage from "./pages/TradeZonePage/TradeZonePage";
import {useSelector} from "react-redux";
import store from "./redux/store";





const router = createBrowserRouter(

    createRoutesFromElements(
        <>

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
                <Route path="forum" element={<ForumPage/>}/>
                <Route path="expect" element={<ExpectPage/>}/>
                <Route path="benefits" element={<BenefitsPage/>}/>
                <Route path="members" element={<MembersPage/>}/>
                <Route path="members" element={<MembersPage/>}/>
                <Route path="hotel" element={<Hotel/>}/>
                {/*<Route path="stand" element={<StandPage/>}/>*/}
                <Route path="mass" element={<MassPage/>}/>
                <Route path="location" element={<LocationPage/>}/>
                <Route path="trade" element={<TradePage/>}/>
                <Route path="invest" element={<InvestPage/>}/>
                <Route path="account" element={<AccountPage/>}>
                    <Route path="test" element={<UserTicket/>}/>
                </Route>

                        <Route path={'account'} element={<AccountPage/>}>
                            <Route path={'profile'} element={<ProfileSection/>}/>
                            <Route path={'stand'} element={<NotFoundPage/>}/>
                            <Route path={'tickets'} element={<NotFoundPage/>}/>
                            <Route path={'notification'} element={<NotFoundPage/>}/>
                            <Route path={'meet'} element={<NotFoundPage/>}/>
                            <Route path={'chat'} element={<NotFoundPage/>}/>
                            <Route path={'sittings'} element={<NotFoundPage/>}/>
                        </Route>

                <Route path="test" element={<UserTicket/>}/>
                <Route path="tradezone" element={<TradeZonePage/>}/>

            </Route>

            <Route path="loader" element={<Loader/>}/>



        </>

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
