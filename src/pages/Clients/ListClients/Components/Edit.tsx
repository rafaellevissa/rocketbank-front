import * as React from 'react';
import InputMask from 'react-input-mask';
import { Formik, FormikConfig, FormikValues, Field } from 'formik'
import { Button, Container, IconButton, Modal, Paper, Typography, TextField } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch } from 'react-redux';
import { clientSchema } from '../validator';

const EditModal = (props: any) => {
  const dispatch = useDispatch()

  const [open, setOpen] = React.useState(false);

  const handleSubmit = (payload: FormikValues) => {
    console.log(payload)

  }

  const formikConfig: FormikConfig<FormikValues> = {
    initialValues: {
      birthdate: '',
      document: '',
      name: ''
    },
    validationSchema: clientSchema,
    onSubmit: handleSubmit
  }
  

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <IconButton aria-label="edit" onClick={handleOpen}>
				<EditIcon />
			</IconButton>
      <Modal open={open} onClose={handleClose}>
        <Container component='main' maxWidth="xs" sx={{ position: 'absolute', top: '20%', left: '35%' }}>
          <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }} >
            <Typography component="h1" variant="h5">
              Edit User
            </Typography>
            <Typography>
              Edit user information. 
            </Typography>
            <Formik {...formikConfig}>
              {({ handleSubmit, errors, setFieldValue }) => (
                <form onSubmit={handleSubmit}>
                  <Field
                    name="name"
                    label="Name"
                    margin="normal"
                    required
                    fullWidth
                    component={TextField}
                    helperText={errors?.name}
                    error={errors?.name}
                    onChange={({ target }: React.ChangeEvent<HTMLInputElement>) => 
                      setFieldValue('name', target.value)
                    }
                  />

                  <Field
                    name="document"
                    label="Document"
                    margin="normal"
                    mask='999.999.999-99'
                    required
                    fullWidth
                    component={InputMask}
                    helperText={errors?.document}
                    error={errors?.document}
                    onChange={({ target }: React.ChangeEvent<HTMLInputElement>) => 
                      setFieldValue('document', target.value)
                    }
                  >
                    {(inputProps: any) => <TextField {...inputProps} />}
                  </Field>

                  <Field
                    name="birthdate"
                    label="Birthdate"
                    margin="normal"
                    mask='9999-99-99'
                    required
                    fullWidth
                    component={InputMask}
                    helperText={errors?.birthdate}
                    error={errors?.birthdate}
                    onChange={({ target }: React.ChangeEvent<HTMLInputElement>) => 
                      setFieldValue('birthdate', target.value)
                    }
                  >
                    {(inputProps: any) => <TextField {...inputProps} />}
                  </Field>

                  <Button
                    type='submit'
                    variant="contained"
                    color="success"
                    fullWidth
                    startIcon={<EditIcon />}
                    sx={{ mt: 2 }}
                  >
                    ATUALIZAR
                  </Button>
                </form>
              )}
              </Formik>
          </Paper>
        </Container>
      </Modal>
    </>
  )
}

export default EditModal;