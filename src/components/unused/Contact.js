import React from 'react';

function Contact(){
    return(
       <div>
        <section className="py-4 bg-info">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 my-auto">
                            <h4>Contact us</h4>
                        </div>
                        <div className="col-md-8 my-auto">
                            <h6 className="float-end">
                                Home/Contact Us
                            </h6>
                        </div>
                    </div>
                </div>
            </section>
            <section className='section'>
            <div class="card shadow">
            <div class="card-body">
                <div className="row">
                    <div className="col-md-6 border-left">
                        <h6>Contact Form</h6>
                        <hr/>
                        <div className="formgroup">
                            <label className='mb-1'>Full Name</label>
                            <input type="text" className="form-control" placeholder='Enter full Name'/>
                        </div>
                        <div className="formgroup">
                            <label className='mb-1'>Phone Number</label>
                            <input type="text" className="form-control" placeholder='Enter full Name'/>
                        </div>
                        <div className="formgroup">
                            <label className='mb-1'>Email</label>
                            <input type="text" className="form-control" placeholder='Enter full Name'/>
                        </div>
                        <div className="formgroup">
                            <label className='mb-1'>Message</label>
                            <textarea row="3" className="form-control" placeholder="Type your message..."></textarea>
                        </div>
                        <div className="formgroup py-3">
                            <button type="button" className='btn btn-primary shadow w-100'> Send Message</button>
                        </div>
                    </div>
                    <div className="col-md-6 border-start">
                        <h5 className="main-heading">Address Information</h5>
                        <div className="underline"></div>
                        <p>
                            #XXX, Address line 1,
                        </p>
                        <p>
                            Phone:0123456789
                        </p>
                        <p>
                            Email : email@email.com
                        </p>

                    </div>
                </div>
                
                </div>
                </div>
       
            </section>
            
        </div>
    );
}

export default Contact;