import React from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./UserProfile.css";
import $ from "jquery";
import EditProfile from "../EditProfile/EditProfile.jsx";
class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: null,
      image: "./male.jpg",
    };
  }
  editProfile() {
    $("#profilecontainer").css("filter", "blur(8px)");
    $("#profilecontainer").css("-webkit-filter", "blur(8px)");
    $("#myModal").css("display", "block");
    var span = $(".close")[0];
    span.onclick = () => {
      $("#myModal").css("display", "none");
      $("#profilecontainer").css("filter", "");
      $("#profilecontainer").css("-webkit-filter", "");
    };
  }
  render() {
    return (
      <div id="userprofile">
        <div id="profilecontainer">
          <Container>
            <Row>
              <Col className="picture" sm="2">
                <img src={this.state.image}></img>
              </Col>
              <Col className="profile" sm="10">
                <p>FullName: Houssem Guesmi</p>
                <p>Gender: Male</p>
                <p>Cohort: Cohort 1 </p>
                <p> Role: HIR </p>
                <p> E-mail: houssemguesmi14@gmail.com </p>
              </Col>
            </Row>
            <Row>
              <Col className="info" sm="12">
                <div id="infoBox">Infos</div>
                <div id="editBox">
                  <Button
                    onClick={this.editProfile.bind(this)}
                    id="myBtn"
                    variant="outline-danger"
                  >
                    Edit
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div id="extra">
          <div id="myModal" className="modal">
            <div className="modal-content">
              <span className="close">&times;</span>
              <EditProfile fullName={"Houssem Guesmi"} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default UserProfile;
