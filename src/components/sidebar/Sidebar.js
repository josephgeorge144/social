import React from 'react'
import './sidebar.css'
import RssFeedIcon from '@mui/icons-material/RssFeed';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import CoronavirusIcon from '@mui/icons-material/Coronavirus';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

export default function Sidebar() {
  return (
    <div className='sidebar'>
     <div className="sidebarWrapper">
        <ul className="sidebarList">
            <li className="sidebarListItem">
                <RssFeedIcon className='sidebarIcon'/>
                <span className="sidebarListItemText">Feed</span>

            </li>
            
            <li className="sidebarListItem">
                <MovieCreationIcon className='sidebarIcon'/>
                <span className="sidebarListItemText">Movie</span>

            </li>

            <li className="sidebarListItem">
                <CoronavirusIcon className='sidebarIcon'/>
                <span className="sidebarListItemText">Covid</span>

            </li>
            <li className="sidebarListItem">
                <ChatBubbleIcon  className='sidebarIcon'/>
                <span className="sidebarListItemText">Chat</span>

            </li>
            <li className="sidebarListItem">
                <RssFeedIcon className='sidebarIcon'/>
                <span className="sidebarListItemText">Feed</span>

            </li>
            
            <li className="sidebarListItem">
                <MovieCreationIcon className='sidebarIcon'/>
                <span className="sidebarListItemText">Movie</span>

            </li>

            <li className="sidebarListItem">
                <CoronavirusIcon className='sidebarIcon'/>
                <span className="sidebarListItemText">Covid</span>

            </li>
            <li className="sidebarListItem">
                <ChatBubbleIcon  className='sidebarIcon'/>
                <span className="sidebarListItemText">Chat</span>

            </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className='sidebarHr'></hr>

        <ul className="sidebarFriendList">

            <li className="sidebarFriend">
            <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
             <span className="sidebarFriends">Joseph</span>
            </li>

            <li className="sidebarFriend">
            <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
             <span className="sidebarFriends">eph</span>
            </li>
            <li className="sidebarFriend">
            <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
             <span className="sidebarFriends">Jose</span>
            </li>
            <li className="sidebarFriend">
            <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
             <span className="sidebarFriends">Joseph</span>
            </li>

            <li className="sidebarFriend">
            <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
             <span className="sidebarFriends">eph</span>
            </li>
            <li className="sidebarFriend">
            <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
             <span className="sidebarFriends">Jose</span>
            </li>
            <li className="sidebarFriend">
            <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
             <span className="sidebarFriends">Joseph</span>
            </li>

            <li className="sidebarFriend">
            <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
             <span className="sidebarFriends">eph</span>
            </li>
            <li className="sidebarFriend">
            <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
             <span className="sidebarFriends">Jose</span>
            </li>
            <li className="sidebarFriend">
            <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
             <span className="sidebarFriends">Joseph</span>
            </li>

            <li className="sidebarFriend">
            <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
             <span className="sidebarFriends">eph</span>
            </li>
            <li className="sidebarFriend">
            <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
             <span className="sidebarFriends">Jose</span>
            </li>
          

       

        </ul>


     
     </div>
    </div>
  )
}
