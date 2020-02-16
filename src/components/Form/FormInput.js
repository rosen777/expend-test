import React, {Component} from 'react'
import {Form } from 'semantic-ui-react'

const FormInput = ({label, input, meta: {error}, placeholder}) => {
        const handleChange = (e, { value }) => {
        return input.onChange(value);
        };
        
        return (
          <div>
            <label>{label}</label>
            <Form.Field>
              <Form.Input
                error={error && { content: error }}
                onChange={handleChange}
                placeholder={placeholder}
              />
            </Form.Field>
          </div>
        );
}

export default FormInput