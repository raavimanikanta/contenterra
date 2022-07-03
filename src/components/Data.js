import axios from 'axios';
import React from 'react'
import { useEffect,useState } from 'react';

const Data = () => {
       const [details,setdetails]=useState([]);
        
        useEffect(()=>{
            axios.get("https://www.reddit.com/r/reactjs.json").then(response=>
           {
                setdetails(response.data.data.children);
                
           })
        },[])
       
        console.log(details)
      return (
        <div>
            <div ><p className='header'>React js -Exercise:</p></div>
           {  
          details.map((article, index) => 
           <div className='Card-style' key={index}>
            <div style={{display:"flex"}}>
            <p  className="number">Card:{index+1}</p>
            <p className='article-1'><span className='Heading-style'>Title:</span>{article.data.title}</p>
            </div>
            <p className='article-2'><span className='Heading-style'>Score:</span>{article.data.score}</p>
            <p className='article-3'><span className='Heading-style'>Selftext:</span>{article.data.selftext_html}</p>
            <a href={article.data.url}><p className='article-4'><span className='Heading-style'>URL:</span>{article.data.url}</p></a>
           </div>
        )
         }
      
        </div>
      )
    }
    
    
  

export default Data