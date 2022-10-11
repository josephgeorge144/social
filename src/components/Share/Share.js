import React from 'react'
import './share.css'
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Share() {
  return (
    <div className='share'>
        <div className="shareWrapper">
            <div className="shareTop">
                <img className='shareProfileImg' src='/assets/person/1.jpeg' />
                <input placeholder='what do yo feel?' type="text" className="shareInput" /> 
                 
            </div>
          
            <hr className="shareHr" />
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <PermMediaIcon color="secondary" className='ShareIcon'/>
                        <span className='shareOptionText'>Photo</span>
                    </div>

                    <div className="shareOption">
                        <LabelIcon htmlColor='blue' className='ShareIcon'/>
                        <span className='shareOptionText'>Tag</span>
                    </div>
                    <div className="shareOption">
                        <LocationOnIcon className='ShareIcon'/>
                        <span className='shareOptionText'>Location</span>
                    </div>
                    <div className="shareOption">
                        <EmojiEmotionsIcon color="primary"  className='ShareIcon'/>
                        <span className='shareOptionText'>Feelings</span>
                    </div>
                </div>
                <button className="shareButton">Share</button>

            </div>

        </div>

   </div>
  )
}

export default Share