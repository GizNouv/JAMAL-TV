import axios from "axios"
import React, { useEffect, useState } from "react"
import { Col, Row } from 'antd';
import styles from './index.module.css'
import {Link} from "react-router-dom";
import { motion } from "framer-motion";
import LoadingScreen from "../../Components/loadingScreen";

const images =[
  {
      poster: "https://moviesapi.ir/images/tt0068646_poster.jpg"
  },
  {
      poster: "https://moviesapi.ir/images/tt0108052_poster.jpg"
  },
  {
      poster: "https://moviesapi.ir/images/tt0103064_poster.jpg"
  },
  {
      poster: "https://moviesapi.ir/images/tt0112641_poster.jpg"
  },
  {
      poster: "https://moviesapi.ir/images/tt0363163_poster.jpg"
  },
  {
      poster: "https://moviesapi.ir/images/tt0245429_poster.jpg"
  },
  {
      poster: "https://moviesapi.ir/images/tt0167260_poster.jpg"
  },
  {
      poster: "https://moviesapi.ir/images/tt0105695_poster.jpg"
  },
  {
      poster: "https://moviesapi.ir/images/tt0027977_poster.jpg"
  },
  {
      poster: "https://moviesapi.ir/images/tt0482571_poster.jpg"
  },
  {
      poster: "https://moviesapi.ir/images/tt0114369_poster.jpg"
  },
  {
      poster: "https://moviesapi.ir/images/tt1345836_poster.jpg"
  },
  {
      poster: "https://moviesapi.ir/images/tt0910970_poster.jpg"
  },
  {
      poster: "https://moviesapi.ir/images/tt2119532_poster.jpg"
  },
  {
      poster: "https://moviesapi.ir/images/tt2096673_poster.jpg"
  },
  {
      poster: "https://moviesapi.ir/images/tt0169547_poster.jpg"
  },
  {
      poster: "https://moviesapi.ir/images/tt0081505_poster.jpg"
  },
  {
      poster: "https://moviesapi.ir/images/tt2582802_poster.jpg"
  },
  {
      poster: "https://moviesapi.ir/images/tt0032976_poster.jpg"
  },
  {
      poster: "https://moviesapi.ir/images/tt0045152_poster.jpg"
  },
  {
      poster: "https://moviesapi.ir/images/tt1291584_poster.jpg"
  },
]


export default function Genre(){
    const [ genres , setGenres ] = useState([])
    const [movieObjects, setMovieObjects] = useState([]);
    const [loading , setLoading] = useState(false)

    useEffect (() => {
        document.title = "JAMAL TV | GENRES"
    } , [])
    
    useEffect(() => {
        getApi()
    } , [])
    
    async function getApi () {
        try{
            const response = await axios.get("https://moviesapi.ir/api/v1/genres")
            setGenres(response.data);
            const updatedMovieObjects = images.map((image, index) => {
              const {name , id} = response.data[index]
              return {
                  poster: image.poster,
                  name,
                  id
              }
            });
            setLoading(true)
            setMovieObjects(updatedMovieObjects);
          } catch (e) {
            setLoading(true)
            // Handle error
          }
        }


    const App = () => (
        <>
          {movieObjects.map((genre) => (
              <Col className={styles.column} key={genre.id} xs={{ span: 24 }} sm={12} md={8} lg={{ span: 6 }}>
                <Link to = {`/genre/${genre.id}`}>
                  <div className={styles.contentWrapper}>
                    <div className={styles.imageWrapper}>
                        <img src={genre.poster} alt={genre.title} />
                    </div>
                    <div className={styles.textWrapper}>
                        <h2 >{genre.name}</h2>
                    </div>
                    </div>
                </Link>
              </Col>
          ))}
        </>
      );


      function renderFarm() {
        return (
          <Row gutter={[20 , 24]}>
            <App/>
          </Row>
        );
      }

      return (
        <motion.div
        className="home"
        // style={back}
        initial={{ width: 0 }}
        animate={{ width : "100% "}}
        exit={{ x: window.innerWidth , transition : {duration : 0.1}}}
    >
        {
            !loading ? <LoadingScreen/> :
        <div className={styles.genrePage}>
          <div className="container">
                  {renderFarm()}
          </div>
        </div>
        }
        </motion.div>
      )
}