import React from "react";

export default function ImgBlock(props) {
  const classes = "imgBlock " + props.className;
  return <div className={classes}>{props.children} </div>;
}
