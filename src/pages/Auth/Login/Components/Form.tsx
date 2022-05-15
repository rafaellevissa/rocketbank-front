import * as React from 'react';
import { Field, useFormikContext } from 'formik'
import { Alert, Box, Snackbar, TextField } from '@mui/material';
import SubmitButton from './SubmitButton';
import { useSelector } from 'react-redux';
import { useTranslation } from '../../../../hooks/use-translation';

const Form = () => {
  const { translate } = useTranslation()
  const { handleSubmit, errors, setFieldValue } = useFormikContext<any>();
  const { error } = useSelector<any, any>(item => item.auth);

  return (
    <form onSubmit={handleSubmit} id="login-form">
      <Box sx={{ mt: 1 }}>
        <Field
          name="email"
          label={translate('LOGIN:EMAIL')}
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
          label={translate('LOGIN:PASSWORD')}
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
          {translate('LOGIN:SUBMIT')}
        </SubmitButton>
      </Box>

      <Snackbar open={error} autoHideDuration={300}>
        <Alert severity="error" sx={{ width: '100%' }}>
          {translate('LOGIN:ERROR')}
        </Alert>
      </Snackbar>
    </form>
  );
}

export default Form;