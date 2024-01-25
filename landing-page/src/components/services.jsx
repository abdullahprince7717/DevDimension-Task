
function services() {
    return (
        <div style={{ backgroundColor: "#F7FAFA" }}>
            <p className="display-5 fw-semibold text-center mt-5 pt-5"> Discover Our Services</p>
            <p className="text-secondary text-center">Professional service for all your home electrical needs.</p>
            <div className="d-flex justify-content-evenly mt-5 pb-5 ">
                <div className="d-flex flex-column align-items-center ml-5 ">
                    <img style={{ width: "40%" }} className="rounded-circle mb-3" src="https://picsum.photos/100/100" alt="" />
                    <h3 className=" fw-semibold text-center px-5">Domestic Services</h3>
                    <p className="px-5 text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus totam culpa delectus. Quo sequi ea perferendis libero ad deserunt.</p>
                </div>
                <div className="d-flex flex-column align-items-center mx-5">
                    <img className="service-img rounded-circle mb-3" src="https://picsum.photos/100/100" alt="" />
                    <h3 className=" fw-semibold text-center px-5">Domestic Services</h3>
                    <p className="px-5 text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus totam culpa delectus. Quo sequi ea perferendis libero ad deserunt.</p>
                </div>
                <div className="d-flex flex-column align-items-center mr-5">
                    <img className="service-img rounded-circle mb-3" src="https://picsum.photos/100/100" alt="" />
                    <h3 className=" fw-semibold text-center px-5">Domestic Services</h3>
                    <p className="px-5 text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus totam culpa delectus. Quo sequi ea perferendis libero ad deserunt.</p>
                </div>
            </div>
        </div>
    )
}

export default services