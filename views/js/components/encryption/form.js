import React from "react";
import Title from "../header/title";

export default class FormName extends React.Component {
  handleChangeText(e) {
    var text = "";
    var numbers = document.getElementById("numbers").value;
    var number = parseInt(numbers);

    const title = e.target.value;

    for (var i=0; i < title.length; i++) {
      var plainCharacter = title.charCodeAt(i);

      if (plainCharacter >= 97 && plainCharacter <= 122) {
          text += String.fromCharCode((plainCharacter - 97 + number) % 26 + 97);
      } else if (plainCharacter >= 65 && plainCharacter <= 90) {
          text += String.fromCharCode((plainCharacter - 65 + number) % 26 + 65);
      } else {
          text += String.fromCharCode(plainCharacter);
      }
    }

    this.props.changeText(text);
  }

  handleChangeVal(v) {
    var text = "";
    var title = document.getElementById("encyptText").value;

    const val = parseInt(v.target.value);

    for (var i=0; i < title.length; i++) {
      var plainCharacter = title.charCodeAt(i);

      if (plainCharacter >= 97 && plainCharacter <= 122) {
          text += String.fromCharCode((plainCharacter - 97 + val) % 26 + 97);
      } else if (plainCharacter >= 65 && plainCharacter <= 90) {
          text += String.fromCharCode((plainCharacter - 65 + val) % 26 + 65);
      } else {
          text += String.fromCharCode(plainCharacter);
      }
    }

    this.props.changeText(text);
  }

  render() {
    return(
      <div>
        <textarea id="encyptText" placeholder="Message..." onChange={this.handleChangeText.bind(this)}></textarea>
        <select id="numbers" onChange={this.handleChangeVal.bind(this)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <Title title={this.props.title}/>
      </div>
    );
  }
}
