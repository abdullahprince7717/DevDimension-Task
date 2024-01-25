
function form() {
    return (
        <div className="d-flex form" >
            <div className=" pb-3">
                <img style={{ width: "92%", height: "100%" }} src="https://picsum.photos/1000/700" alt="" />
            </div>
            <div className="d-flex flex-column text-white justify-content-around mb-3 w-50 p-5 pb-0 ">
                <p className="display-6 fw-semibold">Need an Electrician</p>
                <p>Professional service for all your home electrical needs. Please fill the form bellow for a free, no obligation quote.</p>
                <input type="email" className="form-control" placeholder="Your Name" />
                <input type="email" className="form-control" placeholder="Email Address" />
                <input type="email" className="form-control" placeholder="Phone Number" />
                <textarea className="form-control" placeholder="Your Message..." rows="3" />
                <button style={{ backgroundColor: "#FEFE00" }} className="btn py-3 fw-semibold">REQUEST FREE QUOTE NOW</button>
                <p>Competitive On Price • TrustMark Accredited</p>
            </div>
        </div >
    )
}

export default form