import React from "react";

import divider from "./index.module.css";
import { Link } from "react-router-dom";

export default function Divider(props) {
  return (
    <div className={divider.divider}>
      <div className={divider.container}>
        <hr className={divider[props.state]} />
        <div className={divider.content}>
          <h3 className={divider.title}>{props.name}</h3>
          <Link className={`${divider.link} ${divider[props.linkState]}`} to={props.link}>
            see more &rsaquo;
          </Link>
        </div>
      </div>
    </div>
  );
}