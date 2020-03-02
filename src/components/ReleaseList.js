import React, { Fragment } from "react";
import Release from "./Release";
import "./ReleaseList.css";

const ReleaseList = ({ releases }) => {
  const releaseComponents = releases.map(release => {
    return (
      <Release url={release.url} key={release.id}>
        {release.name}
      </Release>
    );
  });

  return <ul className="release-list">{releaseComponents}</ul>;
};

export default ReleaseList;
