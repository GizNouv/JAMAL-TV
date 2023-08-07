import React , {useEffect ,useState} from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import styles from './index.module.css'
import { Link, useParams } from "react-router-dom";

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

export default function GenreSlider() {
    const [genres, setGenres] = useState([]);
    const [movieObjects, setMovieObjects] = useState([]);
  
    useEffect(() => {
        getApi();
      }, []);
    
      async function getApi() {
        try {
          const response = await axios.get("https://moviesapi.ir/api/v1/genres");
          setGenres(response.data);
    
          const updatedMovieObjects = images.map((image, index) => {
            const {name , id} = response.data[index]
            return {
                poster: image.poster,
                name,
                id
            }
          });
          setMovieObjects(updatedMovieObjects);
        } catch (e) {
          // Handle error
        }
      }
      
      console.log(movieObjects)

    return (
        <div className="container relative">
            <Swiper
                navigation={true}
                modules={[Navigation]}
                enabled={true}
                centeredSlides={false}
                centeredSlidesBounds={false}
                slidesPerView={3}
                speed={200}
                loop={false}
                spaceBetween={20}
                breakpoints= {{
                    // when window width is >= 320px
                    320: {
                      slidesPerView: 1,
                      spaceBetween: 10
                    },
                    // when window width is >= 480px
                    480: {
                      slidesPerView: 2,
                      spaceBetween: 10
                    },
                    // when window width is >= 640px
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 20
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 20
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                      },
                  }}
                className="mySwiper"
            >
                {movieObjects?.map((genre) => (
                    <SwiperSlide className={styles.sliderItems} key={genre.id}>
                    <Link to={`/genre/${genre.id}`}>
                        <div className={styles.contentWrapper}>
                            <div className={styles.imageWrapper}>
                                <img src={genre.poster} alt={genre.title} />
                            </div>
                            <div className={styles.textWrapper}>
                                <h2 >{genre.name}</h2>
                            </div>
                        </div>
                    </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
