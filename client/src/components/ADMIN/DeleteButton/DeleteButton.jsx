import React from "react";
import "./DeleteButton.css";
import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
class DeleteButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      children: false,
    };
  }
  showChildren() {
    if (!this.state.children) {
      $("#deleteAccountItem").show(500);
      $("#deleteCohortItem").show(500);
      this.setState({ children: true });
    } else {
      $("#deleteAccountItem").hide(500);
      $("#deleteCohortItem").hide(500);
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
              id="deleteButton"
              onClick={this.showChildren.bind(this)}
            >
              Delete
            </Button>
            <ul>
              <li id="deleteAccountItem">
                <Button variant="light" id="deleteAccount">
                  Delete Account
                </Button>
              </li>
              <li id="deleteCohortItem">
                <Button variant="light" id="DeleteCohort">
                  Delete Cohort
                </Button>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}
export default DeleteButton;
