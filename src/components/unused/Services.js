import React from "react";
import Service1 from "../images/PICTURE_1.png";
import { Link } from "react-router-dom";

function Services(){
    return(
        <section className="section border-top">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h3 className="main-heading">Services</h3>
                        <div className="underline mx-auto"> </div>
                        </div>
                     <div className="col-md-4">
                        <div className="card shadow" >
                        <img src={Service1} className="w-100 border-bottom" alt="Services"/>
                        <div className="card-body text-justify" >
                            <h6>Services</h6>
                            <div className="underline"></div>
                            <p className="text-justify">
                       Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                        </p>
                        <Link to="/services" claassName="btn btn-link">Read More</Link>    
                        </div>

                        </div>
                        
                     </div>
                     <div className="col-md-4">
                        <div className="card shadow" >
                        <img src={Service1} className="w-100 border-bottom" alt="Services"/>
                        <div className="card-body text-justify" >
                            <h6>Services</h6>
                            <div className="underline"></div>
                            <p className="text-justify">
                       Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                        </p>
                        <Link to="/services" claassName="btn btn-link">Read More</Link>    
                        </div>

                        </div>
                        
                     </div>
                     <div className="col-md-4">
                        <div className="card shadow" >
                        <img src={Service1} className="w-100 border-bottom" alt="Services"/>
                        <div className="card-body text-justify" >
                            <h6>Services</h6>
                            <div className="underline"></div>
                            <p className="text-justify">
                       Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                        </p>
                        <Link to="/services" claassName="btn btn-link">Read More</Link>    
                        </div>

                        </div>
                        
                     </div>
                    </div>
                </div>

        </section>
    );
}

export default Services;