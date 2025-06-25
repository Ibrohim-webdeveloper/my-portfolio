import "./Footer.css"

import { FaCopyright } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaFacebookF } from "react-icons/fa6";

function Footer() {
    return (
        <footer>
            <div className="footer">
                <div className="copyright">
                    <FaCopyright /> Voxidjanov Ibrohim.
                </div>
                <div className="social-account">
                    <div className="facebook">
                        <FaFacebookF />
                    </div>
                    <div className="twitter">
                        <FaXTwitter />
                    </div>
                    <div className="linkedin">
                        <TiSocialLinkedin />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer