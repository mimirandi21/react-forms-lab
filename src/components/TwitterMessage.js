import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: "",
    };
  }

  updateMessage = (e) => {
    let message = e.target.value;
    this.setState((previousState) => {
      return {
        message,
      };
    });
  };

  charsRemaining = () => {
    return this.props.maxChars - this.state.message.length;
  };

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          onChange={this.updateMessage}
          type="text"
          value={this.state.message}
          name="message"
          id="message"
        />
        <h5>Remaining Characters: {this.charsRemaining()}</h5>
      </div>
    );
  }
}

export default TwitterMessage;
