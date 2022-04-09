import React, { Component } from "react";
import styles from './addFamilyMember.module.css'
class AddMember extends Component {
  state = {
    name: null,
    age: null,
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,

    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.handleAddFamilyMember(this.state);
    e.target.reset()
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={styles.addForm}>
      <label htmlFor="name">member name: </label>
        <input type="text" id="name" onChange={this.handleChange} />
        <label htmlFor="number">membe age :</label>
        <input type="number" id="age" onChange={this.handleChange} />
        <button>Submit</button>
      </form>
    );
  }
}

export default AddMember;
