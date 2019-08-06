import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

class UserProfileCard extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <Card style={{ width: "15rem" }}>
          <Card.Img variant="top" src={this.props.avatar_url}  style = {{width: '100%'}}/>
          <Card.Body>
            <Card.Title className = 'user-details name'>{this.props.name}</Card.Title>
            <Card.Title className = 'user-details name'>Location : {this.props.location}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush user-details">
            <ListGroupItem>Github Handle : {this.props.login}</ListGroupItem>
            <ListGroupItem>Followers : {this.props.followers}</ListGroupItem>
            <ListGroupItem>Following : {this.props.following}</ListGroupItem>
            <ListGroupItem> Bio : {this.props.bio}</ListGroupItem>
            <ListGroupItem>Contact : {this.props.email}</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">View This User's Info</Card.Link>
            <Card.Link href= {this.props.html_url} >Visit Github Account</Card.Link>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default UserProfileCard;
