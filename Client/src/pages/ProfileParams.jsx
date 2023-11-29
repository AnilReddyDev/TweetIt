import React,{useState,useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Tweetcard from '../component/Tweetcard';
export default function ProfileParams() {
    const navigate = useNavigate();
    const [userProfile, setUserProfile] = useState();
    const [selfTweetList, setSelfTweetList] = useState([]);
    const {id} = useParams()
    const getUserProfile = async () => {
        try {
            const profile = await axios.get(`/api/user/currentuser/${id}`);
            // console.log(profile.data)
            setUserProfile(profile.data)
        } catch (err) {
            console.log("unable to fetch data from profile", err)
        }
    }
    const getSelfTweets = async () => {
        try {
            const selfTweets = await axios.get(`/api/tweet/${userProfile._id}`)
            // console.log(selfTweets.data)
            setSelfTweetList(selfTweets.data.reverse())
        } catch (err) {
            console.log("unable to fetch data from self tweets", err)
        }
    }

    useEffect(() => {
        getUserProfile();
        const cookieExists = (name) => {
            return document.cookie.split(';').some((cookie) => {
              return cookie.trim().startsWith(`${name}=`);
            });
          };
      
          const isTokenAvailable = cookieExists('token');
          
          if (!isTokenAvailable) {
            navigate('/')
          } 
    }, []);

    useEffect(() => {
        if (userProfile) {
            getSelfTweets();
        }
    }, [userProfile]); 

    return (
        <>
            <div className='w-full min-h-screen bg-black flex'>
                <div className='leftCon hidden sm:block sm:w-w25 sm:border-bw1 sm:border-hash'>
                    {/* <button onClick={getUserProfile} className=' w-44 h-14 bg-red-600 text-white text-2xl font-medium text-center rounded-md'>Get user profile</button>
                    <button onClick={getSelfTweets} className=' w-44 h-14 bg-red-600 text-white text-2xl font-medium text-center rounded-md'>Get self tweets</button> */}
                </div>

                <div className='middleCon w-full sm:w-w45 sm:pb-10 '>
                    {userProfile && (<div className="text-white relative profileiscription w-full mt-2  h-auto pb-5 border-y-bw1 border-hash">
                        <img src={userProfile.usercoverimg} alt="coverimg" className='bgImg relative w-full h-40 sm:h-52' />
                        <img src={userProfile.userimg} alt="profileimg" className=' w-24 h-24 rounded-full absolute left-2 top-28 sm:top-36' />
                        <div className='text-xl relative pt-16 sm:pt-14 left-4'>
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
                        
                <div className='rightCon hidden sm:block sm:w-w30 sm:border-bw1 sm:border-hash'></div>
            </div>
        </>
    )
}