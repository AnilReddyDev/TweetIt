import axios from 'axios';
import React, { useState } from 'react'

export default function Profile() {
    const [userProfile,setUserProfile] = useState();
    const [selfTweetList,setSelfTweetList] = useState([]);
    const getUserProfile = async ()=>{
        try {
            const profile = await axios.get("/api/user/profile");
            console.log(profile.data)
            setUserProfile(profile.data)
        } catch (err) {
            console.log("unable to fetch data from profile",err)
        }
    }
    const getSelfTweets = async ()=>{
        try {
            const selfTweets = await axios.get(`/api/tweet/${userProfile._id}`)
            console.log(selfTweets.data)
            setSelfTweetList(selfTweets.data)
        } catch (error) {
            console.log("unable to fetch data from self tweets",err)
        }
    }
  return (
    <div className='h-screen w-full bg-black text-white font-semibold text-3xl'>
        Profile
        <button onClick={getUserProfile} className=' w-44 h-14 bg-red-600 text-white text-2xl font-medium text-center rounded-md'>Get user profile</button>
        <button onClick={getSelfTweets} className=' w-44 h-14 bg-red-600 text-white text-2xl font-medium text-center rounded-md'>Get self tweets</button>
        </div>
  )
}
