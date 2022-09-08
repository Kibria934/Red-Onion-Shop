import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const CustomLInk = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        style={{
          borderBottom: match ? "2px solid rgb(210, 9, 43)" : "none",
          color: match ? "rgb(210, 9, 43)" : "black",
        }}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
};

export default CustomLInk;
