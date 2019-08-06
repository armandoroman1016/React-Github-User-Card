import React from "react";
import UserProfileCard from "./UserProfileCard";


class FollowersCarousel extends React.Component {
    render() {
        return (
            <div className= 'followers'>
            <h1>{this.props.userName}'s Followers</h1>
            <div className = 'followers-container'>
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
                        key = {Date.now() * Math.random()}
                    />
                )
                })}
                </div>
            </div>
        )
    }
}

export default FollowersCarousel;


  

