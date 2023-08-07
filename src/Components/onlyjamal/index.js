import React from "react";
import { Col, Row } from "antd";
import './index.css';

const movies = [
    {
        poster : 'https://moviesapi.ir/images/tt0120737_poster.jpg' 
    },
    {
        poster : 'https://moviesapi.ir/images/tt0167260_poster.jpg' 
    },
    {
        poster : 'https://moviesapi.ir/images/tt0050083_poster.jpg' 
    },
    {
        poster : 'https://moviesapi.ir/images/tt1375666_poster.jpg' 
    },
    {
        poster : 'https://moviesapi.ir/images/tt0111161_poster.jpg' 
    },
    {
        poster : 'https://moviesapi.ir/images/tt0468569_poster.jpg' 
    },
]

const RenderFarm = () => {
    return movies.map((movie) => {
        return (
            <Col xs={{ span: 8}} sm={6} md={4} lg={{ span: 4 }}>
                <div className="poster-wrapper">
                    <img src={movie.poster}/>
                </div>
            </Col>
        )
    })
}

export default function OnlyOnJamal () {
    return (
        <Row  gutter={[20 , 20]}>
            <RenderFarm/>
        </Row>
    )
}