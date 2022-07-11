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
import { Link, Stack, Checkbox, TextField, Radio, IconButton, InputAdornment, FormControlLabel } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// component
import Iconify from '../components/Iconify';

// ----------------------------------------------------------------------

export default function Requestsadd() {
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
            <h2>Analysis Request</h2>
          <TextField
            fullWidth
            autoComplete="Blend"
            type="Blend"
            label="Blend"
            {...getFieldProps('Blend')}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
          />

          <FormControlLabel
            fullWidth
            value= "FSO2"
            control={<Radio />}
            label="Free Sulfur"
            {...getFieldProps('FSO2')}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
          />

          <FormControlLabel
            fullWidth
            value= "pH"
            control={<Radio />}
            label="pH"
            {...getFieldProps('pH')}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
          />

          <FormControlLabel
            fullWidth
            value= "TA"
            control={<Radio />}
            label="Titratable Acidity"
            {...getFieldProps('TA')}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
          />

          <FormControlLabel
            fullWidth
            value= "RS"
            control={<Radio />}
            label="Residual Sugar"
            {...getFieldProps('RS')}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
          />

          <FormControlLabel
            fullWidth
            value= "ML"
            control={<Radio />}
            label="Malic Acid"
            {...getFieldProps('ML')}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
          />

          <FormControlLabel
            fullWidth
            value= "VA"
            control={<Radio />}
            label="Volatile Acidity"
            {...getFieldProps('VA')}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
          />

        </Stack>

        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
          <></>
        </Stack>

        <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
          Submit Request
        </LoadingButton>
      </Form>
    </FormikProvider>
  );
}
