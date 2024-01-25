import { LiaMapMarkedAltSolid } from "react-icons/lia";
import { LiaCommentDots } from "react-icons/lia";
import { FiLink } from "react-icons/fi";
import { ImFacebook2 } from "react-icons/im";
import { ImTwitter } from "react-icons/im";
import { ImInstagram } from "react-icons/im";
import { ImYoutube } from "react-icons/im";


function footer() {
    return (
        <div style={{ marginTop: "60px", backgroundColor: "#F7FAFA" }} className="d-flex justify-content-evenly pb-5 ">
            <div className="d-flex flex-column align-items-center ml-5 ">
                <LiaMapMarkedAltSolid color="#1089D4" size='90px' style={{ padding: "20px" }} />
                <h4 className=" fw-semibold text-center px-5">Get in touch</h4>
                <p className="px-5 text-center text-secondary"> Curabitur quam etsum lacus net netsum nulat iaculis etsimun vitae etsum nisle varius netsum.</p>
            </div>
            <div className="d-flex flex-column align-items-center ml-5 ">
                <LiaCommentDots color="#1089D4" size='90px' style={{ padding: "20px" }} />
                <h4 className=" fw-semibold text-center px-5">Social Media</h4>
                <p className="px-5 text-center text-secondary"> Curabitur quam etsum lacus net netsum nulat iaculis etsimun vitae etsum nisle varius netsum.</p>
                <div className="d-flex ">
                    <ImFacebook2 color="#1089D4" size='30px' style={{ padding: "20px" }} />
                    <ImTwitter color="#1089D4" size='30px' style={{ padding: "20px" }} />
                    <ImInstagram color="#1089D4" size='30px' style={{ padding: "20px" }} />
                    <ImYoutube color="#1089D4" size='30px' style={{ padding: "20px" }} />
                </div>
            </div>
            <div className="d-flex flex-column align-items-center ml-5 ">
                <FiLink color="#1089D4" size='90px' style={{ padding: "20px" }} />
                <h4 className=" fw-semibold text-center px-5">Useful Links</h4>
                <p className="px-5 text-center text-secondary"> Curabitur quam etsum lacus net netsum nulat iaculis etsimun vitae etsum nisle varius netsum.</p>
            </div>
        </div>

    )
}

export default footer