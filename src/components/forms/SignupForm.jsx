import React from 'react';
import Input from "../inputs/Input";
import Form from "./Form";

import { SignUpValidationSchema } from "../../utils/ValidationSquemas";
import { SimpleButton } from "../buttons/Buttons";
import { FormAlert } from "./Form";
import { Formik } from "formik"
import { Link } from "react-router-dom";


const SingupForm = (handleSignup) => (
  <Formik
    initialValues={{ username: '', email: '', password: '' }}
    validationSchema={SignUpValidationSchema}
    onSubmit={handleSignup}
    validateOnBlur={false}
    isInitialValid={false}
  >
    {({
      values,
      isValid,
      errors,
      handleChange,
      handleBlur,
      handleSubmit
    }) => (
    <Form onSubmit={handleSubmit}>
      <p>Sign up</p>
      <Input 
        id='username' 
        name='username' 
        type='text' 
        value={values.username}
        onChange={handleChange}
        onBlur={handleBlur}
        labelName='Username'
      />

      <Input 
        id='email' 
        name='email' 
        type='email' 
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        labelName='Email'
      />

      <Input 
        id='password' 
        name='password' 
        type='password' 
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        labelName="Password"
      />

      { Object.keys(errors).length !== 0 && 
        (<FormAlert>
          {Object.values(errors).map( (error, index) => <p key={index}>{error}</p>)}
        </FormAlert>
      )}

      <SimpleButton 
        type='submit'
        disabled={!isValid}
      >Sign up</SimpleButton>

      <p className='align-self-start'>Do you have an account? <Link to={"/login"}>Sing in</Link></p>

    </Form>)}
  </Formik>
)

export default SingupForm;