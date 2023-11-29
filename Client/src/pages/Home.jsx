import React, { useState,useEffect } from 'react';
import TweetPost from '../component/TweetPost';
import Tweetcard from '../component/Tweetcard';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const [dataList, setDataList] = useState([]);
    const [cookies, setCookie, removeCookie] = useCookies(['token']);
    const navigate = useNavigate();
    useEffect(() => {
     getData();
      // Function to check if a specific cookie exists by name
    const cookieExists = (name) => {
        return document.cookie.split(';').some((cookie) => {
          return cookie.trim().startsWith(`${name}=`);
        });
      };
  
      const isTokenAvailable = cookieExists('token');
      
      if (!isTokenAvailable) {
        navigate('/')
      } 
    }, [])
    
    const getData = async () => {
        try {
            const res = await axios.get("/api/tweet");
            setDataList(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    // Function to shuffle array randomly (Fisher-Yates shuffle algorithm)
    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    // Create a shuffled copy of dataList
    const shuffledDataList = shuffleArray([...dataList]);

    return (
        <div className='w-full min-h-screen bg-black flex'>
            <div className='leftCon hidden sm:block sm:w-w25 sm:border-bw1 sm:border-hash'>
                {/* <button onClick={getData} className='py-4 px-2 text-white bg-red-700 rounded-md font-semibold'>
                    Get data
                </button> */}
            </div>

            <div className='middleCon w-full sm:w-w45 sm:pb-10'>
                <TweetPost />
                {shuffledDataList.map((item) => {
                    return <Tweetcard key={item._id} contentpro={item} />;
                })}
            </div>

            <div className='rightCon hidden sm:block sm:w-w30 sm:border-bw1 sm:border-hash'></div>
        </div>
    );
}
