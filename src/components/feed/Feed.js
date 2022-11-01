import React from 'react'
import Share from '../Share/Share'
import './feed.css'
import { Icon ,HomeIcon} from '@mui/material'
import Post from '../post/Post'
import {Posts} from '../../dummyData'


export default function Feed() {
  return (
    <div className='feed'>
      <div className="feedWrapper">
        <Share/>
        {Posts.map((itm)=>{
           return(
            <Post key={itm.id} post={itm}/>
            
           )
        })}
       
        
     


      </div>
      
      </div>
  )
}
