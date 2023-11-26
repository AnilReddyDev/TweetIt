import React from 'react'

export default function TweetPost() {
    return (
        <div className="inputcon py-5 pl-4 pr-2  border-y-bw1 border-hash ">
            <div className='flex gap-3'>
                <img src="https://anilreddydev.github.io/twitter_clone_2023/img/anilprofile.jpg" alt="img" className='w-10 h-10 rounded-full' />
                <input type="text" placeholder='What is happening?!' name="tweet" id="tweet" className=' outline-none bg-transparent font-normal text-xl text-white w-full' />
            </div>
            <div className=' h-h05px w-10/12  ml-12 mt-5 bg-hash'></div>
            <div className=' w-10/12 ml-12 mt-3 flex justify-between'>
                <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-9 text-blue">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
                <button className='px-4 py-1 bg-blue text-white  font-medium text-md rounded-full'>Tweet</button>
            </div>

        </div>
    )
}
