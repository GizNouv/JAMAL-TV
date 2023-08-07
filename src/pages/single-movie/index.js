import axios from "axios";
import {PlayCircleOutlined , DownloadOutlined} from '@ant-design/icons'
import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import styles from './index.module.css'
import { Col, Row , Image} from "antd";
import { motion } from "framer-motion";
import LoadingScreen from "../../Components/loadingScreen";

 export default function SingleMovie (){
  const {id} = useParams()
  const navigate = useNavigate();
  const [movie, setMovie] = useState({})
  const [loading , setLoading] = useState(false);

  useEffect(() => {
    getApi()
  } , [id])

  const getApi = () => {
    setLoading(true)
    axios.get(`https://moviesapi.ir/api/v1/movies/${id}`).then((response) => {
      setMovie(response.data)
      setLoading(false)
    })
    .catch(function (error) {
      setLoading(false)
      navigate("*");
    });
  }

  console.log(movie)

  return (
    <motion.div
    className="home"
    // style={back}
    initial={{ width: 0 }}
    animate={{ width : "100% "}}
    exit={{ x: window.innerWidth , transition : {duration : 0.1}}}
    // initial={{ opacity: 0 }}
    // animate={{ opacity : "100% "}}
    // exit={{ opacity : 0 , transition : {duration : 0.1}}}
>
  {
    loading ? <LoadingScreen/> :
    <div className={styles.singleMoive}>
    <div className={styles.singleMovieWrapper}>
      <img src={movie.poster} alt="Movie Poster" />
      <div className={styles.contentWrapper}>
        <div className={`container ${styles.container}`}>
          <div className={styles.holder}>
            <h2 className={styles.title}>{movie.title}</h2>
            <p className={styles.plot}>{movie.plot}</p>
            <div className={styles.infos}>
              <span>IMDB : {movie.imdb_rating}</span>
              <span>{movie.runtime}</span>
              <span>{movie.year}</span>
              <span className={styles.rated}>{movie.rated}</span>
            </div>
            <div className={styles.genres}>
              {movie.genres?.map((genre , index) => (
                <span key={index}>{genre}</span>
              ))}
            </div>
            <div className={styles.button}>
              <Link className={styles.watchNow} to="/">Watch Now <PlayCircleOutlined /></Link>
              <Link className={styles.download} to="/"><DownloadOutlined /></Link>
            </div>
            <div className={styles.director}>Director : {movie.director}</div>
            <div className={styles.cast}>Cast : {movie.actors}</div>
          </div>
        </div>
      </div>
    </div>
        <div className={styles.Screenshots}>
          <div className="container">
            <div className={styles.title}>Screenshots</div>
            <div className={styles.imagesWrapper}>
              <Row gutter={[20 , 24]}>
                {movie.images?.map((image , index) => (
                  <Col className={styles.column} key={`image-${index}`} xs={{ span: 24 }} sm={12} md={8} lg={{ span: 8 }}>
                    <Image src={image}/>
                  </Col>
                ))}
              </Row>
            </div>
          </div>
        </div>
  </div>
  }
  </motion.div>
  )
}

