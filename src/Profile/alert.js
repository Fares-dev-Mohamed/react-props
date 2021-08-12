import React from "react";
import PropTypes from "prop-types";

const ActionLink = () => {
  const HandleName = () => {
    alert("FARES MOHAMED");
  };
  return (
    <button><a href="/" onClick={HandleName} >Click Me Please </a></button>
  );
};
ActionLink.propTypes = {
  HandleName: PropTypes.func,
};

export default ActionLink;
