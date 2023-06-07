import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProgressSpinner } from "primereact/progressspinner";

function DashboardRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/root/dashboard");
    }, 10000);
  });
  const [isLoading, setIsloading] = useState(false);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginTop: 200,
      }}
    >
      {!isLoading ? (
        <>
          <p style={{ marginBottom: "50px", fontSize: "23px" }}>
            Setting up your dashboard
          </p>
          <ProgressSpinner />
        </>
      ) : null}
    </div>
  );
}

export default DashboardRedirect;
