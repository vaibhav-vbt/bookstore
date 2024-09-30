import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import Cards from './Cards';
import axios from "axios";

function Course() {
  const [book, setBook] = useState([]);
  useEffect(()=>{
    const getBook = async ()=>{
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log("Error :", error);
      }
    };
    getBook();
  },[]);
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
      <div className='mt-28 items-center justify-center text-center'>
        <h1 className='text-2xl md:text-4xl'>We are delighted to ave you <span className='text-pink-500'>here! :)</span></h1>
        <p className='mt-12'>When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <Link to='/'>
          <button className='bg-pink-500 px-4 py-2 rounded text-white mt-6 hover:bg-pink-800 duration-300'>Back</button>
        </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
          {book.map((item) =>(
            <Cards key ={item.id} item={item}/>
          ))}
          
          
        </div>
      </div>
    </>
  )
}

export default Course
