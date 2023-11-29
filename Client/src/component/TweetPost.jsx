import axios from 'axios';
import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
export default function TweetPost() {
    const navigate = useNavigate();
    const [userProfile, setUserProfile] = useState();
    const [showImUrl,setShowImageUrl] = useState(false);
    const [tweetpost,SetTweetPost] = useState('');    
    const [tweetimg,SetTweetImg] = useState('');    
    const postTheTweet = async (ev) => {
        ev.preventDefault();
        try {
            const response = await axios.post('/api/tweet/',{
                tweetpost,
                tweetimg
            });
            SetTweetImg('');
            SetTweetPost('');
        } catch (err) {
            console.log("Post was unsuccessfull!",err);
        }
    }
    const getUserProfile = async () => {
        try {
            const profile = await axios.get("/api/user/profile");
            setUserProfile(profile.data)
        } catch (err) {
            console.log("unable to fetch data from profile", err)
        }
    }
    useEffect(() => {
        getUserProfile()
    }, [])
    const toggleUrlInput = ()=>{
        setShowImageUrl(!showImUrl);
    }
    const navigateToprofile = ()=>{
        navigate('/profile');
    }
    const tweetSomething = () => {
        alert("input fields are empty! write something !")
    }
    return (
        <div className="inputcon py-5 pl-4 pr-2  border-y-bw1 border-hash ">
            <div className='flex gap-3'>
                {userProfile && <img src={userProfile.userimg} alt="img" className='w-10 cursor-pointer h-10 rounded-full' onClick={navigateToprofile} />}
                <input type="text" placeholder='What is happening?!' value={tweetpost} onChange={(e)=> SetTweetPost(e.target.value)} name="tweet" id="tweet" className=' outline-none bg-transparent font-normal text-xl text-white w-full' />
            </div>
            <div className=' h-h05px w-10/12  ml-12 mt-5 bg-hash'></div>
            <div className='w-10/12 ml-12 mt-3 '>
               {showImUrl &&  <input value={tweetimg} onChange={e => SetTweetImg(e.target.value)} type="text" placeholder='Paste your img url' name="img" className=' outline-none bg-transparent font-normal text-xl text-white w-full'/>}
            </div>
            <div className=' w-10/12 ml-12 mt-3 flex justify-between'>
                <button onClick={toggleUrlInput}><svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-9 text-blue">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg></button>
                { (tweetpost || tweetimg) ? <button className='px-4 py-1 bg-blue text-white  font-medium text-md rounded-full' onClick={postTheTweet}>Tweet</button> :<button onClick={tweetSomething} className='px-4 py-1 bg-lightblue text-white  font-medium text-md rounded-full'>Tweet</button> }
            </div>

        </div>
    )
}
