import React from "react";
import styles from './navBar.module.css'
const NavBar = (props) => {
  const { listInfo, handleDeleteMember } = props;
  const asharsFamile = listInfo.map((info, index) => (
    <div key={index} className={styles.memberContiner}>
      <p>Name :{info.name}</p>
      <p> Age : {info.age}</p>
      <button
        onClick={() => {
          handleDeleteMember(info.id);
        }}
        className={styles.deleteButton}
      >x
      </button>
    </div>
  ));
  return <>{asharsFamile}</>;
};

export default NavBar;
