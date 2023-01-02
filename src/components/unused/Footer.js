import React from "react";
import { Link } from "react-router-dom";

function Footer(){
    return(
        <section className="section footer bg-dark text-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h6 >Company Information</h6>
                        <hr/>
                        <p className="text-white text-justify">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                        </p>
                    </div>
                    <div className="col-md-4">
                        <h6>Quick Links</h6>
                        <hr/>
                        <div><Link to="/home">Home</Link></div>
                        <div><Link to="/about">About</Link></div>
                        <div><Link to="/contact">Contact Us</Link></div>
                    </div>
                    <div className="col-md-4">
                        <h6>Reach Us</h6>
                        <hr/>
                        <div><p className="text-white mb-1">Address 1</p></div>
                        <div><p className="text-white mb-1">0123456789</p></div>
                        <div><p className="text-white mb-1">0123456789</p></div>
                        <div><p className="text-white mb-1">email@mail.com</p></div>
                    </div>
                </div>
             </div>

        </section>
    );
}

export default Footer;