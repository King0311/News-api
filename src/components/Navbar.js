import React from "react";

function Navbar() {
  // const godown=()=>{
  //   window.scroll({
  //     top:10000,
  //     behavior:"smooth"
  //   })
  // }
  return (
    <>
      <div className="maincontainer2">
        <ul className="list">
          <li className="logo">News Api</li>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Login</li>
          <li>Sign-Up</li>
          {/* <li onClick={godown}>Bottom</li> */}
        </ul>
      </div>
    </>
  );
}

export default Navbar;
