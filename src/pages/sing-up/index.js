import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from './index.module.css'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faEnvelope, faFaceSadTear, faLock, faUserLarge, faXmark } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import { faFaceSmileBeam } from "@fortawesome/free-regular-svg-icons";
import { motion } from "framer-motion";

export default function SignUp () {
    const [Isname, setName] = useState('');
    const [Isemail, setEmail] = useState('');
    const [Ispassword, setPassword] = useState('');
    const [isActive , setIsActive] = useState(false)


    useEffect (() => {
        document.title = "JAMAL TV | SING UP"
    } , [])
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      try {
        const response = await axios.post(
          `https://moviesapi.ir/api/v1/register?name=${Isname}&email=${Isemail}&password=${Ispassword}`
        );
            if (response.status >= 200 && response.status < 300) {
                const successBox = document.getElementById(styles.ReqStatus1);
                successBox.classList.add(styles.show);
                
                setTimeout(() => {
                    successBox.classList.remove(styles.show);
                }, 5000);
            }
        console.log('User registered:', response.data);
      } catch (error) {
            const errorBox = document.getElementById(styles.ReqStatus2);
            errorBox.classList.add(styles.show);
                    
            setTimeout(() => {
                errorBox.classList.remove(styles.show);
            }, 5000);
      }
    //   localStorage.setItem("userName" , Isname)
    };

    function doActive () {
        setIsActive(!isActive)
    }


    function goBack () {
        window.history.back();
    }

    
  
    return (
        <motion.div
        className="home"
        // style={back}
        initial={{ width: 0 }}
        animate={{ width : "100% "}}
        exit={{ x: window.innerWidth , transition : {duration : 0.1}}}
    >
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.contentWapper}>
                    <span onClick={goBack} className={styles.cloesIcon}>
                        <FontAwesomeIcon icon={faXmark} />
                    </span>
                    <div className={`${styles.formWrapper} ${styles.SignUp} ${isActive ? styles.active : ""}`}>
                        <Link to="/">
                            <h2 className={styles.title}>JAMAL TV</h2>
                        </Link>
                        <form onSubmit={handleSubmit}>
                            <div className={styles.inputBox}>
                                <FontAwesomeIcon className={styles.icon} icon={faUserLarge} />
                                <input type="text" required value={Isname} onChange={(e) => setName(e.target.value)} />
                                <label>Name:</label>
                            </div>
                            <div className={styles.inputBox}>
                                <FontAwesomeIcon className={styles.icon} icon={faEnvelope} />
                                <input type="email" required value={Isemail} onChange={(e) => setEmail(e.target.value)} />
                                <label>Email:</label>
                            </div>
                            <div className={styles.inputBox}>
                                <FontAwesomeIcon className={styles.icon} icon={faLock} />
                                <input type="password" required value={Ispassword} onChange={(e) => setPassword(e.target.value)} />
                                <label>Password:</label>
                            </div>
                            <div className={styles.agreement}>
                                <input type="checkbox" required/>
                                <span>agree with our Terms of Service, Privacy Policy</span>
                            </div>
                            <button type="submit">Register</button>
                            <p className={styles.switch}>Already have an account? <span onClick={doActive}>Log In</span></p>
                        </form>
                    </div>

                    <div className={`${styles.formWrapper} ${styles.logIn} ${isActive ? styles.active : ""}`}>
                        <Link to="/">
                            <h2 className={styles.title}>JAMAL TV</h2>
                        </Link>
                        <form onSubmit={handleSubmit}>
                            <div className={styles.inputBox}>
                                <FontAwesomeIcon className={styles.icon} icon={faEnvelope} />
                                <input type="email" required value={Isemail} onChange={(e) => setEmail(e.target.value)} />
                                <label>Email:</label>
                            </div>
                            <div className={styles.inputBox}>
                                <FontAwesomeIcon className={styles.icon} icon={faLock} />
                                <input type="password" required value={Ispassword} onChange={(e) => setPassword(e.target.value)} />
                                <label>Password:</label>
                            </div>
                            <div className={styles.agreement}>
                                <input type="checkbox" />
                                <span>Remember Me</span>
                            </div>
                            <button type="submit">Log In</button>
                            <p className={styles.switch}>Don't have an account? <span onClick={doActive}>Sign Up</span></p>
                        </form>
                    </div>
                    <div id={styles.ReqStatus1}>
                        <FontAwesomeIcon icon={faFaceSmileBeam} />
                        <span className={styles.requestStatus}>"Welcome to our community! Your account has been registered and is ready to use."</span>
                    </div>
                    <div id={styles.ReqStatus2}>
                        <FontAwesomeIcon icon={faFaceSadTear} />
                        <span className={styles.requestStatus}>"We're sorry, but your account could not be registered at this time. Please contact us for help."</span>
                    </div>
                </div>
            </div>
        </div>
        </motion.div>
    );
}