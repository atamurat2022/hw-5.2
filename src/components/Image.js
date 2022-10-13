import React from "react";

export default function Image(props) {
  return (
    <>
      <img
        src={props.img.data.author.avatarUrl}
        alt={props.img.data.author.avatarUrl}
      />
      <h3> {props.img.data.author.name} </h3>
    </>
  );
}
