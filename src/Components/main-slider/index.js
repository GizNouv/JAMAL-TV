import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination , Autoplay } from 'swiper/modules';
import './index.css'
import { MoreDetails } from "../buttons";


export default function GenreSlider() {
  const [combinedData, setCombinedData] = useState([]);

  useEffect(() => {
    getApi();
  }, []);

  async function getApi() {
    try {
      const moviesData = [];

      for (let i = 1; i <= 10; i++) {
        const responseMovie = await axios.get(`https://moviesapi.ir/api/v1/movies/${i}`);
        const { id, title, poster } = responseMovie.data;
        moviesData.push({ id, title, poster });
      }

      const combinedData = await Promise.all(moviesData.map(async (movie) => {
        const responsePlot = await axios.get(`https://moviesapi.ir/api/v1/movies/${movie.id}`);
        const { plot } = responsePlot.data;
        return { id: movie.id, title: movie.title, poster: movie.poster, plot };
      }));

      setCombinedData(combinedData);
    } catch (error) {
      // Handle error
    }
  }

  console.log(combinedData);

  const app = () => {
      return combinedData.map((movie) => {
        return (
          <SwiperSlide key={movie.id}>
            <div className="main-slider-content">
                <img src={movie.poster} alt={`Movie ${movie.id}`} />
                <div className="image-overlayer">
                    <div className="image-overlayer-content">
                        <div className="nameofmovie-slider">
                            {movie.title}
                        </div>
                        <p>{movie.plot}</p>
                        <MoreDetails/>
                    </div>
                </div>
            </div>
          </SwiperSlide>
        );
      });
    };
  
    return (
      <>
        <Swiper 
            pagination={true} 
            modules={[Pagination , Autoplay]}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }} 
            className="mySwiper main-slider-wrapper">
          {app()}
        </Swiper>
      </>
    );


}