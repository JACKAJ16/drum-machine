import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input: "",
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress); 
  }  
  
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }
  
  handleKeyPress(e) {
    if (e.code == "KeyQ") {
      document.getElementById("Q").play()
      this.setState({
        input: "heater-1"
      })
    } else if (e.code == "KeyW") {
      document.getElementById("W").play()
      this.setState({
        input: "heater-2"
      })
    } else if (e.code == "KeyE") {
      document.getElementById("E").play()
      this.setState({
        input: "heater-3"
      })
    } else if (e.code == "KeyA") {
      document.getElementById("A").play()
      this.setState({
        input: "heater-4"
      })
    } else if (e.code == "KeyS") {
      document.getElementById("S").play()
      this.setState({
        input: "clap"
      })
    } else if (e.code == "KeyD") {
      document.getElementById("D").play()
      this.setState({
        input: "open-haha"
      })
    } else if (e.code == "KeyZ") {
      document.getElementById("Z").play()
      this.setState({
        input: "Kick_n_Hat"
      })
    } else if (e.code == "KeyX") {
      document.getElementById("X").play()
      this.setState({
        input: "kick"
      })
    } else if (e.code == "KeyC") {
      document.getElementById("C").play()
      this.setState({
        input: "close-haha"
      })
    }
    
  }  
  
  handleClick(event) {
    event.target.lastChild.play()
    this.setState({
      input: event.target.id
    })
  }

  
  
  render() {
    return(
      <div>
      <div className="header"><h1>Drum Machine</h1></div>
      <div id="drum-machine">
      <div id="display">
      {this.state.input}
      </div>


      <div className="buttons">
      <button className="drum-pad" id="heater-1" onClick={this.handleClick} >Q <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" className="clip" id="Q"></audio></button>
      <button className="drum-pad" id="heater-2" onClick={this.handleClick}>W <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" className="clip" id="W"></audio></button>
      <button className="drum-pad" id="heater-3" onClick={this.handleClick}>E <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" className="clip" id="E"></audio></button>
      <button className="drum-pad" id="heater-4" onClick={this.handleClick}>A <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" className="clip" id="A"></audio></button>
      <button className="drum-pad" id="clap" onClick={this.handleClick}>S <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" className="clip" id="S"></audio></button>
      <button className="drum-pad" id="open-haha" onClick={this.handleClick}>D <audio src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" className="clip" id="D"></audio></button>
      <button className="drum-pad" id="Kick_n_Hat" onClick={this.handleClick}>Z <audio src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" className="clip" id="Z"></audio></button>
      <button className="drum-pad" id="kick" onClick={this.handleClick}>X <audio src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" className="clip" id="X"></audio></button>
      <button className="drum-pad" id="close-haha" onClick={this.handleClick}>C <audio src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" className="clip" id="C"></audio></button>
      </div>


      </div>
      </div>
      )
    }
  }

  export default App;
