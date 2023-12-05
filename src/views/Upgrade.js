
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Upgrade() {
const navigate = useNavigate();

useEffect(()=>{
setTimeout(() => {
  navigate('/');
}, 1500);
})

  return (
    <>
      <div className="content d-flex align-items-center justify-content-center">
    <h1>Coming Soon 😊</h1>
      </div>
    </>
  );
}

export default Upgrade;
