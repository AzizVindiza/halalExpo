import React, {useEffect, useRef} from 'react';
import './UserTicket.sass'
import QRCodeStyling from "qr-code-styling";
import { useReactToPrint } from 'react-to-print';
import logo from './header__logo.png'
const qrCode = new QRCodeStyling({
    width: 400,
    height: 400,
    data: "https://hit-expo.org/",
    image:
        "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
    dotsOptions: {
        color: "#4267b2",
        type: "classy"
    },
    imageOptions: {
        crossOrigin: "anonymous",
        margin: 20
    }
});
const UserTicket = () => {
    const componentRef = useRef(null);

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });
    const ref = useRef(null);

    useEffect(() => {
        qrCode.append(ref.current);
    }, []);

    return (
        <div className="userticket">
            <div className="container" style={{padding: "40px"}}>
                <button className={"btn"} onClick={handlePrint}>Распечать билет или сохранить</button>
            </div>
            <div className={"container"} ref={componentRef} style={{background: "url('https://wallpaperaccess.com/full/4484586.jpg')"}}>
                <div className="box" style={{background:"red"}}>
                    БИЛЕТ
                </div>
                <div ref={ref} />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci atque consequatur corporis ducimus eligendi, est exercitationem fugiat harum inventore iure, libero molestias nam neque nisi nobis odit officia omnis possimus qui quod repellendus saepe sed similique sit soluta sunt veritatis voluptatem? Atque ea et expedita nisi nobis! Aperiam, est quod?
                </p>
                <img src={logo} alt="" style={{width: "200px", height: "200px"}}/>
            </div>


        </div>
    );
};

export default UserTicket;