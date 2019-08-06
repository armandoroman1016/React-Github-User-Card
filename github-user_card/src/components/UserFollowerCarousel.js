import React from "react";
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from "reactstrap";

import axios from 'axios'
import UserProfileCard from "./UserProfileCard";


class FollowersCarousel extends React.Component {

    constructor(){
        super()
        this.state = {
        }
    }

    render() {
        return (
            <div>
                {this.props.usableFollowers.map( follower => {
                return (
                    <UserProfileCard
                        name={follower.name}
                        avatar_url={follower.avatar_url}
                        location={follower.location}
                        login={follower.login}
                        followers={follower.followers}
                        following={follower.following}
                        bio={follower.bio}
                        email={follower.email}
                        html_url={follower.html_url}
                    />
                )
                })}
            </div>
        )
    }
}

export default FollowersCarousel;


  

