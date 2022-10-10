import React from "react";
import './topbar.css'
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonIcon from "@mui/icons-material/Person";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
function Topbar() {
  return (
    <div className="topbarConatiner">
      <div className="topbarLeft">
        <span className="logo">JG Venmeli</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <SearchOutlinedIcon className="searchicon" />
          <input type="text" className="searchInput" placeholder="type name or place" />
        </div>
      </div>
      <div className="topbarRight">
      
        <div className="topbarLinksa">
            
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <PersonIcon />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <ChatBubbleIcon />
            <span className="topbarIconBadge">1</span>
          </div>

          <div className="topbarIconItem">
            <NotificationsNoneOutlinedIcon />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
      </div>
    </div>
  );
}

export default Topbar;
