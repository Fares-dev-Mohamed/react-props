import React from "react";
import PropTypes from 'prop-types';
const profile = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center"
      }}
    >
      <img src={props.img} alt="error"style={{ width: "300px", height: "300px",borderRadius: "25%"}}/>
      <h2 style={{ color: "RED" }}>{props.fullName}</h2>
      <p>Profession : {props.profession}</p>
    </div>
  );
};
profile.defaultProps = {
  img :'failed to load' , fullName :'failed to load', profession:'failed to load'
}
profile.propTypes = {
  fullName : PropTypes.string,
  profession : PropTypes.string
}
export default profile;