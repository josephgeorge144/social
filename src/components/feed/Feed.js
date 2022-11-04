import React from 'react'
import Share from '../Share/Share'
import './feed.css'
import { Icon ,HomeIcon} from '@mui/material'
import Post from '../post/Post'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
//  import {Posts} from '../../dummyData'


export default function Feed({username}) {
  const [posts, setPosts] = useState([])
 

 
  useEffect(()=>{
    const fetchData=async ()=>{
      const res=username ? await axios.get(`/post/profile/${username}`) : await axios.get('/post/timeline/63600f85c59d2e56cf7a5425')
      setPosts(res.data)

    }
    fetchData()
   
    

  },[username])
  
  return (
    <div className='feed'>
      <div className="feedWrapper">
        <Share/>
        {posts.map((itm)=>{
           return(
            <Post key={itm._id} post={itm}/>
            
           )
        }
        )}
       
        
     


      </div>
      
      </div>
  )
}
