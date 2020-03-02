import React from "react";

const Release = ({ url, children }) => {
  return (
    <li>
      <a href={url}>{children}</a>
    </li>
  );
};

export default Release;
