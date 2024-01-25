
function form() {
    return (
        <div className="d-flex form " >
            <div className=" pb-3">
                <img className="form-img" src="https://picsum.photos/1000/700" alt="" />
            </div>
            <div className="d-flex flex-column text-white justify-content-around mb-3 w-50 p-5 ">
                <p className="display-6 fw-semibold">Need an Electrician</p>
                <p>Professional service for all your home electrical needs. Please fill the form bellow for a free, no obligation quote.</p>
                <input type="email" className="form-control" placeholder="name@example.com" />
                <input type="email" className="form-control" placeholder="name@example.com" />
                <input type="email" className="form-control" placeholder="name@example.com" />
                <textarea className="form-control" placeholder="name@example.com" rows="3" />
                <button className="btn btn-warning">Submit</button>
            </div>
        </div >
    )
}

export default form