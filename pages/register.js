import React from 'react'
import Link from 'next/link';
import { BsPersonCircle } from "react-icons/bs";

const Register = () => {
  return (
        <div>
            <center>    
            <BsPersonCircle className='login-image'/>  

            <form className="content-div">
                <center><h2>Register</h2></center>
                
                <div>
                    <label>Name</label><br/>
                    <div className="form-group">
                        <input type="email" id="email" placeholder="Full Name"/>
                    </div>
                </div>

                <div>
                    <label>Email</label><br/>
                    <div className="form-group">
                        <input type="email" id="email" placeholder="Enter your email"/>
                    </div>
                </div>
                
                <div>
                    <label for="password">Password</label>
                    <div className="form-group">
                        <input type="password" id="password" placeholder="Enter your password"/>
                    </div>
                </div>

                <div>
                    <label for="password">Confirm Password</label>
                    <div className="form-group">
                        <input type="password" id="password" placeholder="Confirm password"/>
                    </div>
                </div>

                <center><button type="submit">Register</button></center>

                <center><Link href='/login'>Already a user? Login</Link></center>
            </form>


            </center>

        </div>
  )
}

export default Register