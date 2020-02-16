import React from 'react'
import { Form } from 'semantic-ui-react'
import {reduxForm, Field } from 'redux-form'
import { compose } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../../actions'
import './Signup.css'

import {
  validateName,
  validateLength1,
  validateEmail,
  validatePhone
} from "../validations/validations";
import FormInput from "../Form/FormInput"

const Signup = ({
  handleSubmit,
  invalid,
  pristine,
  signup,
  submitting,
}) => {
  const onSubmit = formData => {
    const nameArr = formData.name && 
    formData.name.split(" ");
    
    if(formData.name && formData.email && formData.phone_number) {
        const newFormData = {
        firstName: nameArr[0],
        lastName: nameArr[1],
        email: formData.email,
        phone_number: formData.phone_number
        }
        signup(newFormData)
    }
  };

  return (
    <div className="signup-form">
      <div className="form-h1">
        Please, enter your details in the form below.
      </div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Field
            label="Name"
            name="name"
            type="text"
            placeholder="Satoshi Nakamato"
            component={FormInput}
            autoComplete="none"
            validate={[validateName, validateLength1]}
          />
        </div>
        <div>
          <Field
            label="Email"
            name="email"
            type="email"
            placeholder="satoshi@nakamoto.com"
            component={FormInput}
            autoComplete="none"
            validate={[validateLength1, validateEmail]}
          />
        </div>
        <div>
          <Field
            label="Phone"
            name="phone_number"
            type="tel"
            placeholder="02079460000"
            component={FormInput}
            autoComplete="none"
            validate={[validateLength1, validatePhone]}
          />
        </div>
        <div className="form-btn">
          <Form.Button disabled={pristine || invalid || submitting} inverted>
            JOIN US
          </Form.Button>
        </div>
      </Form>
    </div>
  );
};

export default compose(
    connect(null, actions),
    reduxForm({
        form: 'signup'
    })
)(Signup)