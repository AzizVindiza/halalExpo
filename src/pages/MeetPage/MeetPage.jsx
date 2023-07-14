import React from 'react';
import Btn from "../../components/Btn/Btn";
import "./meetPage.sass"
import BtwoSection from "./BtwoSection/BtwoSection";
import TaskSection from "../HomePage/TaskSection/TaskSection";
import MeetCard from "./MeetCard/MeetCard";

const MeetPage = () => {
    return (
        <section className={'meetPage'}>
            <BtwoSection/>
            <MeetCard/>
        </section>
    );
};

export default MeetPage;