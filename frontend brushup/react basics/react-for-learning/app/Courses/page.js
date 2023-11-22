"use client"
import axios from 'axios'
import React, { useState } from 'react'

const cources = () => {
  const [ Images,setImages] = useState([])
  const getImages = async ()=>{
    try{
    const response = await axios.get("https://picsum.photos/v2/list");
  const data = response.data;
  setImages(data);}
    catch (error){
      console.log("error");
    } 

  }
  return (
    <div>
      <button onClick={getImages} className='px-5 py-3 bg-green-800 text-white font-bold'>get image</button>
      <div className='p-10'>
         {Images.map((elem,i)=>{
            // return <h1 key={i}>{elem.author}</h1>
            return <img
            key={i}
            src={elem.download_url}
            width={300}
            height={300}
            className='m-10 rounded inline-block'
             />
         })}
      </div>
    </div>
  );
};

export default cources
