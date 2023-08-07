import './index.css';
import axios from "axios";
import { Link } from "react-router-dom";
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import LoadingScreen from '../../Components/loadingScreen';



export default function Series({ children }) {

  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 25;

  useEffect(() => {
    getApi()
  }, [currentPage]);

  const getApi = () => {
    axios
      .get(`https://moviesapi.ir/api/v1/movies?page=${currentPage}`)
      .then((response) => {
        setMovies((prevMovies) => [...prevMovies, ...response.data.data]);
        
      })
      .catch((error) => console.error(error));
  }


  useEffect(() => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  }, [movies, currentPage, totalPages]);

  const popular = movies.filter((movie) => movie.imdb_rating >= 8.8);
  const newRelease = movies.filter((movie) => movie.year >= 2012);

  console.log(popular);

  return (
    <>
      <div className="container relative">
        {/* Place your JSX code here */}
        {children(movies)} {/* Render the child component */}
      </div>
    </>
  );
}

export function App({movies}) {


  return (
    <>
    <Swiper
      navigation={true}
      modules={[Navigation]}
      enabled={true}
      centeredSlides={false}
      centeredSlidesBounds={false}
      slidesPerView={2}
      speed={200}
      loop={false}
      spaceBetween={20}
      breakpoints= {{
        // when window width is >= 320px
        320: {
          slidesPerView: 3,
          spaceBetween: 10
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 3,
          spaceBetween: 10
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 4,
          spaceBetween: 10
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 10
        },
        1024: {
          slidesPerView: 6,
          spaceBetween: 20,
        },
      }}
      className="mySwiper"
    >
      {movies && movies.map((movie) => (
        <SwiperSlide className='slider-items' key={movie.id}>
          <Link to={`/movies/${movie.id}`}>
            <div className='content-wrapper'>
              <img src={movie.poster} alt={movie.title} />
              <h3>{movie.title}</h3>
              <h4>{movie.imdb_rating}</h4>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
    </>
  );
}


