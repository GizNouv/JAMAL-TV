import React from "react";
import styles from './index.module.css'
import { FacebookOutlined, InstagramOutlined, TwitterOutlined, YoutubeOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

export default function Footer(){
    return (
        <footer className={styles.footerWrapper}>
            <div className="container">
                <div className={styles.footerContent}>
                    <div className={styles.socialMedia}>
                        <div className={styles.iconWrapper}>
                            <a href="#">
                                <InstagramOutlined />
                            </a>
                        </div>
                    
                        <div className={styles.iconWrapper}>
                            <a href="#">
                                <TwitterOutlined />
                            </a>
                        </div>


                        <div className={styles.iconWrapper}>
                            <a href="#">
                                <FacebookOutlined />
                            </a>
                        </div>


                        <div className={styles.iconWrapper}>
                            <a href="#">
                                <YoutubeOutlined />
                            </a>
                        </div>
                    </div>
                    <div className={styles.copyRight}>
                        <span>© 2023 JAMAL TV and its related entities. All Rights Reserved.</span>
                    </div>
                    <div className={styles.menu}>
                        <ul className={`${styles.navbar} ${styles.noMargin}`} > 
                            <li>
                                <Link to="/movies">Movies</Link>
                            </li>
                            <li>
                                <Link to="/series">Series</Link>
                            </li>
                            <li>
                                <Link to="/genre">Genre</Link>
                            </li>
                            <li>
                                <Link to="/contact-us">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}