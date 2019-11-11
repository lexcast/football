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
          "relative w-full h-full style-preserve-3d transition-transform shadow hover:shadow-lg rounded-lg " +
          (flipped ? "rotate-y-half" : "rotate-y-none")
        }
      >
        <div className="absolute w-full h-full rounded-lg overflow-hidden">
          {children[0]}
        </div>
        <div className="absolute w-full h-full rotate-y-half rounded-lg overflow-hidden">
          {children[1]}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Card);
