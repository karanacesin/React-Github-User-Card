import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  
  state = {
    user: [],
    followers: [],
  }

  componentDidMount(){

    axios
      .get('https://api.github.com/users/karanacesin')
      .then(res =>{
        //console.log(res.data)
       this.setState({
           user: res.data
       })
      })

      axios
        .get('https://api.github.com/users/karanacesin/followers')
        .then(res => {
          console.log(res.data)
          // this.setState({
          //   followers: res.data.array
          // })
        })
  }
  

  render(){
    return (
      <div>
        <div className="App">
          <h1>Dawna</h1>
          <div>{this.state.user}</div>
        </div>

        <div>
          <h1>Followers</h1>
          <div>{this.state.followers.map(follower => (
            follower.id))}</div>
        </div>
      </div>
    );
  }
}

export default App;
