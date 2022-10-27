import "./App.css";

import Pic from "./tools/pic.jpg";
import Zuri from "./tools/zuri.svg";
import IFG from "./tools/i4g.svg";
import Share from "./tools/share.svg";
import ShareMobile from "./tools/share-mobile.svg";


function App() {

  return (
    <section className="App">
      <div className="profile-section">
        <div className="img">
          <img src={Pic} className="App-logo" alt="logo" id="profile_img" />
        </div>
        <div className="share">
    
        <img src={Share} alt="share-icon" className="share-icon" />
          <img src={ShareMobile} alt="share-mobile" className="share-mobile" />
        </div>{" "}
        
      </div>
      <h2>Wonuola Alonge</h2>
      <div className="links">
        <a href="https://twitter.com/Wonuola_w" id="Twitter">
          Twitter
        </a>
        <a href="https://training.zuri.team/" id="btn-zuri">
          Zuri Team
        </a>
        <a href="http://books.zuri.team" id="books">
          Zuri books
        </a>
        <a
          href="https://books.zuri.team/python-for-beginners?ref_id=<Wonuola>"
          id="book__python"
        >
          Python Books
        </a>
        <a href="https://background.zuri.team" id="pitch">
          Background Check for Coders
        </a>
        <a href="https://books.zuri.team/design-rules" id="book__design">
          Design Books
        </a>
      </div>

      <div className="icons">
        <a href="/">
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
    </section>
  );
}

export default App;
