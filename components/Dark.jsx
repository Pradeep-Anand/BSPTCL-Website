import React from "react";
function Dark() {
  return (
    <div
      id="dark-btn"
      style={{
        position: "fixed",
        left: "calc(-100px + 100vw)",
        top: "calc(10px)",
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        zIndex: 9999,
        boxShadow: "rgba(0, 0, 0, 0.2) 0px 0px 10px",
        transition: "all 0.3s ease-in-out 0s",
        overflow: "hidden",
        color: "white",
      }}
    >
      <button className="dark" id="dark-btn">
      <svg class="dark" id="dark-btn"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        style={{ width: "25px", height: "25px" }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
        />
      </svg>
      </button>
    </div>
  );
}
export default Dark;
