import * as React from 'react';
import { Formik, FormikConfig, FormikValues, Field } from 'formik'

import { Button, Container, Modal, Paper, Typography, TextField } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { useDispatch } from 'react-redux';
import { clientSchema } from '../validator';
import MaskedInput from '../../../../components/MaskedInput';
import { add } from '../../../../store/modules/client/actions';
import DatePicker from '../../../../components/DatePicker';
import { useTranslation } from '../../../../hooks/use-translation';

const AddModal = () => {
  const dispatch = useDispatch()
  const {translate} = useTranslation()

  const [open, setOpen] = React.useState(false);

  const handleSubmit = (payload: FormikValues) => {
    dispatch(add(payload))
  }

  const formikConfig: FormikConfig<FormikValues> = {
    initialValues: {
      birthdate: null,
      document: '',
      name: ''
    },
    validationSchema: clientSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true
  }
  

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div> 
      <Button size='medium' startIcon={ <AddIcon /> } color='primary' variant='contained' sx={{ mt: 3, mb: 3 }} onClick={handleOpen} >
        {translate('CLIENT:TITLE')}
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Container component='main' maxWidth="xs" sx={{ position: 'absolute', top: '20%', left: '35%' }}>
          <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }} >
            <Typography component="h1" variant="h5">
              {translate('CLIENT:TITLE')}
            </Typography>
            <Typography>
              {translate('CLIENT:ADD_SUBTITLE')}
            </Typography>
            <Formik {...formikConfig}>
              {({ handleSubmit, errors, setFieldValue, values }) => (
                <form onSubmit={handleSubmit}>
                  <Field
                    name="name"
                    label={translate('CLIENT:RESOURCES:NAME')}
                    margin="normal"
                    required
                    fullWidth
                    component={TextField}
                    helperText={translate(errors.name as string)}
                    error={errors?.name}
                    onChange={({ target }: React.ChangeEvent<HTMLInputElement>) => 
                      setFieldValue('name', target.value)
                    }
                  />

                  <Field
                    name="document"
                    label={translate('CLIENT:RESOURCES:DOCUMENT')}
                    margin="normal"
                    mask='999.999.999-99'
                    required
                    fullWidth
                    component={MaskedInput}
                    helperText={translate(errors.document as string)}
                    error={errors?.document}
                    onChange={({ target }: React.ChangeEvent<HTMLInputElement>) => 
                      setFieldValue('document', target.value)
                    }
                  />
                  <Field
                    name="birthdate"
                    label={translate('CLIENT:RESOURCES:BIRTHDATE')}
                    margin="normal"
                    date={values?.birthdate}
                    required
                    fullWidth
                    component={DatePicker}
                    helperText={translate(errors.birthdate as string)}
                    error={errors?.birthdate}
                    onChange={(birthdate: Date) => 
                      setFieldValue('birthdate', birthdate)
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
                    {translate('CLIENT:SUBMIT')}
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