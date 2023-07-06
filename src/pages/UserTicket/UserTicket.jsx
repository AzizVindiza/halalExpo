import React, {useRef} from 'react';
import './UserTicket.sass'
import QRCode from "react-qr-code";
import { useReactToPrint } from 'react-to-print';
import logo from './header__logo.png'
const UserTicket = () => {
    const componentRef = useRef(null);

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    return (
        <div className="userticket">
            <div className="container" style={{padding: "40px"}}>
                <button className={"btn"} onClick={handlePrint}>Распечать билет или сохранить</button>
            </div>
            <div className={"container"} ref={componentRef} style={{background: "url('https://wallpaperaccess.com/full/4484586.jpg')"}}>
                <div className="box" style={{background:"red"}}>
                    БИЛЕТ
                </div>
                <QRCode size={"400"} value={"https://hit-expo.org/"}/>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci atque consequatur corporis ducimus eligendi, est exercitationem fugiat harum inventore iure, libero molestias nam neque nisi nobis odit officia omnis possimus qui quod repellendus saepe sed similique sit soluta sunt veritatis voluptatem? Atque ea et expedita nisi nobis! Aperiam, est quod?
                </p>
                <img src={logo} alt="" style={{width: "200px", height: "200px"}}/>
            </div>


        </div>
    );
};

export default UserTicket;