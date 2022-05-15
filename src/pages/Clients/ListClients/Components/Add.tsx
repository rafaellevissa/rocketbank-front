import * as React from 'react';
import { Formik, FormikConfig, FormikValues, Field } from 'formik'

import { Button, Container, Modal, Paper, Typography, TextField } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { useDispatch } from 'react-redux';
import { clientSchema } from '../validator';
import MaskedInput from '../../../../components/MaskedInput';
import { add } from '../../../../store/modules/client/actions';

const AddModal = () => {
  const dispatch = useDispatch()

  const [open, setOpen] = React.useState(false);

  const handleSubmit = (payload: FormikValues) => {
    dispatch(add(payload))
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
    <div> 
      <Button size='medium' startIcon={ <AddIcon /> } color='primary' variant='contained' sx={{ mt: 3, mb: 3 }} onClick={handleOpen} >
        ADD USERS
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Container component='main' maxWidth="xs" sx={{ position: 'absolute', top: '20%', left: '35%' }}>
          <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }} >
            <Typography component="h1" variant="h5">
              Add User
            </Typography>
            <Typography>
              Input user information. 
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
                    component={MaskedInput}
                    helperText={errors?.document}
                    error={errors?.document}
                    onChange={({ target }: React.ChangeEvent<HTMLInputElement>) => 
                      setFieldValue('document', target.value)
                    }
                  />

                  <Field
                    name="birthdate"
                    label="Birthdate"
                    margin="normal"
                    mask='9999-99-99'
                    required
                    fullWidth
                    component={MaskedInput}
                    helperText={errors?.birthdate}
                    error={errors?.birthdate}
                    onChange={({ target }: React.ChangeEvent<HTMLInputElement>) => 
                      setFieldValue('birthdate', target.value)
                    }
                  />

                  <Button
                    type='submit'
                    variant="contained"
                    color="success"
                    fullWidth
                    startIcon={<AddIcon />}
                    sx={{ mt: 2 }}
                  >
                    Adicionar
                  </Button>
                </form>
              )}
              </Formik>
          </Paper>
        </Container>
      </Modal>
    </div>
  )
}

export default AddModal;