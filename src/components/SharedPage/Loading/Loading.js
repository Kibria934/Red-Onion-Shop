import React from "react";
import CircleLoader from "react-spinners/ClipLoader";

const Loading = () => {
  return (
    <div
      style={{
        width: "100%",
        margin: "0 auto",
        display: "flex",
        justifyContent: "center",
        height: "500px",
        alignItems: "center",
      }}
    >
      <CircleLoader
        color="#29cc21"
        cssOverride={{}}
        size={100}
        speedMultiplier={2}
      />
    </div>
  );
};

export default Loading;
