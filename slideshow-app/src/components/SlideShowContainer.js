import React from "react";
import "h8k-components";
import "../App.css";
import { TITLE } from "../utils/constants";
import Slides from "./Slides";

const SlideShowContainer = () => {
  return (
    <div>
      <h8k-navbar header={TITLE}></h8k-navbar>
      <div className="App">
        <Slides />
      </div>
    </div>
  );
};

export default SlideShowContainer;
