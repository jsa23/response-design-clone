import NavBar from './Components/NavBar';
import './App.css';
import React, { Component } from 'react';
import Animation from './Components/Animation'

class App extends Component {
  constructor(){
    super()

    this.state = {
      navLinks: ['Services', 'Portfolio', 'About', 'Team', 'Contact']
    }
  }
  

  render(){
    const { navLinks } = this.state;
    return (
      <div className="App">
        <NavBar 
        links={navLinks}
        />
      <span> 
        <h3>Welcome to Our Stuido!</h3>
        <h2>It's Nice To Meet You</h2>

        <button>Tell Me More</button>
      </span>
      <Animation />
    </div>
  );
}
}


export default App;
