import React from 'react';
import { UserOutlined , CloseCircleOutlined } from '@ant-design/icons'
import styles from './index.module.css'
import { Link } from 'react-router-dom';

export default function SignIn (){
    return (
        <> 
            <Link className={styles.signUp} to="/sign-up">
                <UserOutlined className={styles.userIcon} />
                Sign In
            </Link>
        </>
    )
}

export function CloseSreach () {

    const handleGoBack = () => {
        window.history.back();
    };

    return (
        <>
        <button onClick={handleGoBack}  className={styles.CloseSreach}>
            <CloseCircleOutlined />
            <span>Close</span>
        </button>
    </>
    )
}

export function LetsGo () {
    return (
        <a className={styles.letsGo} href='#'>
            <span>Let's go</span>
            <img src="asstes/icons/chevrons-right.svg"/>
        </a>
    )
}

export function MoreDetails () {
    return (
        <a className={styles.MoreDetails}>More details</a>
    )
}