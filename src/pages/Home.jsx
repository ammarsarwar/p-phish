import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Landing page of p-phish wqebsite will go here</h1>
      <button onClick={() => navigate("/root/dashboard")}>
        Go to dashboard
      </button>
    </div>
  );
}

export default Home;
