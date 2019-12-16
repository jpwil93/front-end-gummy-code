import React, { Component } from "react";

import { reduxForm, Field } from "redux-form";

import { FormInput, FormButton } from "../formFields";

import history from "../../history";

class AccountInformationForm extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { className, handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit} className={`${className} sign-in-form`}>
        <Field
          className="sign-in-form__email"
          type="email"
          title="Email"
          placeholder="Email"
          name="email"
          component={FormInput}
        />
        <Field
          className="sign-in-form__password"
          type="password"
          title="Password"
          placeholder="Password"
          name="password"
          component={FormInput}
        />
        <div className="sign-in-form__line"></div>
        <Field
          onClick={() => history.push("/account")}
          className="sign-in-form__login"
          type="submit"
          title="Login"
          name="login"
          component={FormButton}
        />
      </form>
    );
  }
}

AccountInformationForm = reduxForm({
  form: "AccountInformationForm"
})(AccountInformationForm);

export default AccountInformationForm;
