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
        <div className="absolute w-full h-full shadow-md hover:shadow-lg backface-hidden">
          {children && children["FRONT"]}
        </div>
        <div className="absolute w-full h-full shadow-md hover:shadow-lg backface-hidden rotate-y-half">
          {children && children["BACK"]}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Card);
