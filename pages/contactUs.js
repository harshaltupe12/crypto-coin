import React from 'react';
import Link from 'next/link';

const ContactUs = () => {
  return (
    <div>
    <center>    
    {/* <BsPersonCircle className='login-image'/>   */}

    <form className="contact-form">
        <center><h2>Contact Us</h2></center>
        
        <div>
            <label>Name</label><br/>
            <div className="form-group">
                <input type="text" id="name" placeholder="Full Name"/>
            </div>
        </div>

        <div>
            <label>Subject</label><br/>
            <div className="form-group">
                <input type="text" id="subject" placeholder="Subject"/>
            </div>
        </div>

        <div>
            <label>Email</label><br/>
            <div className="form-group">
                <input type="email" id="email" placeholder="Email"/>
            </div>
        </div>

        <div>
            <label>Message</label><br/>
            <div className="form-group">
                {/* <input type="textarea" id="message" placeholder="Message"/> */}
                <textarea rows={7} placeholder='Message'/>
            </div>
        </div>
        <br/>
        <center><button type="submit">Submit</button></center>

    </form>


    </center>

</div>
  )
}

export default ContactUs