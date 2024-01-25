
function contactUs() {
    return (
        <section className="contact-us">
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <div className="section-title">
                            <h2>Contact Us</h2>
                            <p><b>Bootstrap 4 contact form</b> is designed with a Google map. contact form pages design is created by using Bootstrap and custom CSS</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-7">
                        <form action="/" className="mb-4 mb-lg-0">
                            <div className="form-row">
                                <div className="col-md-6 form-group">
                                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" />
                                </div>
                                <div className="col-md-6 form-group">
                                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" />
                                </div>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" />
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" name="message" placeholder="Type Message"></textarea>
                            </div>
                            <button type="submit" className="btn btn-light">Contact Now</button>
                        </form>
                    </div>

                    <div className="col-lg-5">
                        <div className="map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571289.733943155!2d76.08560099999998!3d29.058775699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390e4a4b98404f57%3A0x75ffae70833e8448!2sShahbad%2C%20Haryana%20136135!5e0!3m2!1sen!2sin!4v1594195370933!5m2!1sen!2sin" width="100%" height="350" style="border: 0;" allowfullscreen="" aria-hidden="false" ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default contactUs