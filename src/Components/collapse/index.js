import React, { useState } from "react";
import styles from "./index.module.css"

export default function Collapse (props) {

    const [isOk , setIsOk] = useState(true)

    const app = () => {
        setIsOk(!isOk)
    }

    return (
        <div className={`${styles['collapseWrapper']} ${isOk ? styles.active : styles.deactive}`}>
            <div onClick={app} className={styles.heading}>
                <div className={styles.title}>{props.title}</div>
                <div className={styles.icon}>&rsaquo;</div>
            </div>
            <div className={styles.content}>
                <p>{props.children}</p>
            </div>
        </div>
    )
}