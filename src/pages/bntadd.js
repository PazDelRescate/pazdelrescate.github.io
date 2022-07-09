import * as Yup from 'yup';
import { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useFormik, Form, FormikProvider } from 'formik';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import 'firebase/compat/database';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
// material
import { Link, Stack, Checkbox, TextField, IconButton, InputAdornment, FormControlLabel } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// component
import Iconify from '../components/Iconify';

// ----------------------------------------------------------------------

export default function Bntadd() {
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


  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      remember: true,
    },
    onSubmit: (values) => {
        navigate('/dashboard/app', { replace: true });
    },
  });

  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } = formik;

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
            <h2>Enter Analysis</h2>

            <TextField
            fullWidth
            autoComplete="Date"
            type="Date"
            {...getFieldProps('Date')}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
          />

          <TextField
            fullWidth
            autoComplete="Blend"
            type="Blend"
            label="Blend"
            {...getFieldProps('Blend')}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
          />

            <TextField
            fullWidth
            autoComplete="Brix"
            type="Brix"
            label="Brix"
            {...getFieldProps('Brix')}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
          />

            <TextField
            fullWidth
            autoComplete="Temp"
            type="Temp"
            label="Temp"
            {...getFieldProps('Temp')}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
          />

            <TextField
            fullWidth
            autoComplete="Comments"
            type="Comments"
            label="Comments"
            {...getFieldProps('Comments')}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
          />

           

        </Stack>

        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
          <FormControlLabel
            control={<Checkbox {...getFieldProps('remember')} checked={values.remember} />}
            label="Results Verified"
          />
        </Stack>

        <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
          Enter Results
        </LoadingButton>
      </Form>
    </FormikProvider>
  );
}
