import React from "react";
import Tilt from "./Tilt";
import Card from "./Card";

const PlayerCard = props => {
  return (
    <Tilt
      className="w-48 h-64"
      options={{ max: 10, speed: 300, scale: 1.05, gyroscope: false }}
    >
      <Card>
        <div key="FRONT" className="bg-orange-500">
          FRONT
        </div>
        <div key="BACK" className="bg-green-800">
          BACK
        </div>
      </Card>
    </Tilt>
  );
};

export default React.memo(PlayerCard);
