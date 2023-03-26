import logo from './logo.svg';
import './App.css';
import {Component} from "react";
import Messages from './Message';
import Input from "./components/Input";
import { getRandomName, getMemberColor } from './utils';



class App extends Component {
  state = {
    messages: [],
    member: {
      username: getRandomName(),
      color: getMemberColor(),
    },
  };

  constructor() {
    super();
    this.drone = new window.Scaledrone(
      "L405gTojonnMv1Al",
      {
        data: this.state.member,
      }
    );
    this.drone.on("open", (error) => {
      if (error) {
        return console.error(error);
      }
      const member = { ...this.state.member };
      member.id = this.drone.clientId;
      this.setState({ member });
    });
    const room = this.drone.subscribe("observable-room");
    room.on("data", (data, member) => {
      const messages = this.state.messages;
      messages.push({ member, text: data });
      this.setState({ messages });
    });
  }

  render() {
    return (
      <>
        <div className="App">
          <div className="App-header">
            <h1>Chat</h1>
          </div>
          <Messages
            messages={this.state.messages}
            currentMember={this.state.member}
          />
          <Input onSendMessage={this.onSendMessage} />
        </div>
      </>
    );
  }

  onSendMessage = (message) => {
    this.drone.publish({
      room: "observable-room",
      message,
    });
  };
}

export default App;
