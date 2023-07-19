import React from 'react'
import {MoreHorizontal, Heart ,Repeat, Send, MessageCircle} from "react-feather"

function Thread({thead}) {
  return (
    <div className='flex   p-4'>
        <img
          className='w-10 h-10 rounded-full object-cover'
          src="https://pbs.twimg.com/profile_images/1642199158684516354/QeFISG8w_400x400.jpg" />
          <div className='w-full px-2 pb-4 border-b border-[rgba(49,49,50,1)]'>
            {/* header */}
          <div className='flex justify-between gap-2'>
               <strong>james</strong>

            <div className='flex justify-between gap-2'>
                <p className='text-[rgba(97.97,97,1)]'>3 hrs ago</p>
                <MoreHorizontal/>
            </div>
          </div>
      {/* trads body */}
      <div className='py-4'>
        <span>And the reach of hate speech on Twitter continues to represent an extremely small fraction of the overall conversation.</span>
      </div>

      <div className='flex gap-4 py-4' >
        <Heart size={(22)}/>
        <Repeat size={(22)}/>
        <Send size={(22)}/>
        <MessageCircle size={(22)}/>
      </div>
      <div className='flex gap-4'>
        <p className='text-[rgba(97.97,97,1)]'>Replies 16</p>
        <p></p>
        <p className='text-[rgba(97.97,97,1)]'>likes 87</p>
      </div>
          </div>
      </div>
  )
}

export default Thread
