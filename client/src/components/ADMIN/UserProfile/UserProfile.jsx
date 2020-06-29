import React from "react";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
class UserProfile extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <p>User Profile</p>
        <Button variant="primary" disabled>
          <Spinner
            as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true"
          />
          Loading...
        </Button>
      </div>
    );
  }
}
export default UserProfile;
