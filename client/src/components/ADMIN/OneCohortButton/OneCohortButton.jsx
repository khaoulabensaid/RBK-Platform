import React from "react";
import "./OneCohortButton.css";
import Button from "react-bootstrap/Button";
import $ from "jquery";
class OneCohortButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      children: false,
    };
  }
  showChildren() {
    if (!this.state.children) {
      $("#students1").show(500);
      $("#hirs1").show(500);
      this.setState({ children: true });
    } else {
      $("#students1").hide(500);
      $("#hirs1").hide(500);
      this.setState({ children: false });
    }
  }
  render() {
    return (
      <div>
        <ul>
          <li>
            <Button
              variant="light"
              id={`cohort${this.props.id}`}
              onClick={this.showChildren.bind(this)}
            >
              Cohort {this.props.id}
            </Button>

            <ul>
              <li id={`hirs${this.props.id}`}>
                <Button variant="outline-light">HIRs</Button>
              </li>
              <li id={`students${this.props.id}`}>
                <Button variant="outline-light">Students</Button>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}
export default OneCohortButton;
