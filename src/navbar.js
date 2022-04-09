import React from "react";
const NavBar = (props) => {
  const { listInfo, handleDeleteMember } = props;
  const asharsFamile = listInfo.map((info, index) => (
    <div key={index}>
      <p>Name :{info.name}</p>
      <p> Age : {info.age}</p>
      <button
        onClick={() => {
          handleDeleteMember(info.id);
        }}
      >x
      </button>
    </div>
  ));
  return <>{asharsFamile}</>;
};

export default NavBar;
