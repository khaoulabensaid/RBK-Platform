import React, { Component } from "react";
import "./CreateAccount.css";
class CreateAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: [],
      data: [],
      CohortNumbers: [],
      UserData: [],
    };
  }

  checkforUser(newFullName) {
    const { data } = this.state;
    for (var i = 0; i < data.length; i++) {
      // console.log(data[i].fullName, newFullName);
      if (data[i].fullName == newFullName) {
        alert("you need to enter a different fullName !!");
      }
    }
  }

  submitNewUser() {
    const { content } = this.state;
    // console.log(content);
    var data1 = document.getElementById("input1").value;
    var data2 = document.getElementById("input2").value;
    var data3 = document.getElementById("input3").value;
    var data4 = document.getElementById("select1").value;
    var data5 = document.getElementById("select2").value;
    this.checkForUserFullName();
    if (
      data1 === "" ||
      data2 === "" ||
      data3 === "" ||
      data4 === "" ||
      data5 === ""
    ) {
      alert("you need to fill the whole form!");
    } else {
      content.push({
        fullName: data1,
        email: data2,
        password: data3,
        role: data4,
        cohort: data5,
      });
      this.addDataToDataBase(content);
      document.getElementById("input1").value = "";
      document.getElementById("input2").value = "";
      document.getElementById("input3").value = "";
      document.getElementById("select1").value = "";
      document.getElementById("select2").value = "";
    }
  }
  checkForUserFullName() {
    const { UserData } = this.state;
    console.log(UserData);
    var input1 = document.getElementById("input1").value;
    for (var i = 0; i < UserData.length; i++) {
      console.log(UserData[i].fullName.toLowerCase(), input1.toLowerCase());
      if (UserData[i].fullName.toLowerCase() === input1.toLowerCase()) {
        alert("insert a new fullName pls!!");
      }
    }
  }
  addDataToDataBase(content) {
    fetch("http://localhost:3000/UserCreation", {
      method: "post",
      body: JSON.stringify(content),
      headers: { "Content-Type": "application/json" },
    })
      .then((data) => {
        return data.json();
      })
      .then(() => console.log("done!!"))
      .catch((err) => console.log(err));
  }

  // getCohorts() {
  //   fetch("http://localhost:3000/CohortData")
  //     .then((res) => res.json())
  //     .then((CohortNumber) => this.setState({ CohortNumber }))
  //     .then(() => console.log(this.state.CohortNumber))
  //     .catch((err) => console.log(err));
  // }
  componentWillMount() {
    fetch("http://localhost:3000/CohortData")
      .then((res) => res.json())
      .then((CohortNumbers) => this.setState({ CohortNumbers }))
      // .then(() => console.log("will", this.state.CohortNumbers))
      .catch((err) => console.log(err));
    fetch("http://localhost:3000/UserData")
      .then((res) => res.json())
      .then((UserData) => this.setState({ UserData }))
      // .then(() => console.log(this.state.data))
      .catch((err) => console.log(err));
  }
  // componentDidMount() {
  //   fetch("http://localhost:3000/UserData")
  //     .then((res) => res.json())
  //     .then((UserData) => this.setState({ UserData }))
  //     // .then(() => console.log(this.state.data))
  //     .catch((err) => console.log(err));
  // }
  render() {
    // console.log(this.state.CohortNumbers);
    return (
      <div className="any">
        <input id="input1" type="text" placeholder="fullName"></input>
        <input id="input2" type="text" placeholder="email"></input>
        <input id="input3" type="text" placeholder="password"></input>
        <select id="select1">
          Role
          <option>HIR </option>
          <option>Student</option>
          <option>Admin</option>
        </select>
        <select id="select2">
          Cohort
          {this.state.CohortNumbers.map((elem, index) => {
            return <option key={index}>{elem.cohortNumber}</option>;
            // console.log(elem);
          })}
        </select>
        <button id="submitButton" onClick={this.submitNewUser.bind(this)}>
          Create
        </button>
      </div>
    );
  }
}
export default CreateAccount;