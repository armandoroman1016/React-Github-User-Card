import React from "react";
import { Jumbotron, Button, Link } from "react-bootstrap";

class UserHeader extends React.Component {

    constructor() {
        super()
    }

    render() {
        return (

            <Jumbotron className = 'header'>
                <div className = 'header-img-container'>
                    <img src = {this.props.avatar_url} />
                </div>
                <div className = 'header-details'>
                    <h2>{this.props.name}'s Github Details</h2>
                    <p>Location : {this.props.location}</p>
                    <p>Github Handle : {this.props.login}</p>
                    <p>Followers : {this.props.followers}</p>
                    <p>Following : {this.props.following}</p>
                    <p>Bio : {this.props.bio}</p>
                    <p>Contact : {this.props.email}</p>
                    <a to = {this.props.html_url}>
                        <Button variant="primary">Visit Github Profile</Button>
                    </a>
                </div>
            </Jumbotron>

        )
    }
}

export default UserHeader