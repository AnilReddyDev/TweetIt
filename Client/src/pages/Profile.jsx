import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Tweetcard from '../component/Tweetcard';

export default function Profile() {
    const [userProfile, setUserProfile] = useState();
    const [selfTweetList, setSelfTweetList] = useState([]);

    const getUserProfile = async () => {
        try {
            const profile = await axios.get("/api/user/profile");
            console.log(profile.data)
            setUserProfile(profile.data)
        } catch (err) {
            console.log("unable to fetch data from profile", err)
        }
    }
    const getSelfTweets = async () => {
        try {
            const selfTweets = await axios.get(`/api/tweet/${userProfile._id}`)
            console.log(selfTweets.data)
            setSelfTweetList(selfTweets.data)
        } catch (err) {
            console.log("unable to fetch data from self tweets", err)
        }
    }

    useEffect(() => {
        getUserProfile();
    }, []);

    useEffect(() => {
        if (userProfile) {
            getSelfTweets();
        }
    }, [userProfile]); 

    return (
        <>
            <div className='w-full min-h-screen bg-black flex'>
                <div className='leftCon w-w25 border-bw1 border-hash'>
                    <button onClick={getUserProfile} className=' w-44 h-14 bg-red-600 text-white text-2xl font-medium text-center rounded-md'>Get user profile</button>
                    <button onClick={getSelfTweets} className=' w-44 h-14 bg-red-600 text-white text-2xl font-medium text-center rounded-md'>Get self tweets</button>
                </div>

                <div className='middleCon w-w45 pb-10 '>
                    {userProfile && (<div className="text-white profileiscription w-full mt-10  h-auto pb-10 border-y-bw1 border-hash">
                        <img src={userProfile.usercoverimg} alt="coverimg" className='bgImg relative w-full h-52' />
                        <img src={userProfile.userimg} alt="profileimg" className=' w-24 h-24 rounded-full relative left-5 bottom-10' />
                        <div className='text-xl relative left-5'>
                            <h1 className='font-semibold'>{userProfile.username}</h1>
                            <p>{userProfile.userbio}</p>
                        </div>
                    </div>

                    )}
                    {selfTweetList && (<div>
                        {selfTweetList.map((item) => {
                            return <Tweetcard key={item.id} contentpro={item} />;
                        })}
                    </div>)}
                </div>

                <div className='rightCon w-w30 border-bw1 border-hash'></div>
            </div>
        </>
    )
}
