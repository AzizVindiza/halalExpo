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

import Loader from "./components/Registration/Loading/Loader";
import UserTicket from "./pages/UserTicket/UserTicket";
import AccountPage from "./pages/AccountPage/AccountPage";

import InvestZonePage from "./pages/InvestZonePage/InvestZonePage";

import Aside from "./pages/AccountPage/Aside/Aside";
import React from "react";
import Profile from "./pages/AccountPage/ProfileSection/PaticipantSectionAside/Profile/Profile";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";
import ProfileSection from "./pages/AccountPage/ProfileSection/ProfileSection";

import TradeZonePage from "./pages/TradeZonePage/TradeZonePage";
import {useSelector} from "react-redux";
import store from "./redux/store";

import FoodZone from "./pages/FoodZonePage/FoodZone";


import FashionZonePage from "./pages/FashionZonePage/FashionZonePage";
import Participant from "./pages/AccountPage/Participant/Participant";
import Ticket from "./pages/AccountPage/Ticket/Ticket";
import PrivacyPolicy from "./pages/PrivacyPolicyPage/PrivacyPolicy";
import TransferPage from "./pages/TransferPage/TransferPage";
import B2b from "./pages/AccountPage/B2b/B2b";
import Chat from "./pages/AccountPage/Chat/Chat";
<<<<<<< HEAD
import MembersUser from "./pages/MembersPage/MembersUser/MembersUser";
=======
import BuyTicket from "./pages/AccountPage/BuyTicket/BuyTicket";
>>>>>>> c0fb549672b277f143d0e8a5951ed9908c2b68ff







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
                <Route path="invest" element={<InvestZonePage/>}/>
                <Route path="privacy" element={<PrivacyPolicy/>}/>
                <Route path="transfer" element={<TransferPage/>}/>


                <Route path="account" element={<AccountPage/>}>
                    <Route path="test" element={<UserTicket/>}/>
                </Route>

                        <Route path={'account'} element={<AccountPage/>}>
                            <Route path={'profile'} element={<ProfileSection/>}/>
                            <Route path={'stand'} element={<Ticket/>}/>
                            <Route path={'reserve'} element={<Participant/>}/>
                            <Route path={'tickets'} element={<NotFoundPage/>}/>
                            <Route path={'document'} element={<NotFoundPage/>}/>
                            <Route path={'meet'} element={<B2b/>}/>
                            <Route path={'chat'} element={<NotFoundPage/>}/>
                            <Route path={'meet'} element={<NotFoundPage/>}/>
                            <Route path={'chat'} element={<Chat/>}/>
                            <Route path={'sittings'} element={<NotFoundPage/>}/>
                            <Route path={'buyTicket'} element={<BuyTicket/>}/>

                        </Route>

                <Route path="test" element={<UserTicket/>}/>
                <Route path="tradezone" element={<TradeZonePage/>}/>

                <Route path="foodZone" element={<FoodZone/>}/>

                <Route path="fashionzone" element={<FashionZonePage/>}/>
                <Route path="members/:id" element={<MembersUser/>}/>

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
