import React from 'react';
import axios from 'axios'
import './App.css';
import UserProfileCard from './components/UserProfileCard'
import FollowersCarousel from './components/UserFollowerCarousel'

class App extends React.Component{

  constructor(){

    super();

    this.state = {
      userInfo : {},
      userFollowers : [],
      usableFollowers : []
    }

  }

  componentDidMount(){
    axios
      .get('https://api.github.com/users/armandoroman1016')

      .then( userData => {

        this.setState({ userInfo : userData.data })

      })

      .then(  () => {

        axios.get('https://api.github.com/users/armandoroman1016/followers')

          .then( followerData => {

            this.setState({ userFollowers : followerData.data})

          })

        })

      .catch( err => {

        console.log(err)

      })
  }

  componentDidUpdate(prevProps, prevState){

    if(prevState.userInfo !== this.state.userInfo || prevState.userFollowers !== this.state.userFollowers){
      
      console.log('component did update', this.state.userInfo, this.state.userFollowers)

        {this.state.userFollowers.map( follower => {

          axios
            .get(`https://api.github.com/users/${follower.login}`)
            .then ( res => {
              this.setState({usableFollowers : [...this.state.usableFollowers, res.data]})
              console.log(this.state.usableFollowers)
            })
            .catch(err => {
              console.log(err)
            })
        })}
      
    }

  }


  render(){
    return(
      <div>
        <header >
          <h1> Github User Info </h1>
          <UserProfileCard 
            name = {this.state.userInfo.name}
            avatar_url = {this.state.userInfo.avatar_url}
            location = {this.state.userInfo.location}
            login = {this.state.userInfo.login}
            followers = {this.state.userInfo.followers}
            following = {this.state.userInfo.following}
            bio = {this.state.userInfo.bio} 
            email = {this.state.userInfo.email} 
            html_url = {this.state.userInfo.html_url} />
          </header>
          <FollowersCarousel usableFollowers = {this.state.usableFollowers} /> 
      </div>
    )
  }

}

export default App;
