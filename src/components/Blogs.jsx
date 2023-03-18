import React from 'react'
import {Link,} from "react-router-dom";
import '../index.css';

const Blogs = (data) => {
    const newTo = {
        pathname:"/"+data.data.Filename
    }
  return (
    <Link to={newTo} className = "textnone">
    <div className="" >
        <div className= "blogs">
            <strong className="title-desc">{data.data.Title}</strong>
            <p className="title-desc">
                {data.data.Description}
            </p>
            <hr></hr>
        </div>
        
    </div>
    </Link>
  )
}

export default Blogs