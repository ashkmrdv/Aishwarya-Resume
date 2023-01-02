import React from "react";
import "../../App.css";
import Card from 'react-bootstrap/Card';

function About(){
    return(
    <div>
        <div classname="mx-auto">
                <p class="p-2 m-4 text-white fs-4 fw-bold mx-auto text-center"><span className="rounded-pill skill p-2 m-4">Experience</span></p>
        </div>
         <div className="container">
            <div className="row ">
                <div className="col-sm-4">
                    <Card border="light shadow fs-6" style={{ width: '90%', height:'100%' }}>
                        <Card.Header><span className="fw-bold">OCTOBER 2021-PRESENT</span></Card.Header>
                        <Card.Body>
                            <Card.Title><span className="fw-bold blue fs-5">ASSOCIATE TEST ENGINEER</span></Card.Title>
                            <Card.Text>
                             REVATURE CONSULTANCY SERVICES
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col-sm-4">
                    <Card border="light shadow fs-6" style={{ width: '90%', height:'100%' }}>
                        <Card.Header><span className="fw-bold">MAY 2018 - SEPTEMBER 2021</span></Card.Header>
                        <Card.Body>
                            <Card.Title><span className="fw-bold blue fs-5">PREPARED FOR CIVIL SERVICE EXAMS</span></Card.Title>
                            <Card.Text>
                             APPEARED FOR PRELIMS CSE 2019 AND CSE 2020
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col-sm-4">
                    <Card border="light shadow fs-6" style={{ width: '90%', height:'100%'  }}>
                        <Card.Header><span className="fw-bold">DECEMBER 2017 -MARCH 2018</span></Card.Header>
                        <Card.Body>
                            <Card.Title><span className="fw-bold blue fs-5">INTERNSHIP TRAINEE</span></Card.Title>
                            <Card.Text>
                             ROBERT BOSCH ENGINEERING AND BUSINESS SOLUTIONS 
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>

        <div classname="mx-auto">
            <p class="p-2 m-4 text-white fs-4 fw-bold mx-auto text-center"><span className="rounded-pill skill p-2 m-4">Education</span></p>
        </div>
        <div className="container">
            <div className="row ">
                <div className="col-sm-4">
                    <Card border="light shadow fs-6" style={{ width: '90%', height:'100%' }}>
                        <Card.Header><span className="fw-bold">MAY 2018</span></Card.Header>
                        <Card.Body>
                            <Card.Title><span className="fw-bold blue fs-5">BE ROBOTICS AND AUTOMATION ENGINEERING</span></Card.Title>
                            <Card.Text>
                                <p>PSG COLLEGE OF TECHNOLOGY, COIMBATORE</p>
                                Secured a CGPA of 9.2, First class with Distinction
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col-sm-4">
                    <Card border="light shadow fs-6" style={{ width: '90%', height:'100%' }}>
                        <Card.Header><span className="fw-bold">MARCH 2014</span></Card.Header>
                        <Card.Body>
                            <Card.Title><span className="fw-bold blue fs-5">12th GRADE</span> </Card.Title>
                            <Card.Text>
                                <p>SRI SANKARA VIDHYASHRAMAM HIGHERSECONDARY SCHOOL, CHENNAI</p>
                             Cleared with a percentage of 96.75
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col-sm-4">
                    <Card border="light shadow fs-6" style={{ width: '90%', height:'100%'  }}>
                        <Card.Header><span className="fw-bold">APRIL 2012</span></Card.Header>
                        <Card.Body>
                            <Card.Title><span className="fw-bold blue fs-5">10th GRADE</span> </Card.Title>
                            <Card.Text>
                            <p>BHARATHI MATRICULATION HIGHER SECONDARY SCHOOL, COIMBATORE</p>
                             Cleared with a percentage of 95.8
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
         </div>
         <div classname="mx-auto">
            <p class="p-2 m-4 text-white fs-4 fw-bold mx-auto text-center"><span className="rounded-pill skill p-2 m-4">Personal Profile</span></p>
        </div>
        <div classname="container">             
            <div class="row justify-content-center fw-bold p-2 m-2">
                <div class="col-4 text-end blue">
                    Date of Birth :
                </div>
                <div class="col-4">
                    <span class="p-2 m-2 text-start">21/10/1996</span>
                </div>
            </div>

            <div class="row justify-content-center fw-bold p-2 m-2">
                <div class="col-4 text-end blue">
                    Father Name :
                </div>
                <div class="col-4">
                    <span class="p-2 m-2 text-start">R S Kumar</span>
                </div>
            </div>

            <div class="row justify-content-center fw-bold p-2 m-2">
                <div class="col-4 text-end blue">
                    Nationality :
                </div>
                <div class="col-4">
                    <span class="p-2 m-2 text-start">Indian</span>
                </div>
            </div>

            <div class="row justify-content-center fw-bold p-2 m-2">
                <div class="col-4 text-end blue">
                    Hobbies :
                </div>
                <div class="col-4">
                    <span class="p-2 m-2 text-start">Dance, App development using flutter</span>
                </div>
            </div>

            <div class="row justify-content-center fw-bold p-2 m-2">
                <div class="col-4 text-end blue">
                    Languages Known :
                </div>
                <div class="col-4">
                    <span class="p-2 m-2 text-start">Tamil, English, Hindi</span>
                </div>
            </div>

            <div class="row justify-content-center fw-bold p-2 m-2">
                <div class="col-4 text-end blue">
                    Email :
                </div>
                <div class="col-4">
                    <span class="p-2 m-2 text-start">ashkmr1996@gmail.com</span>
                </div>
            </div>

            <div class="row justify-content-center fw-bold p-2 m-2">
                <div class="col-4 text-end blue">
                    Phone number :
                </div>
                <div class="col-4">
                    <span class="p-2 m-2 text-start">+91 - 9629578111</span>
                </div>
            </div>
        </div>
    </div>


                   
    );
}

export default About;