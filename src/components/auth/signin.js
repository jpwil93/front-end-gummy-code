import React, { Component } from "react";

import SignInForm from "./signinForm";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="sign-in">
        <SignInForm className="sign-in__form" />
      </div>
    );
  }
}

export default SignIn;
