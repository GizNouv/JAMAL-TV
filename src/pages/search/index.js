import axios from "axios";
import React, { useEffect, useState ,  } from "react";
import { Col, Row } from 'antd';
import './index.css'
import { Link, Navigate } from "react-router-dom";
import { CloseSreach } from "../../Components/buttons";
import MovieList from "../../Components/six-list";
import { motion } from "framer-motion";
import LoadingScreen from "../../Components/loadingScreen";
import debounce from "lodash/debounce";
import BarLoader from "react-spinners/BarLoader";


export default function Search (){
    let [ movies , setMovies] = useState([]);
    let [loading , setLoading ] = useState(false);
    const debounceInput = debounce(onChange , 200)

    useEffect (() => {
      document.title = "JAMAL TV | SEARCH"
  } , [])

    async function onChange(e) {
        const value = e.target.value;
        console.log(value)
        setLoading(true);
        if (value === "") {
          setMovies(movies = []); // Clear the movies data when the input is empty
          setLoading(false);
        } else {
          try{
          const response = await axios
            .get(`https://moviesapi.ir/api/v1/movies?q=${value}`)
              setMovies(response.data.data);
              setLoading(false);
          }catch(e){
            setLoading(false);
            Navigate("*")
          }
        }
      }  
      
      

    return(
      <motion.div
      className="home"
      // style={back}
      initial={{ width: 0 }}
      animate={{ width : "100% "}}
      exit={{ x: window.innerWidth , transition : {duration : 0.1}}}
  >
        <div className="searchPage">
          <div className="container">
            <Row className="search-bar" gutter={16} justify="start" align="middle">
              <Col flex="auto">
                <input className="search" type="text" placeholder="Search you movie by name..." onChange={(e) => debounceInput(e)}/>
              </Col>
              <Col className="CloseSreach" flex="100px">
                <CloseSreach/>
              </Col>
            </Row>
            <div className="search-result">
                {loading === true ? <BarLoader color="#007aff" width="100%" /> : <MovieList data={movies}/> }
            </div>
          </div>
        </div>
        </motion.div>
    )
}