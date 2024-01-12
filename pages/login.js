import react from 'react';
import Link from 'next/link';
import { BsPersonCircle } from "react-icons/bs";
import { IoPerson } from "react-icons/io5";
import { IoIosLock } from "react-icons/io";
import styles from '../styles/Login.module.scss';


const Login = () => {
  return (
    <div className={styles.login_container}>
        <center>    
        <BsPersonCircle className='login-image'/>  

        <form className="content-div">
            <center><h2>Login</h2></center>
            <div>
                <label>Email</label>
                <div className="form-group">
                    <span className='emailIcon'>
                        <IoPerson/>
                    </span>
                    <input type="email" id="email" placeholder="Enter your email"/>
                </div>
            </div>
            <div>
                <label for="password">Password</label><br/>
                <div className="form-group">
                <span className='emailIcon'>
                    <IoIosLock/>
                    </span>
                    <input type="password" id="password" placeholder="Enter your password"/>
                </div>
            </div>
                <div className="check">
                    <div>
                        <input type="checkbox" id="remember-me"/>
                        <label for="remember-me">Remember me</label>
                    </div>
                    <div>
                        <Link href="/">Forget password?</Link>
                    </div>
                </div>

            <center><button type="submit">Login</button></center>

            <center><Link href='/register'>Register Here</Link></center>
        </form>


        </center>

        {/* <div className={styles.login_center}>
            <BsPersonCircle className='login-image'/>  
        </div>
        <div className={styles.content}>
                
        </div> */}
    </div>
  )
}

export default Login