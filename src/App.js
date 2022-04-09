
import React, { Component } from "react";
import NavBar from "./navbar";
import AddMember from "./addFamilyMember";
class App extends Component {
  state = {
    listInfo: [
      { name: "Ashar", age: 26, id: 1 },
      { name: "Ghala", age: 6, id: 2 },
      { name: "Tartel", age: 12, id: 3 },
    ],
  }

  handleAddFamilyMember = (familyMember) => {
    let listInfo = [
      ...this.state.listInfo,
      { ...familyMember, id: Math.random() },
    ];
    this.setState({
      listInfo: listInfo,
    });
  };
  handleDeleteMember = (id) => {
    let newFamilyList = this.state.listInfo.filter(
      member => member.id !== id
    );
    this.setState({
      listInfo: newFamilyList,
    });
  };
  render() {
    return (
      <>
        <h1>family's Member {this.state.name}</h1>
        <NavBar
          handleDeleteMember={this.handleDeleteMember}
          listInfo={this.state.listInfo}
        />
        <AddMember handleAddFamilyMember={this.handleAddFamilyMember} />
        <div className="shopping-list"></div>
      </>
    );
  }
}
export default App;
