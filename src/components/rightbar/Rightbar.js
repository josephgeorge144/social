import React from "react";
import "./rightbar.css";

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img src="assets/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Andrew Simponds</b> and <b>Sophia Graces</b> have birthday today
          </span>
        </div>

        <img src="assets/ad.png" className="rightbarAdd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
            <div className="rightbarOnline"></div>
              <img
                src="assets/person/3.jpeg"
                alt=""
                className="rightbarProfileImg"
              />
              
            </div>
            <span className="rightbarUsername">jenns</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
            <div className="rightbarOnline"></div>
              <img
                src="assets/person/3.jpeg"
                alt=""
                className="rightbarProfileImg"
              />
              
            </div>
            <span className="rightbarUsername">jenns</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
            <div className="rightbarOnline"></div>
              <img
                src="assets/person/3.jpeg"
                alt=""
                className="rightbarProfileImg"
              />
              
            </div>
            <span className="rightbarUsername">jenns</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
            <div className="rightbarOnline"></div>
              <img
                src="assets/person/3.jpeg"
                alt=""
                className="rightbarProfileImg"
              />
              
            </div>
            <span className="rightbarUsername">jenns</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
