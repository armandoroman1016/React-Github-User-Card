import React from 'react';
import axios from 'axios'
import './App.css';

class App extends React.Component{

  constructor(){

    super();

    this.state = {
      userInfo : {},
      userFollowers : []
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

    }

  }


  render(){
    return(
      <div>
        <h1> Hello </h1>
      </div>
    )
  }

}

export default App;
