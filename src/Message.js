import {Component} from "react";
import React from "react";


class Messages extends Component {

  renderEachMessage(message) {
    const {member, text} = message;
    const {currentMember} = this.props;
    const messageFromMember = member.id === currentMember.id;
    const classNameMessage = messageFromMember ?
      "Messages-message currentMember" : "Messages-message";

    const randomId = () => {
      return  Math.floor(Math.random() * 90) + currentMember;
    }

    return (
      <li key={randomId()}
      className={classNameMessage}
     >
      <span
        className="avatar"
        style={{backgroundColor: member.clientData.color}}
      />
        <div className="Message-content">
          <div className="username">
            {member.clientData.username}
          </div>
          <div className="text">{text}</div>
        </div>
      </li>
    );
  }

  render() {
    const {messages} = this.props;
   
    return (
      <ul className="Messages-list">
        {messages.map(m => this.renderEachMessage(m))}
      </ul>
      
    );
  }
}
export default Messages;