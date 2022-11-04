import React from 'react'
import "./App.css";

import Pic from "./tools/pic.jpg";
import Zuri from "./tools/zuri.svg";
import IFG from "./tools/i4g.svg";
import Share from "./tools/share.svg";
import ShareMobile from "./tools/share-mobile.svg";
import Camera from './tools/camera.svg'
import { Link } from "react-router-dom";


function Main() {


  return (
    <div><section className="App">
    <section>
    <div className="profile-section">
         <div className="img">
           <img src={Pic} className="App-logo" alt="logo" id="profile_img" />
           <img src={Camera} className="second-logo" alt="logo" id="second_img" />

         </div>
         <div className="share">
     
       <img src={Share} alt="share-icon" className="share-icon" />
           <img src={ShareMobile} alt="share-mobile" className="share-mobile" />
         </div>{" "}
         
       </div>
       <div className="intro">
         
       <h2>Wonuola Alonge</h2>
     
         {/* <em id="slack"> Slack-username: Wonuola-Alonge</em> */}
       </div>
    </section>
     <section>
     <div className="links">
         <a href="https://twitter.com/Wonuola_w" id="twitter">
           Twitter
         </a>
         <a href="https://training.zuri.team/" id="btn__zuri">
           Zuri Team 
         </a>
         <a href="http://books.zuri.team" id="books">
           Zuri books <em>This is where you find books about design and coding</em>
         </a>
         <a
           href="https://books.zuri.team/python-for-beginners?ref_id=<Wonuola-Alonge>"
           id="book__python"
         >
           Python Books <em>
             This is where you feature the book as if you were selling it
           </em>
         </a>
         <a href="https://background.zuri.team" id="pitch">
           Background Check for Coders <em>
             This is where you pitch a service for doing background checks on coders
           </em>
         </a>
         <a href="https://books.zuri.team/design-rules" id="book__design">
           Design Books <em>This is where you pitch the free design book offered by Zuri.</em>
         </a>
         {/* <a href="/contact" id="contact">Contact me   </a> */}
         <Link to='/contact'>Contact</Link>
       </div>
     </section>
 
       <div className="icons">
         <a href="https://app.slack.com/client/T042F7V19Q8/C041JU70S5U/rimeto_profile/U04915L3P6U">
           <img
             src="https://cdn-icons-png.flaticon.com/128/2111/2111615.png"
             alt="slack"
             id="Slack"
           />
         </a>
         <a href="https://github.com/wonuola-y/">
           <img
             src="https://cdn-icons-png.flaticon.com/128/733/733609.png"
             alt="github"
           />
         </a>
       </div>
 
       <footer>
         <hr />
         <div className="footer">
           <a href="https://training.zuri.team/" className="IFG">
             <img src={IFG} alt="IFG" />
           </a>
           <p>HNG Internship 9 Frontend Task</p>
           <a href="/" className="Zuri">
             <img src={Zuri} alt="zuri" />
           </a>
         </div>
       </footer>
     
     </section></div>
  )
}

export default Main