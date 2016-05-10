import React from "react";

import { Link } from "react-router";

export default class Header extends React.Component {
  render() {
    return(
      <nav class="nav">
        <ul>
          <li><Link to="decryption" activeClassName="active">Decryption</Link></li>
          <li><Link to="encryption" activeClassName="active">Encryption</Link></li>
          <li><Link to="about" activeClassName="active">About Cipher</Link></li>
        </ul>
      </nav>
    );
  }
}
