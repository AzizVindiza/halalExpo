import React from 'react';
import VisitorProfile from "./VisitorProfile/VisitorProfile";
import {useSelector} from "react-redux";


const VisitorSectionAside = () => {
    const {user} = useSelector((store) => store.user)
    return (
        <>
            <VisitorProfile/>

        </>
    );
};

export default VisitorSectionAside;