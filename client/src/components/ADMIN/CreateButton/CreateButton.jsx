import React from "react";
import "./CreateButton.css";
import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
class CreateButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      children: false,
    };
  }
  showChildren() {
    if (!this.state.children) {
      $("#createAccountItem").show(500);
      $("#createCohortItem").show(500);
      this.setState({ children: true });
    } else {
      $("#createAccountItem").hide(500);
      $("#createCohortItem").hide(500);
      this.setState({ children: false });
    }
  }
  render() {
    return (
      <div>
        <ul>
          <li>
            <Button
              variant="outline-light"
              id="createButton"
              onClick={this.showChildren.bind(this)}
            >
              Create
            </Button>
            <ul>
              <li id="createAccountItem">
                <Button variant="light" id="createAccount">
                  Create Account
                </Button>
              </li>
              <li id="createCohortItem">
                <Button variant="light" id="createCohort">
                  Create Cohort
                </Button>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}
export default CreateButton;
