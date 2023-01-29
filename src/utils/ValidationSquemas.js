import * as Yup from 'yup';


const inputValidations = {

  username: Yup.string()
    .max(12, 'Username must have less than 12 characters!')
    .matches(/^[a-z]*$/gi, 'Username must contain only letters')
    .required('Username is required'),

  email: Yup.string()
    .email('Email must be a valid email')
    .required('Email is required'),

  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .matches(/^[a-z0-9]*$/gi, 'Password must contain letters or numbers')
    .required('Password is required'),
  
  verificationCode: Yup.string()
    .matches(/^[0-9]/g, 'Verification code must be a number')
    .test('len', 'Verification code be exactly 6 digits', val => val.length === 6)
    .required('Verification code is required')

}


export const SignInValidationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Passowrd is required')
})


export const SignUpValidationSchema = Yup.object().shape({
  username: inputValidations.username,
  email: inputValidations.email,
  password: inputValidations.password
})

export const VerificationCodeValidationSchema = Yup.object().shape({
  verificationCode: inputValidations.verificationCode,
})