import React from "react";
import "./CohortsButton.css";
import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import OneCohortButton from "../OneCohortButton/OneCohortButton.jsx";
class CohortsButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      children: false,
    };
  }
  showChildren() {
    if (!this.state.children) {
      $("#cohort1").show(500);

      this.setState({ children: true });
    } else {
      $("#cohort1").hide(500);
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
              id="cohortsButton"
              onClick={this.showChildren.bind(this)}
            >
              Cohorts
            </Button>
            <ul>
              <li>
                <OneCohortButton id={1} />
              </li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}
export default CohortsButton;
