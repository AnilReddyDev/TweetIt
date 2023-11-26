import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Tweetcard({ contentpro }) {
    const navigate = useNavigate();
    const { ownerid, tweetpost, tweetimg } = contentpro;
    console.log(tweetimg,"-----")
    const [userDetail, setUserDetail] = useState(null);

    useEffect(() => {
        getUserData();
    }, [ownerid]); // Include ownerid as a dependency for re-fetching data when it changes

    const getUserData = async () => {
        try {
            const userData = await axios.get(`/api/user/currentuser/${ownerid}`);
            setUserDetail(userData.data);
        } catch (err) {
            console.log("Error in Tweetcard while fetching the userdata", err);
        }
    };


    return (
        <>
            {userDetail && ( 
                <div className='flex px-3 text-white  border-y-bw1 border-hash'>
                    <div className="leftcon w-14 py-2">
                        <img src={userDetail.userimg} alt="img" className='w-10 h-10 rounded-full' />
                    </div>
                    <div className="rightcon w-full py-3 pb-5">
                        <h1 className=' font-medium text-lg'>{userDetail.username}</h1>
                        <p className='font-normal'>{tweetpost}</p>
                        {tweetimg && (
                            <img
                                src={tweetimg}
                                alt='post'
                                className='my-2 rounded-xl max-w-w90 min-w-w60'                            />
                        )}
                    </div>
                </div>
            )}
        </>
    );
}
