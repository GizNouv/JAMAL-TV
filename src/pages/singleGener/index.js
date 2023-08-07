import axios from "axios"
import React, { useEffect, useState } from "react"
import { Col, Row } from 'antd';
import styles from './index.module.css'
import { Link, Navigate, useParams } from "react-router-dom";
import MovieList from "../../Components/six-list";
import { motion } from "framer-motion";
import LoadingScreen from "../../Components/loadingScreen";

export default function SingleGenre(){
  const [ genres , setGenres ] = useState([])
  const [info , setInfo] = useState({})
  const {genre_id} = useParams();
  const [ currentPage , setCurrentPage] = useState(1);
  const [loading , setLoading] = useState(false);


  
  useEffect(() => {
      getApi()
  } , [genre_id , currentPage])


  async function getApi () {
    try{
      setLoading(true);
        const response = await axios.get(`https://moviesapi.ir/api/v1/genres/${genre_id}/movies?page=${currentPage}`)
        setGenres((prevMovies) => [...prevMovies, ...response.data.data]);
        setInfo(response.data.metadata)
        setLoading(false);
        // console.log(`currentPage : ${currentPage}` )
        // console.log(response.data.data);
        // console.log(totalPages)
    }catch(e){
      setLoading(false);
      Navigate("*")
    }
}

const totalPages = info.page_count



useEffect(() => {
  if (currentPage < totalPages) {
    setCurrentPage((prevPage) => prevPage + 1);
  }
}, [genres, currentPage, totalPages]);

      return (
        <motion.div
        className="home"
        // style={back}
        initial={{ width: 0 }}
        animate={{ width : "100% "}}
        exit={{ x: window.innerWidth , transition : {duration : 0.1}} }
    >
      {
        loading ? <LoadingScreen/> :
        <div className={styles.genrePage}>
          <div className="container">
            <MovieList data={genres}/>
          </div>
        </div>
      }
        </motion.div>
      )
}