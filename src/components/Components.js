import React from "react";
import Image from "./Image";
import Text from "./Text";
import "./components.css";
import Date from "./Date";
import ImgBlock from "./ImgBlock";

export default function Components(props) {
  return (
    <div className="wrapper">
      <ImgBlock className="blockForImg">
        <Image img={props} />
      </ImgBlock>
      <ImgBlock className="blockForText">
        <Text text={props} />
        <Date data={props} />
      </ImgBlock>
    </div>
  );
}
