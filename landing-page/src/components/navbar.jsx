
function navbar() {
    return (
        <div className="w-full">
            <nav className="navbar navbar-expand-lg fixed-top bg-white">
                <div className="container-fluid d-flex justify-content-between">
                    <div>
                        <a className="navbar-brand text-primary" href="#">Lead Page</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">what we Do</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">Our Work</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">How it works</a>
                            </li>
                        </ul>
                        <button className="btn btn-outline-success" type="submit">Get Started</button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default navbar