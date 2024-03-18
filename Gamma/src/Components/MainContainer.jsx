import React from "react";
import "../css/mainContainer.css";

function MainContainer() {
  return (
    <>
      <div className="mainContainer">
        <h1 className="heading">
          <span className="headingFirst">A new medium for</span>
          <span className="headingSecond">presenting ideas.</span>
        </h1>
        <h1 className="poweredByAI">Powered by AI.</h1>
        <p className="testContent">
          Just start writing. Beautiful, engaging content with none of the
          formatting and design work.
        </p>

        <button className="signup">Sign up for free</button>
      </div>
    </>
  );
}
export default MainContainer;
