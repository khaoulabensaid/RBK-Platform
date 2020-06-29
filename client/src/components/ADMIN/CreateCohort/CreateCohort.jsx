import React, { Component } from "react";
import "./CreateCohort.css";
class CreateCohort extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: [],
      data: [],
    };
  }
  addNewDataToDataBase(content) {
    fetch("http://localhost:3000/CohortCreation", {
      method: "post",
      body: JSON.stringify(content),
      headers: { "Content-Type": "application/json" },
    }).then((data) => {
      data.json();
    });
  }
  checkforCohort(newCohortNumber) {
    const { data } = this.state;
    for (var i = 0; i < data.length; i++) {
      console.log(data[i].cohortNumber, newCohortNumber);
      if (data[i].cohortNumber == newCohortNumber) {
        alert("you need to enter a different cohort number!!");
      }
    }
  }
  componentDidMount() {
    fetch("http://localhost:3000/CohortData")
      .then((res) => res.json())
      .then((data) => this.setState({ data }))
      //   .then(() => console.log(this.state.data))
      .catch((err) => console.log(err));
  }
  submitNewCohortNumber() {
    const { content } = this.state;
    var number = document.getElementById("CreateCohort").value;
    this.checkforCohort(number);
    // console.log(!isNaN(Number(data)));
    if (number === "" || !isNaN(Number(number)) !== true) {
      alert("you  need to  insert a number !!");
    } else {
      content.push({ cohortNumber: number });
      this.addNewDataToDataBase(content);
      document.getElementById("CreateCohort").value = "";
    }
  }
  render() {
    return (
      <center>
        <div>
          <input id="CreateCohort" placeholder="CohortNumber"></input>
          <br />
          <button onClick={this.submitNewCohortNumber.bind(this)}>
            Create
          </button>
        </div>
      </center>
    );
  }
}
export default CreateCohort;
