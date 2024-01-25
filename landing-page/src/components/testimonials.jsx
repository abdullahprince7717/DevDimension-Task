
import { FaStar } from "react-icons/fa6";

function testimonials() {

    const stars = [1, 2, 3, 4, 5]

    return (
        <div className="mt-5">
            <h2 style={{ marginBottom: "15px" }} className="text-center ">Clients Testimonials</h2>
            <p className="text-secondary text-center mb-5">What Our Clients Are Saying.</p>
            <h3 className="text-white">asd</h3>
            <div className="d-flex ">
                <div className="d-flex flex-column align-items-center border border-primary position-relative pt-5 p-3 mx-5">
                    <img style={{ width: "30%" }} className="position-absolute top-0 start-50 translate-middle rounded-circle mb-3" src="https://picsum.photos/100/100" alt="" />
                    <i className="text-secondary mt-4">The attention of a traveller, should be particularly turned to the various works of nature.</i>
                    <p className="text-primary">Emily Richards - Copywriter</p>
                    <div className="d-flex">
                        {stars.map((index) => { return <div key={index}><FaStar color="#FDCC28" size='27px' style={{ paddingRight: "6px" }} /></div> })}
                    </div>
                </div>
                <div className="d-flex flex-column align-items-center border border-primary position-relative pt-5 p-3 mx-5">
                    <img style={{ width: "30%" }} className="position-absolute top-0 start-50 translate-middle rounded-circle mb-3" src="https://picsum.photos/100/100" alt="" />
                    <i className="text-secondary mt-4">The attention of a traveller, should be particularly turned to the various works of nature.</i>
                    <p className="text-primary">Emily Richards - Copywriter</p>
                    <div className="d-flex">
                        {stars.map((index) => { return <div key={index}><FaStar color="#FDCC28" size='27px' style={{ paddingRight: "6px" }} /></div> })}
                    </div>
                </div>
                <div className="d-flex flex-column align-items-center border border-primary position-relative pt-5 p-3 mx-5">
                    <img style={{ width: "30%" }} className="position-absolute top-0 start-50 translate-middle rounded-circle mb-3" src="https://picsum.photos/100/100" alt="" />
                    <i className="text-secondary mt-4">The attention of a traveller, should be particularly turned to the various works of nature.</i>
                    <p className="text-primary">Emily Richards - Copywriter</p>
                    <div className="d-flex">
                        {stars.map((index) => { return <div key={index}><FaStar color="#FDCC28" size='27px' style={{ paddingRight: "6px" }} /></div> })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default testimonials