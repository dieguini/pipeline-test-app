import * as React from "react";
import { Link } from "react-router-dom";
import { SimpleButton } from "../components/buttons/Buttons";
import { useAuth } from '../components/authentication/AuthProvider';
import Form, { FormAlert } from "../components/forms/Form";
import Input from "../components/inputs/Input";
import { Formik } from "formik";
import { SignInValidationSchema } from "../utils/ValidationSquemas";

export const LoginPage = () => {

  const { login } = useAuth();


  const handleSubmit = (values) => {
    login({
      username: values.username,
      password: values.password
    });
  };


  return (
    <div style={{ height: '100%' }} className='d-flex justify-content-center flex-column align-items-center'>
      <Formik
        initialValues={{ username: '', password: '' }}
        validationSchema={SignInValidationSchema}
        onSubmit={handleSubmit}
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

            <p>Sign in</p>

            <Input 
              id='username' 
              name='username' 
              type='text' 
              labelName="Username" 
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <Input 
              id='password' 
              name='password' 
              type='password' 
              labelName="Password" 
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            { Object.keys(errors).length !== 0 && 
              (<FormAlert>
                {Object.values(errors).map( (error, index) => <p key={index}>{error}</p>)}
              </FormAlert>
            )}

            <SimpleButton 
              disabled={!isValid}
              type="submit"
            >
              Log in
            </SimpleButton>

            <p className="align-self-start">Doesn't have an account? <Link to={"/signup"}>Sing up</Link></p>
          </Form>
        )}
      </Formik>
    </div>
  );

};