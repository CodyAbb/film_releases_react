import React, { Fragment } from "react";
import Release from "./Release";

const ReleaseList = ({ releases }) => {
  const releaseComponents = releases.map(release => {
    return (
      <Release url={release.url} id={release.id}>
        {release.name}
      </Release>
    );
  });

  return <ul>{releaseComponents}</ul>;
};

export default ReleaseList;
