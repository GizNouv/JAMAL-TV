import React from "react";
import { Col, Row } from "antd";
import { Link } from "react-router-dom";

import styles from './index.module.css'

export default function MovieList (props) {


  const App = () => (
    <>
    {props.data.map(movie => (
      <Col className={styles.column} xs={{ span: 8 , offset: -2 }} sm={8} md={6} lg={{ span: 4 }} xl={3}>
            <Link to={`/movies/${movie.id}`}>
              <div className={styles.movieWrapper} key={movie.id}>
                <div className={styles.imageWrapper}>
                  <img style={{ width: '100%' , borderRadius: '10px' }} src={movie.poster} alt={movie.title} />
                  <div className={styles.hoverContent}>
                    <div className={styles.hoverName}><b>{movie.title}</b></div>
                    <div className={styles.movieRate}>IMDB : {movie.imdb_rating}</div>
                    <div className={styles.movieYear}>YEAR : {movie.year}</div>
                    <div className={styles.movieCountry}>COUNTRY : {movie.country}</div>
                  </div>
                </div>
                <h3 className={styles.movieName}>{movie.title}</h3>
              </div>
            </Link>
          </Col>
    ))}
    </>
  );

  return (
    <div className="container">
        <Row gutter={[10 , 40]}>
          <App/>
        </Row>
    </div>
  );

}
