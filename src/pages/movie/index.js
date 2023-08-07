import { Hope } from "../../Components/router";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import MainSlider from "../../Components/main-slider";
import Divider from "../../Components/divider";
import GenreSlider from "../../Components/genreSlider";
import Series , {App} from "../series";
import axios from "axios";
import MovieList from "../../Components/six-list";
import './index.css'
import { Navigate } from "react-router-dom";
import LoadingScreen from "../../Components/loadingScreen";

export default function Movies(){

    const [movies, setMovies] = useState([]); 
    const [loading, setLoading] = useState(false); 
    const totalPages = 25;
    const [currentPage, setCurrentPage] = useState(1); 

    useEffect (() => {
        document.title = "JAMAL TV | MOVIE"
    } , [])
  
  
    useEffect(() => {
        getApi()
    }, [currentPage]);

    const getApi = () => {
        setLoading(true);
      axios
        .get(`https://moviesapi.ir/api/v1/movies?page=${currentPage}`)
        .then((response) => {
          setMovies((prevMovies) => [...prevMovies, ...response.data.data]);
          setLoading(false);
        })
        .catch((e) => {
            setLoading(false)
            Navigate("*")
        }) 
    }
  
    useEffect(() => {
      if (currentPage < totalPages) {
        setCurrentPage((prevPage) => prevPage + 1);
      }
    }, [movies, currentPage, totalPages]);




    return(
        <motion.div
        className="home"
        // style={back}
        initial={{ width: 0 }}
        animate={{ width : "100% "}}
        exit={{ x: window.innerWidth , transition : {duration : 0.1}}}
    >
        {
            loading ? <LoadingScreen/> : 
        <section className="movie-page">
            <div className="container">
                <div className="hero-section">
                    <MainSlider/>
                </div>
                <div className="carousel-wrapper">
                    <div className="popular">
                        <div className="container">
                            <Divider name="Popular" state="disable" linkState="disable"/>
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
                            <Divider name="New release" linkState="disable"/>
                            <Series>
                                {(movies) => <App movies={movies.filter((movie) => movie.year >= 2012)} />}
                            </Series>
                        </div>
                    </div>
                </div>
                <div className="six-list">
                    <Divider name="All the movies" linkState="disable"/>
                    <MovieList data={movies}/>
                </div>
            </div>
        </section>
        }
        </motion.div>
    ) 
}