import React from "react";
import {Link} from "react-router-dom";
import "../../App.css";


function Introduction(){
    return(
        <>
        <div class=" container bg-transparent  fs-4 text-center mx-auto align-middle shadow ">
            <p className="intro">Hello, I'm <span className="blue fw-bold">Aishwarya Senthil Kumar </span></p>
            <p className="fs-6 text-start pb-1">
            I'm a dedicated professional and holds a <span className="blue fw-bold">certificate for MERN Stack</span> with more than a year of experience ( <span className="blue fw-bold">1 year 3 months</span> ) in manual testing. I have knowledge in <span className="blue fw-bold">Java</span> and <span className="blue fw-bold">Selenium.</span> I'm an enthusiastic learner who can quickly grasp upcoming Technologies and learned <span className="blue fw-bold">MERN </span> (<span className="blue fw-bold">Mongo DB, Express JS, React JS, Node JS</span>) stack to become a full stack developer out of own interest and has done a certification course on it. 
            </p>
            <p className="fs-6 text-start pb-1">
                I would like to be a part of an organisation that provides an atmosphere for mutual growth and benefits, where I can show off my potential and expertise. I would also like to learn and work in upcoming and niche techs.
            </p>
            <p className="fs-6 text-start pb-3">
                My hobby is dancing. I am a trained Bharathanatyam dancer. Apart from that, I am also learning to develop apps using Flutter framework. I am fluent in Tamil, English and Hindi. During my free time I practice coding in websites like HackerRank. 
            </p>          
        </div>
        </>
        
    );
}

export default Introduction;