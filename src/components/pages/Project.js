import React from "react";
import "../../App.css";

function Project(){
    return(
    <div>
        <div classname="mx-auto">
            <p class="p-2 m-2 text-white fs-4 fw-bold mx-auto text-center"><span className="rounded-pill skill p-2 m-4">Projects as a Manual Tester</span></p>
        </div>
        <div className="accordion accordion-flush col-10 mx-auto" id="accordionExample">

            <div className="accordion-item ">
                <h2 className="accordion-header " id="headingOne">
                    <button className="accordion-button fw-bold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        PROJECT PROFILE #1
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body justify-content-center">
                        <p>
                            <table className="fs-6 fw-bold mx-auto">
                                <tr>
                                    <td>Project Title</td>
                                    <td>: Revature Pro</td>
                                </tr>
                                <tr>
                                    <td>Team size</td>
                                    <td>: 20</td>
                                </tr>
                                <tr>
                                    <td>Duration</td>
                                    <td>: October 2021 - September 2022</td>
                                </tr>
                            </table>
                            <p className="fs-6 fw-bold blue">
                                PROJECT DESCRIPTION
                            </p>
                            <p>
                                To create a pathway where university students and graduates with diverse backgrounds can build knowledge, skills, abilities to reach their potential as technology professionals and leverage their talents to contribute to the growth and success to any company. Product objective is to connect between the trainer and student using different integrations. 
                            </p>
                            <p className="fs-6 fw-bold blue">
                                THIRD-PARTY INTEGRATIONS
                            </p>
                            <p>
                                <ul>
                                    <li>Interview Mocha</li>
                                    <li>Sales Force</li>
                                    <li>Zoom</li>
                                    <li>GitLab</li>
                                    <li>Microsoft Teams</li>
                                </ul>
                            </p>
                            <p className="fs-6 fw-bold blue">
                                ROLES AND RESPONSIBLITIES
                            </p>
                            <p>
                                <ul>
                                    <li>Complete study of business functionality and analyzing the requirements of the system</li>
                                    <li>Involved in preparation of test cases and updating test scenarios and Test data</li>
                                    <li>Reviewed the Test conditions, prepared test cases for <b className="blue">Functional Test</b> and <b className="blue">Smoke Test</b></li>
                                    <li>Performed <b className="blue">Sanity Testing, Re-testing & Regression Testing </b>on modified software Builds</li>
                                </ul>
                            </p>
                        </p>
                    </div>
                </div>
            </div>
            <div className='accordion-item'>
                <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button fw-bold fs-5 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        PROJECT PROFILE #2
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <p>
                        <table className="fs-6 fw-bold mx-auto">
                                <tr>
                                    <td>Project Title</td>
                                    <td>: Caliber</td>
                                </tr>
                                <tr>
                                    <td>Team size</td>
                                    <td>: 8</td>
                                </tr>
                                <tr>
                                    <td>Duration</td>
                                    <td>: October 2022 - November 2022</td>
                                </tr>
                            </table>
                            <p className="fs-6 fw-bold blue">
                                PROJECT DESCRIPTION
                            </p>
                            <p>
                                To assess and evaluate the performance of students. It is primarily used to group students based on their performnace , identify them and provide extra attention to them. It is used only by the trainers, to follow up the candidates who are falling back in their grades. Batches were created in SalesForce and assessment scores from Interview Mocha is used to evaluate the candidate's performance.
                            </p>
                            <p className="fs-6 fw-bold blue">
                                THIRD-PARTY INTEGRATIONS
                            </p>
                            <p>
                                <ul>
                                    <li>Interview Mocha</li>
                                    <li>Sales Force</li>
                                </ul>
                            </p>
                            <p className="fs-6 fw-bold blue">
                                ROLES AND RESPONSIBLITIES
                            </p>
                            <p>
                                <ul>
                                    <li>Analysis of requirements from end user perspective</li>
                                    <li><b className="blue">Boundary-value Testing, Decision Table Testing, Positive and Negative Testing </b> were carried out to make sure all types of results are rendered properly in the application</li>
                                    <li>Preparation and peer review of Test cases</li>
                                </ul>
                            </p>
                        </p>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 classname="accordion-header" id="headingThree">
                    <button className="accordion-button fw-bold fs-5 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        PROJECT PROFILE #3
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <p>
                        <table className="fs-6 fw-bold mx-auto">
                                <tr>
                                    <td>Project Title</td>
                                    <td>: Gitpod and Embedded editor Integration</td>
                                </tr>
                                <tr>
                                    <td>Team size</td>
                                    <td>: 5</td>
                                </tr>
                                <tr>
                                    <td>Duration</td>
                                    <td>: December 2022 - Present</td>
                                </tr>
                            </table>
                            <p className="fs-6 fw-bold blue">
                                PROJECT DESCRIPTION
                            </p>
                            <p>
                                This project was a major addition to the already existing application Reavture Pro. It involved adding an embedded code editor and a ready to use Gitpod workspace for the trainee to practice and learn programming languages. The third party integrations used were- JDoodle for the embedded editor and Gitpod for workspace. 
                            </p>
                            <p className="fs-6 fw-bold blue">
                                THIRD-PARTY INTEGRATIONS
                            </p>
                            <p>
                                <ul>
                                    <li>Jdoodle</li>
                                    <li>Gitpod</li>
                                </ul>
                            </p>
                            <p className="fs-6 fw-bold blue">
                                ROLES AND RESPONSIBLITIES
                            </p>
                            <p>
                                <ul>
                                    <li><b className="blue">Bottom-up Integration Testing</b> and <b className="blue">System Testing</b>were done after integrating it into the application</li>
                                    <li> <b className="blue">Inter-operability and cross platform testing </b>were also carried out</li>
                                </ul>
                            </p>
                        </p>
                    </div>
                </div>

            </div>

            
        </div> 
</div>
        
    );
}

export default Project;