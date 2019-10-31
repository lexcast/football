import React, { useState } from "react";

const Card = ({ children }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      onClick={() => setFlipped(!flipped)}
      className="bg-transparent w-full h-full perspective-wide"
    >
      <div
        className={
          "relative w-full h-full style-preserve-3d transition-transform " +
          (flipped ? "rotate-y-half" : "rotate-y-none")
        }
      >
        <div className="absolute w-full h-full backface-hidden shadow hover:shadow-lg rounded-lg overflow-hidden rounded-lg">
          {children && children[0]}
        </div>
        <div className="absolute w-full h-full backface-hidden rotate-y-half shadow hover:shadow-lg rounded-lg overflow-hidden rounded-lg">
          {children && children[1]}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Card);
