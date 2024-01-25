import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker
} from "react-google-maps";

const MyMapComponent = withScriptjs(
    withGoogleMap(props => (
        <GoogleMap defaultZoom={8} defaultCenter={{ lat: 30.7333, lng: 76.7794 }}>
            {props.isMarkerShown && (
                <Marker position={{ lat: 30.7333, lng: 76.7794 }} />
            )}
        </GoogleMap>
    ))
);

function contactUs() {
    return (
        <section className="contact-us">
            <div className="container">
                <div className="row">
                    <div className="d-flex mt-5  p-5" >
                        <div className="d-flex flex-column justify-content-between mb-3 w-75 p-5 ">
                            <p className="display-6 fw-semibold">Need an Electrician</p>
                            <p>Professional service for all your home electrical needs. Please fill the form bellow for a free, no obligation quote.</p>
                            <input type="email" className="bg-light" placeholder="Your Name" />
                            <input type="email" className="" placeholder="Email Address" />
                            <input type="email" className="" placeholder="Phone Number" />
                            <textarea className="" placeholder="Your Message..." rows="3" />
                            <button style={{ backgroundColor: "#FEFE00" }} className="btn py-1 fw-semibold">Send Message</button>

                        </div>
                        <div className="m-auto mx-auto pb-3">
                            <h3>How to Find Us</h3>
                            {/* <img className="rounded w-75" src="https://picsum.photos/1000/700" alt="" /> */}
                            <MyMapComponent
                                isMarkerShown
                                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAN7mwyR_B3NDDLnuwkLds1RU9IUSBklc8&v=3.exp&libraries=geometry,drawing,places"
                                loadingElement={<div style={{ height: `100%` }} />}
                                containerElement={<div style={{ height: `400px` }} />}
                                mapElement={<div style={{ height: `100%` }} />}
                            />
                        </div>
                    </div >
                </div>
            </div>
        </section>
    )
}

export default contactUs