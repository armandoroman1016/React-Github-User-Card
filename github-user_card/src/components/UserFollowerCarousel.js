import React from "react";
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from "reactstrap";
import UserProfileCard from "./UserProfileCard";


class FollowersCarousel extends React.Component {
    


    render() {
        return (
            <div>
            {this.props.userFollowers.map( follower => {
                console.log(follower)
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


  

