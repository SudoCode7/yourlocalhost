import React from 'react'
import Data from "../List.js" 
import Blogs from "../components/Blogs"
import '../index.css';

const Home = () => {
  return (
    <div>
      <div className = "card">
        
        <h1>
          $ Akshat Jain <span class="cursor">|</span>
        </h1>
        
        <p>Find me online:</p>
    <ul>
      <li>
        <a href="[jakshat70{at}gmail(dot)com]" target="_blank">Gmail</a>
      </li>    
      <li>
        <a href="https://linkedin.com/in/akshat-007-jain/" target="_blank">Linkedin</a>
      </li>
      <li>
        <a href="https://github.com/SudoCode7" target="_blank">Github</a>
      </li>
    </ul>
      </div>
        <div style= {{marginTop: 100}}>
                {Data.map((value, index) => {  
                    return <Blogs data={value} key={value.Title}></Blogs>;
                })}
        </div>
    </div>
  )
}

export default Home