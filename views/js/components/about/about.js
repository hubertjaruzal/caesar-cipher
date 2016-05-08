import React from "react";

export default class Code extends React.Component {
  render() {
    return(
      <div class="component__container">
        <h1>About Cipher</h1>
        <p class="about__text">
          The Caesar cipher is named after Julius Caesar, who, according to Suetonius,
          used it with a shift of three to protect messages of military significance.
          It is one of the simplest and most widely known encryption techniques.
        </p>
        <blockquote class="about__text about__blockquote">
          &emsp;If he had anything confidential to say, he wrote it in cipher, that is,
          by so changing the order of the letters of the alphabet, that not a word could be made out.
          If anyone wishes to decipher these, and get at their meaning, he must substitute the fourth
          letter of the alphabet, namely D, for A, and so with the others.
        </blockquote>

        <p class="about__text about__author">Suetonius, <cite>Life of Julius Caesar</cite></p>
      </div>
    );
  }
}
