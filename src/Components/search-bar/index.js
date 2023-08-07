import { Link } from 'react-router-dom'
import './index.css'
import {SearchOutlined} from "@ant-design/icons"

export default function SearchBar(){
    return(
        <Link className='togel-search' to="/search">
         <SearchOutlined className='search-icon' />
        </Link>
    )
}