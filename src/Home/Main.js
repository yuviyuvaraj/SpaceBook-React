import React from "react";
import "./main.css"
import { MdMoreVert,MdOutlineLocationOn,MdRssFeed,MdOutlineChat,MdOutlineVideoSettings,MdWorkOutline,MdBookmarks,MdQuestionMark,MdOutlineEvent,MdGroups2,MdOutlinePhotoSizeSelectActual } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import { IoPricetagsOutline } from "react-icons/io5";
import { BsEmojiSmile } from "react-icons/bs";
function Main() {
  return(
    <>
     <div className="Mainsection" >
        <div className="leftbar" id="main">
            <div className="leftoptions">
            <p><span><MdRssFeed/></span> Feed</p>
            </div>
            <div className="leftoptions">
              <p><span><MdOutlineChat/></span> Chat</p>
            </div>
            <div className="leftoptions">
              <p><span><MdOutlineVideoSettings/></span> Videos</p>
            </div>
            <div className="leftoptions">
              <p><span><MdGroups2/></span> Groups</p>
            </div>
            <div className="leftoptions">
              <p><span><MdBookmarks/></span> Bookmarks</p>
            </div>
            <div className="leftoptions">
              <p><span><MdQuestionMark/></span> Questions</p>
            </div>
            <div className="leftoptions">
              <p><span><MdWorkOutline/></span> Jobs</p>
            </div>
            <div className="leftoptions">
              <p><span><MdOutlineEvent/></span> Events</p>
            </div>
            <div className="leftoptions">
              <p><span><GiGraduateCap/></span> Courses</p>
            </div>
            <div className="leftoptions">
              <p className="more"><strong>Show More</strong></p>
            </div>
            <hr/>
            <div className="friends">
            <span><img src="MS-Dhoni.jpg"/></span>
              <p>MS Dhoni</p>
            </div><br/>
            <div className="friends">
            <span><img src="rohit.jpg" /></span>
              <p>Rohit Sharma</p>
            </div><br/>
            <div className="friends">
            <span><img src="Sachin Tendulkar.jpg" /></span>
              <p>Sachin Tendulkar</p>
            </div><br/>
            <div className="friends">
            <span><img src="Suresh-Raina.jpg" /></span>
              <p>Suresh Raina</p>
            </div><br/>
            <div className="friends">
            <span><img src="hardik pandya.jpg" /></span>
              <p>Hardik Pandya</p>
            </div><br/>  
        </div>
       <div className="centerbar" id="main">
            <div className="postbox">
               <div className="throughts">
                  <img src="Profile.jpg"/>
                  <input type="text" placeholder="what's in your main Virat"/>
               </div>
               <hr/>
               <div className="postoptions">
                     <div>
                       <p><MdOutlinePhotoSizeSelectActual/> Photo/Video</p>
                     </div>
                     <div>
                       <p><IoPricetagsOutline/> Tag</p>
                     </div>
                     <div>
                       <p><MdOutlineLocationOn/> Locations</p>
                     </div>
                     <div>
                       <p><BsEmojiSmile/> Feeling</p>
                     </div>
                     <div>
                       <button> Share </button>
                     </div>
               </div>
            </div>
            <div>
              <div className="newsfeeds">
                 <div className="info">
                   <div><img src="Profile.jpg"/></div>
                   <div><p><strong>Virat Kolhi </strong></p></div>
                   <div><p>10 mins ago</p></div>
                   <div className="moreicon"><p><MdMoreVert/></p></div>
                 </div>
                 <div className="feeds">
                   <p>The only thing we have is the MONENT</p>
                   <img src="Post1.jpg"/>
                 </div>
                 <div className="likes">
                   <div><img src="heart.png"/></div>
                   <div><img src="thumb-up.png"/></div>
                   <div><p>79834 people liked it</p></div>
                   <div className="comments"><p>906 comments</p></div>
                 </div>
              </div>

              <div className="newsfeeds">
                 <div className="info">
                   <div><img src="rohit.jpg"/></div>
                   <div><p><strong>Rohit Sharma </strong></p></div>
                   <div><p>1 day ago</p></div>
                   <div className="moreicon"><p><MdMoreVert/></p></div>
                 </div>
                 <div className="feeds">
                   <p> Again we are the Champions</p>
                   <img src="rohit-sharma-ipl.jpg"/>
                 </div>
                 <div className="likes">
                   <div><img src="heart.png"/></div>
                   <div><img src="thumb-up.png"/></div>
                   <div><p>79834 people liked it</p></div>
                   <div className="comments"><p>906 comments</p></div>
                 </div>
              </div>
            </div>
       </div>
       <div className="rightbar" id="main">
                 <div className="ads">
                   <div className="Birthday">
                     <div><img src="gift.png" className="ad"/></div>
                     <div className="birthdaynotification"><p><strong>MS Dhoni</strong> and <strong>2 others Friends</strong> have their birthday today</p></div>
                  </div>
                   <img src="ad1.jpg"/>
                 </div>
                 <div className="chat">
                 <div ><center><h1> Chats</h1></center></div>
                 <div className="Chats">
                      <div><img src="MS-Dhoni.jpg"/></div>
                      <div>
                      <div><h4>MS Dhoni</h4></div>
                      <div>how is the pratice ?</div>
                      </div>
                 </div>
                 <div className="Chats">
                      <div><img src="Suresh-Raina.jpg"/></div>
                      <div>
                      <div><h4>Suresh-Raina</h4></div>
                      <div>Good Match</div>
                      </div>
                 </div>
                 <div className="Chats">
                      <div><img src="hardik pandya.jpg"/></div>
                      <div>
                      <div><h4>hardik pandya</h4></div>
                      <div>Congrats</div>
                      </div>
                 </div>
                 <div className="Chats">
                      <div><img src="Sachin Tendulkar.jpg"/></div>
                      <div>
                      <div><h4>Sachin Tendulkar</h4></div>
                      <div>Doing Good</div>
                      </div>
                 </div>
                 <div className="Chats">
                      <div><img src="rohit.jpg"/></div>
                      <div>
                      <div><h4>Yuvaraj Singh</h4></div>
                      <div>Doing Good</div>
                      </div>
                 </div>
                 </div>
       </div>
     </div>
    </>
  )
};
export default Main;