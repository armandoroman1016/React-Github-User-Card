import React from 'react';
import axios from 'axios'
import './scss/index.scss'
import FollowersList from './components/UserFollowerList'
import UserHeader from './components/UserHeader'

import { Form , Button} from 'react-bootstrap'

class App extends React.Component{

  constructor(){

    super();

    this.state = {
      currentUser : 'armandoroman1016',
      userInfo : {},
      userFollowers : [],
      usableFollowers : [],
      inputValue : ''
    }

  }

  componentDidMount(){
    axios
      .get(`https://api.github.com/users/${this.state.currentUser}`)

      .then( userData => {

        this.setState({ userInfo : userData.data })

      })

      .then(  () => {

        axios.get(`https://api.github.com/users/${this.state.currentUser}/followers`)

          .then( followerData => {

            this.setState({ userFollowers : followerData.data})

          })

        })

      .catch( err => {

        console.log(err)

      })
  }

  componentDidUpdate(prevProps, prevState){

    if (prevState.userInfo !== this.state.userInfo || prevState.userFollowers !== this.state.userFollowers || prevState.currentUser !== this.state.currentUser){

      prevState.currentUser !== this.state.currentUser ? (

      axios
      .get(`https://api.github.com/users/${this.state.currentUser}`)

      .then( userData => {

        this.setState({ userInfo : userData.data })

      })

      .then(  () => {

        axios.get(`https://api.github.com/users/${this.state.currentUser}/followers`)

          .then( followerData => {

            this.setState({ userFollowers : followerData.data})

          })

        })

      .catch( err => {

        console.log(err)

      })

      ) : 
      
      this.state.userFollowers.map( follower => {
        
        axios
          .get(`https://api.github.com/users/${follower.login}`)

          .then ( res => {

            
            this.setState({usableFollowers : [...this.state.useableFollowers, res.data]})

          })

          .catch(err => {
            console.log(err)
          })

          console.log(this.state.usableFollowers)
      })

    }
  }
  

  handleChange = e => {
    this.setState({
        inputValue : e.target.value
    })
    console.log(this.state.inputValue)
}

  handleSubmit = e => {
    e.preventDefault()
    this.setState({
      userFollowers : [],
      userInfo : {},
      usableFollowers : [],
      inputValue : '',
      currentUser : this.state.inputValue,
    })
    
}


  render(){
    return(
      <div>
        <div className = 'nav'>
          <h1> Github User Info </h1>
          <div className='search-container'>
                <Form onSubmit = {this.handleSubmit}>
                    <Form.Group>
                        <Form.Label>Search Other Github Profiles</Form.Label>
                        <Form.Control type="text" placeholder="Enter GitHub Username . . ." value = {this.state.value} onChange = {this.handleChange}/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Search
                    </Button>
                </Form>
            </div>
        </div>
        <header >
          <UserHeader
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
          <FollowersList usableFollowers = {this.state.usableFollowers} 
                          userName = {this.state.userInfo.name}
            /> 
      </div>
    )
  }

}

export default App;
