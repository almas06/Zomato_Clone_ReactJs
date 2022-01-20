import React, { useState } from "react";
import "./callToAction.css";

const CallToAction = () => {
  const [radio, setRadio] = useState("email");

  return (
    <div className="call-to-action">
      <div className="call-to-action-wrapper">
        <div className="phone-image">
          <img src="https://b.zmtcdn.com/data/pro/5722d9e687511d79616bcab92470734e1596187147.png" />
        </div>
        <div className="call-to-action-content">
          <h2>Get the Zomato App</h2>
          <p>
            We will send you a link, open it on your phone to download <br />{" "}
            the app
          </p>
          <div className="radio-buttons">
            <form action="/">
              <input type="radio" id="email" name="btn" value="email" checked={radio==="email"} onChange={(e) => {setRadio(e.target.value)}}/>
              <label for="email">Email</label>
              <input type="radio" id="phone" name="btn" value="phone" checked={radio==="phone"} onChange={(e) => {setRadio(e.target.value)}}/>
              <label for="phone">Phone</label>
            </form>
          </div>
          <div className="input-bar">
            {radio == "email" ? <input type="email" placeholder="Email" /> : <input type="phone" placeholder="Phone" /> }
            <button>Share App Link</button>
          </div>
          <p className="download-text">Download app from</p>
          <div className="download-source">
            <img src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png" />
            <img src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png" />
          </div>
        </div>
      </div>
    </div>
  );
};


export default CallToAction;
