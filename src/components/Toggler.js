import React from "react";

const Toggler = ({ flipped, setFlipped }) => {
  return (
    <div className="font-bungee px-6 pt-3 flex flex-wrap justify-end">
      <div
        className="outline-none hover:bg-orange-200 text-orange-600 inline-flex text-base items-center font-bold px-2 cursor-pointer"
        onClick={() => setFlipped(!flipped)}
      >
        FLIP
      </div>
    </div>
  );
};

export default React.memo(Toggler);
