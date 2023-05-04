import React from "react";
export const formatText = (text) => {
  const formattedText = text.split(" ").map((x, i) =>
    x.startsWith("http") ? (
      <a key={i} href={x}>
        {x}
      </a>
    ) : (
      <span key={i}> {x} </span>
    )
  );
  return formattedText;
};
