import React from "react";

export default function Date(props) {
  return <div>{props.data.data.date.toLocaleDateString()}</div>;
}
