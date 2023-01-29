import React  from 'react'
import { SimpleButton } from '../components/buttons/Buttons';
import { Auth } from 'aws-amplify';
import { useLocation, useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import { VerificationCodeValidationSchema } from '../utils/ValidationSquemas';
import Form, { FormAlert } from '../components/forms/Form';
import Input from '../components/inputs/Input';
import { useState } from 'react';
import { toastError, toastInfo } from '../utils/Toasters';
import SingupForm from '../components/forms/SignupForm';





const VerificationCodeForm = ( handleConfirm ) => (
  <Formik
    initialValues={{ verificationCode: '' }}
    validationSchema={VerificationCodeValidationSchema}
    onSubmit={handleConfirm}
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
        <Input 
          id='verificationCode' 
          name='verificationCode' 
          type='text' 
          value={values.code}
          onChange={handleChange}
          onBlur={handleBlur}
          labelName='Verification code'
        />
          { Object.keys(errors).length !== 0 && 
            (<FormAlert>
              {Object.values(errors).map( (error, index) => <p key={index}>{error}</p>)}
            </FormAlert>
          )}
        <SimpleButton 
          variant='contained'
          disabled={!isValid}
          type='submit'
        >Sign up</SimpleButton>
      </Form>)}
  </Formik>
)


const SignUpPage = () => {

  const [ currentAction, setCurrentAction ] = useState('signup');
  const [ currentUser, setCurrentUser ] = useState();
  const navigate = useNavigate('/');
  const { state } = useLocation();


  const signup = async ({ username, password, email}) => {
    try {
      const { user } = await Auth.signUp({
          username,
          password,
          attributes: {
              email    
          },
          autoSignIn: { 
              enabled: true,
          }
      });

      setCurrentUser(user);
      toastInfo('Confirm user with the code sended to your email');
      setCurrentAction('confirm');
      console.log(user);

    } catch (error) {
      toastError(error.message)
    }
  }


  const confirmSignup = async ({ username, code}) => {
    try {
      await Auth.confirmSignUp(username, code);
    } catch (error) {
      toastError(error.message);
      console.log('error confirming sign up', error);
    }
  }


  const handleSignup = (values) => {
    signup(values);
  };


  const handleConfirm = (values) => {
    confirmSignup({ 
      username: currentUser.username, 
      code: values.verificationCode
    })
    navigate('/login');
  }


  const handleUnconfirmedUser = (values) => {
    confirmSignup({ 
      username: state.username, 
      code: values.verificationCode
    })
    navigate('/login');
  }


  const pickForm = () => {
    if(state?.action === 'confirm')
      return  VerificationCodeForm(handleUnconfirmedUser);
    if(currentAction === 'signup')
      return SingupForm(handleSignup)
    if(currentAction === 'confirm')
      return VerificationCodeForm(handleConfirm)
  }


  return (
    <div style={{ height: '100%' }} className='d-flex justify-content-center align-items-center' >
      {pickForm()} 
    </div>
  );

}

export default SignUpPage
