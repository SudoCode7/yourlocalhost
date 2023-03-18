import React,{useEffect,useState} from 'react'
import MarkDown from 'markdown-to-jsx';
import { useParams } from 'react-router-dom';
import "../index.css"


const Blog = () => {
    const [post,setpost] = useState('');
    let{filename} = useParams();
    useEffect(()=>{
      import (`../Markdown/${filename}.md`)
      .then(res=> {
        fetch(res.default)
          .then(res => res.text())
          .then(res => setpost(res))
      })
      .catch(err => console.log(err));
    });
  return (
    <div className='blog-bg'>
      <div className='blog'>
        <a className='back' href='/'>&#60;-</a>
        <MarkDown>
            {post}
        </MarkDown>
      </div>
    </div>
  )
}

export default Blog