import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {
    return (
        <footer className="bg-black text-white text-center">
            <div className="p-4">
                <p className="text-2xl font-bold">INTER IIT 12.0</p>
                <p className="text-xs">Copyright@2023 Aptos</p>
            </div>
            <div className="p-4">
                <p className="text-xl">Contact Us</p>
                <div>
                    <FontAwesomeIcon icon={faInstagram} size="xl" className="p-1" />
                    <FontAwesomeIcon icon={faFacebook} size="xl" className="p-1" />
                    <FontAwesomeIcon icon={faLinkedin} size="xl" className="p-1" />
                </div>
            </div>
        </footer>
    )
}

export {Footer};