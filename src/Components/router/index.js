import React, { Fragment } from "react";
import { ReactDOM } from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import Layout from "../layout";
import Home from "../../pages/home";
import Movies from "../../pages/movie";
import Series from "../../pages/series";
import Genre from "../../pages/genre";
import ContactUs from "../../pages/contact-us";
import SingleMovie from "../../pages/single-movie";
import Search from "../../pages/search";
import SingleGenre from "../../pages/singleGener";
import SignUp from "../../pages/sing-up";
import AdminPage from "../../pages/adminPage";
import { AnimatePresence } from "framer-motion";
import NotFoundPage from "../../pages/notFound";




export default function SiteRouter (){

 function Animation () {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname} >
        <Route element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/movies" element={<Movies/>}/>
          <Route path="/movies/:id" element={<SingleMovie/>}/>
          <Route path="/search" element={<Search/>}/>
          <Route path="/series" element={<Series/>}/>
          <Route path="/genre" element={<Genre/>}/>
          <Route path="/genre/:genre_id" element={<SingleGenre/>}/>
          <Route path="/contact-us" element={<ContactUs/>}/>
        </Route>
          <Route path="/sign-up" element={<SignUp/>}/>
          <Route path="/admin" element={<AdminPage/>}/>
          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
    </AnimatePresence>
  )
 }

  return (
    <BrowserRouter >
      <Animation/>
    </BrowserRouter>
  )
}