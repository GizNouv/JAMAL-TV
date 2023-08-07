import Header from "../header"
import Footer from "../footer"
import { Outlet } from "react-router-dom"

export default function Layout(props){
    return (
        <>
            <Header></Header>
            <Outlet/>
            <Footer></Footer>
        </>
    )
}