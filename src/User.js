import React from "react";

const User = (props) => {
  console.log("prop....", props);
  return (
    <div>
      <h1>{props.data.name} component</h1>
    </div>
  );
};

export default User;
