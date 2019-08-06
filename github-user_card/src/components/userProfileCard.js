import React from "react";
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";

class UserProfileCard extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={this.props.avatar_url}  style = {{width: '100%'}}/>
          <Card.Body>
            <Card.Title className = 'user-details name'>{this.props.name}</Card.Title>
            <Card.Title className = 'user-details name'>Location : {this.props.location}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush user-details">
            <ListGroupItem>Github Handle : {this.props.login}</ListGroupItem>
            <ListGroupItem>Followers : {this.props.login}</ListGroupItem>
            <ListGroupItem>Following : {this.props.following}</ListGroupItem>
            <ListGroupItem> Bio : {this.props.bio}</ListGroupItem>
            <ListGroupItem>Contact : {this.props.email}</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Button variant = 'info' >View This User's Info</Button>
            <Card.Link href ={this.props.html_url}>
                <Button variant = 'primary'> Visit Github Account </Button>
            </Card.Link>
          </Card.Body>
          </Card>
    );
  }
}

export default UserProfileCard;
