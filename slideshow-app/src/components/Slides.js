import React from "react";
import { useState } from "react";
import { BUTTON_DATA, SLIDES_DATA } from "../utils/constants";
import Button from "./Button";

function Slides() {
  const [value, setValue] = useState(0);
  const slides = SLIDES_DATA;
  const handleClick = (value) => {
    setValue(value);
  };

  return (
    <div>
      <div id="navigation" className="text-center">
        {BUTTON_DATA.map((buttonData) => (
          <Button
            buttonData={buttonData}
            handleClick={handleClick}
            slides={slides}
            value={value}
          />
        ))}
      </div>
      <div id="slide" className="card text-center">
        <h1 data-testid="title">{slides[value].title}</h1>
        <p data-testid="text">{slides[value].text}</p>
      </div>
    </div>
  );
}

export default Slides;
