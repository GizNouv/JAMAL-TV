import React, { useEffect } from "react";
import styles from './index.module.css'
import { Link } from "react-router-dom";

export default function NotFoundPage () {

    useEffect (() => {
        document.title = "JAMAL TV | NOT FOUND"
    } , [])


    return (
        <div className={styles.notFoundPage}>
            <div className={styles.errorWrapper}>
                <div className={styles.logo}>
                    <Link to="/">jamal tv</Link>
                </div>
                <div className={styles.errorContent}>
                    <div className={styles.title}>No Signal...</div>
                    <div className={styles.subtitle}>
                        <p>I think you are looking for the wrong channel !!</p>
                    </div>
                    <div className={styles.errorCode}>code error : 404</div>
                    <div className={styles.link}>
                        <Link to="/">
                            go back home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}