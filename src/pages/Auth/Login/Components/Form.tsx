import * as React from 'react';
import { Field, useFormikContext } from 'formik'
import { Alert, Box, Snackbar, TextField } from '@mui/material';
import SubmitButton from './SubmitButton';
import { useSelector } from 'react-redux';

const Form = () => {
  const { handleSubmit, errors, setFieldValue } = useFormikContext<any>();
  const { error } = useSelector<any, any>(item => item.auth);

  return (
    <form onSubmit={handleSubmit} id="login-form">
      <Box sx={{ mt: 1 }}>
        <Field
          name="email"
          label="Email Address"
          margin="normal"
          required
          fullWidth
          autoComplete="email"
          autoFocus
          component={TextField}
          helperText={errors?.email}
          error={errors?.email}
          onChange={({ target }: React.ChangeEvent<HTMLInputElement>) => 
            setFieldValue('email', target.value)
          }
        />
        <Field
          name="password"
          label="Password"
          margin="normal"
          required
          fullWidth
          helperText={errors?.password}
          error={errors?.password}
          component={TextField}
          onChange={({ target }: React.ChangeEvent<HTMLInputElement>) => 
            setFieldValue('password', target.value)
          }
        />
        <SubmitButton 
          type="submit"
          variant='contained'
          form='login-form'
          fullWidth
        >
          Log In
        </SubmitButton>
      </Box>

      <Snackbar open={error} autoHideDuration={300}>
        <Alert severity="error" sx={{ width: '100%' }}>
          Please, check your credencials and try it again.
        </Alert>
      </Snackbar>
    </form>
  );
}

export default Form;