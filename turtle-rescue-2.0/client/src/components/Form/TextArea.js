import React from "react";

export const TextArea = props =>
  <div className="comments">
    <textarea className="commentSpace" rows="20" {...props} />
  </div>;