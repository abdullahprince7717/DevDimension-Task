
function requestQuote() {
    return (
        <div className="w-100 d-flex flex-column align-items-center justify-content-center text-white p-5" style={{ backgroundImage: `url(${"https://picsum.photos/2001/1000"})` }}>
            <h2 className="pt-5">Ready to make your sales team more productive?</h2>
            <h5 className="pt-2 pb-5">Communicate with flexible tools that go where your team goes.</h5>
            <div style={{ width: "450px" }} className="d-flex justify-content-around">
                <button className="btn btn-light shadow w-25 fs-6" style={{ width: '180px', height: '60px' }}>Get Started</button>
                <button className="btn btn-primary shadow w-25 fs-6" style={{ width: '180px', height: '60px' }}>Get Started</button>
            </div>

        </div>
    )
}

export default requestQuote