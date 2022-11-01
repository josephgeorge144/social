import React, { useState } from "react";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";
import './post.css';
import {Users} from '../../dummyData'

export default function ({post}) {
  const [like, setlike] = useState(post.like)
  const [islike, setislike] = useState(false)
  const newUsers=Users.filter((itm)=>{
    return(
      itm.id===post.id
    )

  })
  const [destructerdfilteredArray]= newUsers
  console.log(destructerdfilteredArray)




  return (
    <div className="post">
      <div className="postWrapper">
        
        <div className="postTop">
          <div className="postTopLeft">
            <img src={destructerdfilteredArray.profilePicture} className="postProfileImg" />
            <span className="postUsername">{destructerdfilteredArray.username}</span>
            <span className="postDate"> {post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVertRoundedIcon />
          </div>
        </div>

        <div className="postCenter">
            <span className="postText">{post.desc?post.desc:""}</span>
            <img src={post.photo} alt="" className="postImg" />
        </div>

        <div className="postBottom">
            <div className="postBottomLeft">
                <img onClick={()=>{
                  setlike(islike?like-1:like+1)
                  setislike(!islike)
                }} src="assets/like.png" alt="" className="likeIcon" />
                <img src="assets/heart.png" alt="" className="likeIcon" />
                <span className="postLikeCounter">{like} people liked it</span>
            </div>
            <div className="postBottomRight">
                <span className="postCommentText">{post.comment} comments</span>

            </div>
        </div>

      </div>
    </div>
  );
}
