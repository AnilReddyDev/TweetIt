import React, { useState,useEffect } from 'react';
import TweetPost from '../component/TweetPost';
import Tweetcard from '../component/Tweetcard';
import axios from 'axios';

export default function Home() {
    const [dataList, setDataList] = useState([]);

    useEffect(() => {
     getData();
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
            <div className='leftCon w-w25 border-bw1 border-hash'>
                <button onClick={getData} className='py-4 px-2 text-white bg-red-700 rounded-md font-semibold'>
                    Get data
                </button>
            </div>

            <div className='middleCon w-w45 pb-10'>
                <TweetPost />
                {shuffledDataList.map((item) => {
                    return <Tweetcard key={item.id} contentpro={item} />;
                })}
            </div>

            <div className='rightCon w-w30 border-bw1 border-hash'></div>
        </div>
    );
}
