import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class StreamForm extends Component {
  renderError = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header`">{error}</div>
        </div>
      );
    }
  };
  renderInput = ({ input, label, meta }) => {
    ///formProps
    const className = `field ${meta.error && meta.touched ? `error` : ""}`;
    //console.log(meta);
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };
  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };
  render() {
    return (
      <form
        className="ui form error"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "You must need to enter title";
    // only ran if the user doesn't enter title
  }
  if (!formValues.description) {
    errors.description = "You must need to enter description";
    // only ran if the user doesn't enter description
  }
  return errors;
};

export default reduxForm({
  form: "streamForm",
  validate: validate
})(StreamForm);
