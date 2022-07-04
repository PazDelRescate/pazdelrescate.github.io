import * as Yup from 'yup';
import { useState } from 'react';
import { useFormik, Form, FormikProvider } from 'formik';
import { useNavigate } from 'react-router-dom';
// material
import { Stack, TextField, IconButton, InputAdornment } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import 'firebase/compat/database';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
// component
import Iconify from '../../../components/Iconify';


// ----------------------------------------------------------------------


const RegisterForm = () => {

const firebaseConfig = {
  apiKey: "AIzaSyB-xhOiVvJ-GqZ2bCvbeNXl6h745LSWW-E",
  authDomain: "clone-9da05.firebaseapp.com",
  databaseURL: "https://clone-9da05-default-rtdb.firebaseio.com",
  projectId: "clone-9da05",
  storageBucket: "clone-9da05.appspot.com",
  messagingSenderId: "983643125014",
  appId: "1:983643125014:web:881311943924bfebcc8c37",
  measurementId: "G-Z98P2RTGJ0"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const RegisterSchema = Yup.object().shape({
    Username: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Username is required'),
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      Username: '',
      email: '',
      password: '',
    },

    onSubmit: (values) => {
      const auth = getAuth();
      const email = formik.values.email;
      const password = formik.values.password;
      createUserWithEmailAndPassword(auth, email, password)
        .then((authUser) => {
          return authUser.user.updateProfile({
          })
        })
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
        navigate('/dashboard/app', { replace: true });
    },

  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" onSubmit={handleSubmit}>
        <Stack spacing={3}>

          <TextField
            fullWidth
            autoComplete="username"
            id="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            type="email"
            label="Email address"
            {...getFieldProps('email')}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
          />

          <TextField
            fullWidth
            autoComplete="current-password"
            id="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            type={showPassword ? 'text' : 'password'}
            label="Password"
            {...getFieldProps('password')}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end" onClick={() => setShowPassword((prev) => !prev)}>
                    <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
          />

          <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
            Register
          </LoadingButton>
        </Stack>
      </Form>
    </FormikProvider>
  );
}
export default RegisterForm