import React, { memo } from "react";

const PureCompo = (props) => {
  return (
    <h2 className="text-center mt-4">{"pure component :" + props.name}</h2>
  );
};
export default memo (PureCompo);
