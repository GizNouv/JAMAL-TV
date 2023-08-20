import React, { createContext, useEffect, useState } from "react";
import './index.css'
import OnlyOnJamal from "../../Components/onlyjamal"
import Series, { App } from "../series";
import Divider from "../../Components/divider";
import GenreSlider from "../../Components/genreSlider";
import Collapse from "../../Components/collapse";
import { LetsGo } from "../../Components/buttons";
import { motion } from "framer-motion";
import LoadingScreen from "../../Components/loadingScreen";



export default function Home(){
    const [showLoader, setShowLoader] = useState(true);


    useEffect (() => {
        document.title = "JAMAL TV | HOME"
    } , [])

    useEffect(() => {
        setTimeout(() => {
          setShowLoader(false);
        }, 5000);
      }, []);
    
    


    return (
        
           
        <motion.div
            className="home"
            // style={back}
            initial={{ width: 0 }}
            animate={{ width : "100% "}}
            exit={{ x: window.innerWidth , transition : {duration : 0.1}}}
        >
            
            {showLoader ? (
        <LoadingScreen/>
      ) : (
        <section className="home-page">
            <div className="hero-section">
                <div className="container">
                    <div className="hero-content">
                        <h1 className="main-title">Unlimited films, TV programmes and more</h1>
                        <p className="subtitle">Watch anywhere. Cancel at any time.</p>
                        <form>
                            <input type="text" placeholder="Enter Your Email To Join Us..."/>
                            <button>Let's go</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="only-on">
                <div className="container">
                    <div className="only-on-content">
                        <h2>Only on JAMAL TV</h2>
                        <p>Exclusive movies, series and originals you won't find on any other streaming service.</p>
                        <div className="six-list">
                            <OnlyOnJamal />
                            {/* <MovieList filter="action"/> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="all-devies-section">
                <div className="container">
                    <div className="all-devies-content">
                        <div className="heading">
                            <h2>Watch the way you want</h2>
                            <p>Stream on up to four screens at once on compatible devices.</p>
                        </div>
                        <div className="list">
                            <ul>
                                <li>
                                    <img src="asstes/icons/012-wifi.png"/>
                                    <div className="list-text">
                                        <div className="title">Desktop and Laptop</div>
                                        <div className="subtitle">windows PC - MacOS - Chorom OS</div>
                                    </div>
                                </li>
                                <li>
                                    <img src="asstes/icons/011-photo-camera.png"/>
                                    <div className="list-text">
                                        <div className="title">Mobile and Tablet</div>
                                        <div className="subtitle">Android Phone & Tablets - Iphone and Ipad - Amazon Fire Tablets</div>
                                    </div>
                                </li>
                                <li>
                                    <img src="asstes/icons/010-gamepad.png"/>
                                    <div className="list-text">
                                        <div className="title">Game consoles</div>
                                        <div className="subtitle">Xbox Series S - Xbox Seris X - PS5 - PS4</div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="all-devies-image">
                        <img src="asstes/images/home/devices.png"/>
                        
                    </div>
                </div>
            </div>
            <div className="sliders-section">
                <div className="popular">
                    <div className="container">
                        <Divider name="Popular" state="disable" link="/movies"/>
                        <Series>
                            {(movies) => <App movies={movies.filter((movie) => movie.imdb_rating >= 8.8)} />}
                        </Series>
                    </div>
                </div>
                <div className="genres">
                    <div className="container">
                        <Divider name="Genres" link="/genre"/>
                        <GenreSlider/>
                    </div>
                </div>
                <div className="new-release">
                    <div className="container">
                        <Divider name="New release" link="/movies"/>
                        <Series>
                            {(movies) => <App movies={movies.filter((movie) => movie.year >= 2012)} />}
                        </Series>
                    </div>
                </div>
            </div>
            <div className="benefit-section">
                <div className="container">
                    <div className="content-wrapper">
                        <div className="image-wrapper">
                            <img src="asstes/icons/028-film.png"/>
                        </div>
                        <div className="text-wrapper">
                            <div className="title">Endless entertainment</div>
                            <div className="subtitle">Explore thousands of hours of TV series, movies and originals.</div>
                        </div>
                    </div>
                    <div className="content-wrapper">
                        <div className="image-wrapper">
                            <img src="asstes/icons/025-responsive-webpage.png"/>
                        </div>
                        <div className="text-wrapper">
                            <div className="title">Available on your favourite devices</div>
                            <div className="subtitle">Stream on up to four screens at once on compatible devices.</div>
                        </div>
                    </div>
                    <div className="content-wrapper">
                        <div className="image-wrapper">
                            <img src="asstes/icons/032-protection.png"/>
                        </div>
                        <div className="text-wrapper">
                            <div className="title">Easy-to-use parental controls</div>
                            <div className="subtitle">Keep your family safe with our intuitive parental controls.</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="QA-section">
                <div className="container">
                    <div className="heading">
                        <h2>Frequently Asked Questions</h2>
                    </div>
                    <div className="collaps">
                        <Collapse title="What is JAMAL TV?">
                            JAMAL TV is the streaming home for entertainment from Disney, Pixar, Marvel, Star Wars, National Geographic, Star and more.
                            JAMAL TV has a number of benefits included in the standard subscription price:
                            Exclusive Originals you can’t see anywhere else, blockbuster movies, bingeable shows, snackable shorts, and inspiring documentaries
                            Unlimited downloads on up to 10 devices and up to 7 different profiles
                            4K UHD streaming with Dolby Vision and Dolby Atmos support on compatible devices for no extra cost
                            A robust parental controls system including dedicated profiles for children
                            Up to 4 screens can stream simultaneously
                            Host virtual viewing parties for up to 5 personal friends with Groupwatch
                        </Collapse>
                        <Collapse title="What can I watch on JAMAL TV?">
                            Thousands of movies and series from the best storytellers with more being added every month, so you'll always find something to watch
                            The latest live-action and animated blockbusters from Disney, such as Encanto
                            Heartwarming stories for all ages from the masterminds at Pixar, like the latest hit movie Lightyear
                            Experience the ever-expanding Marvel Cinematic Universe like never before with Marvel Studios exclusive Originals series: WandaVision , The Falcon and The Winter Soldier , Loki , Hawkeye , and Moon Knight
                            Relive the epic Skywalker saga or stream the world's first-ever live-action Star Wars series The Mandalorian and the latest hit series Obi-Wan Kenobi
                            Experience the beauty of our planet with intrepid National Geographic explorers and a series of great documentaries
                            At Star, you'll find binge-worthy shows everyone's talking about, like the global phenomenon The Walking Dead and The Kardashians , classics like Grey's Anatomy , and movie hits like Free Guy
                        </Collapse>
                        <Collapse title="How much does JAMAL TV cost?">
                            A JAMAL TV subscription costs €9.99 per month. You can also save over 15%* with an annual subscription for €99.90 per year, giving you 12 months for the price of 10.
                            *Compared to 12 months at the monthly subscription cost.
                        </Collapse>
                        <Collapse title="What devices are supported?">
                            JAMAL TV supports mobile devices, web browsers, game consoles, set-top boxes and smart TVs. Click here for the full list.
                        </Collapse>
                        <Collapse title="Is there any commitment when signing up for JAMAL TV?">
                            Click here for more information.
                        </Collapse>
                    </div>
                </div>
            </div>
            <div className="send-mail-section">
                <div className="container">
                    <div className="content-wrapper">
                        <div className="title">Ready to watch? Enter your email to create or restart your membership.</div>
                        <div className="email-wrapper">
                            <input type="text" placeholder="Enter Your Email To Join Us..."/>
                            <LetsGo/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
)}
        </motion.div>
        
    ) 
}