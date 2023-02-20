import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "FullStack Web Developer",
          "JS, PHP, REACT, NODE, LARAVEL AND A LOT MORE",
          "Constantly Learning",
          "Self-Taught",
          
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
