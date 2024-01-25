import { BsBell } from "react-icons/bs";
import { GiMoneyStack } from "react-icons/gi";
import { PiMedal } from "react-icons/pi";
function features() {
    return (
        <div className="d-flex flex-column flex-wrap" style={{}}>
            <p className="display-5 fw-semibold text-center mt-5 pt-5"> Why To Choose Us</p>
            <p className="text-secondary text-center">Discover more about our awesome team.</p>
            <div className="d-flex justify-content-evenly mt-5 pb-5 ">
                <div className="d-flex flex-column align-items-center ml-5 ">
                    <BsBell color="#1089D4" size='90px' style={{ padding: "20px" }} />
                    <h4 className=" fw-semibold text-center px-5">Rapid Response</h4>
                    <p className="px-5 text-center text-secondary"> Curabitur quam etsum lacus net netsum nulat iaculis etsimun vitae etsum nisle varius netsum.</p>
                </div>
                <div className="d-flex flex-column align-items-center ml-5 ">
                    <GiMoneyStack color="#1089D4" size='90px' style={{ padding: "20px" }} />
                    <h4 className=" fw-semibold text-center px-5">Rapid Response</h4>
                    <p className="px-5 text-center text-secondary"> Curabitur quam etsum lacus net netsum nulat iaculis etsimun vitae etsum nisle varius netsum.</p>
                </div>
                <div className="d-flex flex-column align-items-center ml-5 ">
                    <PiMedal color="#1089D4" size='90px' style={{ padding: "20px" }} />
                    <h4 className=" fw-semibold text-center px-5">Rapid Response</h4>
                    <p className="px-5 text-center text-secondary"> Curabitur quam etsum lacus net netsum nulat iaculis etsimun vitae etsum nisle varius netsum.</p>
                </div>
            </div>
            <div className="d-flex justify-content-evenly mt-5 pb-5 ">
                <div className="d-flex flex-column align-items-center ml-5 ">
                    <BsBell color="#1089D4" size='90px' style={{ padding: "20px" }} />
                    <h4 className=" fw-semibold text-center px-5">Rapid Response</h4>
                    <p className="px-5 text-center text-secondary"> Curabitur quam etsum lacus net netsum nulat iaculis etsimun vitae etsum nisle varius netsum.</p>
                </div>
                <div className="d-flex flex-column align-items-center ml-5 ">
                    <GiMoneyStack color="#1089D4" size='90px' style={{ padding: "20px" }} />
                    <h4 className=" fw-semibold text-center px-5">Rapid Response</h4>
                    <p className="px-5 text-center text-secondary"> Curabitur quam etsum lacus net netsum nulat iaculis etsimun vitae etsum nisle varius netsum.</p>
                </div>
                <div className="d-flex flex-column align-items-center ml-5 ">
                    <PiMedal color="#1089D4" size='90px' style={{ padding: "20px" }} />
                    <h4 className=" fw-semibold text-center px-5">Rapid Response</h4>
                    <p className="px-5 text-center text-secondary"> Curabitur quam etsum lacus net netsum nulat iaculis etsimun vitae etsum nisle varius netsum.</p>
                </div>
            </div>
        </div>
    )
}

export default features