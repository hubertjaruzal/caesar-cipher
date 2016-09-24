import React from "react";
import Form from "./form";

export default class Decryption extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "",
      value: 1
    };
  }

  changeText(text) {
    this.setState({text});
  }

  changeValue(value) {
    this.setState({value});
  }


  render() {
    return(
      <div class="component__container">
        <h1>Decryption</h1>
        <p class="description__text">Write an encrypted message and choose right shift.</p>
        <Form title={this.state.text} value={this.state.value} changeText={this.changeText.bind(this)} changeValue={this.changeValue.bind(this)}/>
      </div>
    );
  }
}
