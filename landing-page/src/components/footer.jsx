import { LiaMapMarkedAltSolid } from "react-icons/lia";
import { LiaCommentDots } from "react-icons/lia";
import { FiLink } from "react-icons/fi";


function footer() {
    return (
        <div style={{ marginTop: "60px", backgroundColor: "#F7FAFA" }} className="d-flex justify-content-evenly pb-5 ">
            <div className="d-flex flex-column align-items-center ml-5 ">
                <LiaMapMarkedAltSolid color="#1089D4" size='90px' style={{ padding: "20px" }} />
                <p className="px-5 text-center text-secondary"> Curabitur quam etsum lacus net netsum nulat iaculis etsimun vitae etsum nisle varius netsum.</p>
            </div>
            <div className="d-flex flex-column align-items-center ml-5 ">
                <LiaCommentDots color="#1089D4" size='90px' style={{ padding: "20px" }} />
                <p className="px-5 text-center text-secondary"> Curabitur quam etsum lacus net netsum nulat iaculis etsimun vitae etsum nisle varius netsum.</p>
            </div>
            <div className="d-flex flex-column align-items-center ml-5 ">
                <FiLink color="#1089D4" size='90px' style={{ padding: "20px" }} />
                <p className="px-5 text-center text-secondary"> Curabitur quam etsum lacus net netsum nulat iaculis etsimun vitae etsum nisle varius netsum.</p>
            </div>
        </div>

    )
}

export default footer