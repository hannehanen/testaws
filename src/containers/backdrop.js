import React from "react";
import "./backdrop.css"
const backdrop = (props) =>( props.show ? <div className="backdrop" onClick={props.clicked}>{props.children}</div> : null);
export default backdrop;