import {Component} from "react";
import React from "react";

class Input extends Component {
  state = {
    text: ""
  }

  onSubmitForm(e) {
    e.preventDefault();
    this.setState({text: ""});
    this.props.onSendMessage(this.state.text);
  }

  onChangeText(e) {
    this.setState({text: e.target.value});
  }

  render() {
    return (
      <div className="Input">
        <form onSubmit={e => this.onSubmitForm(e)}>
          <input
            onChange={e => this.onChangeText(e)}
            value={this.state.text}
            type="text"
            placeholder="Enter your message and press ENTER"
            autoFocus={true}
          />
          <button>Send</button>
        </form>
      </div>
    );
  }
}

export default Input;