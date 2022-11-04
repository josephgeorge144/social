import React, { useEffect, useState } from "react";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";
import "./post.css";
import axios from "axios";
// import {Users} from '../../dummyData'
import { format } from 'timeago.js';
import { Link } from "react-router-dom";
export default function ({ post }) {
  const [like, setlike] = useState(post.likes.length);
  const [islike, setislike] = useState(false);
  const [users, setUsers] = useState({});


  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/user?userId=${post.userId}`);

      setUsers(res.data);
 
    };
    fetchUser();
  }, [post.userId]);

  

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`/profile/${users.username}`}>  <img
              src={users.profilePicture==="" ? PF+ "/person/"+"/avatar.jpg" : PF + "/person/" + users.profilePicture}
              className="postProfileImg"
            /></Link>
            
            <span className="postUsername">{users.username}</span>
            <span className="postDate"> {format(post.createdAt)}</span>
          </div>
          <div className="postTopRight">
            <MoreVertRoundedIcon />
          </div>
        </div>

        <div className="postCenter">
          <span className="postText">{post.desc ? post.desc : ""}</span>
          <img
            src={PF + post.img}
            alt=""
            className="postImg"
          />
        </div>

        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              onClick={() => {
                setlike(islike ? like - 1 : like + 1);
                setislike(!islike);
              }}
              src={`${PF}/like.png`}
              alt=""
              className="likeIcon"
            />
            <img src={`${PF}/heart.png`} alt="" className="likeIcon" />
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
