import * as React from 'react';
import { Formik, FormikConfig, FormikValues, Field } from 'formik'
import { Button, Container, IconButton, Modal, Paper, Typography, TextField } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch, useSelector } from 'react-redux';
import { clientSchema } from '../validator';
import MaskedInput from '../../../../components/MaskedInput';
import { find, update } from '../../../../store/modules/client/actions';

const EditModal = (props: any) => {
  const dispatch = useDispatch()
  const { itemEdit } = useSelector<any, any>(item => item.client)

  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (open) {
      dispatch(find(props.id))
    }
  }, [open])

  const handleSubmit = (payload: FormikValues) => {
    const data = {
      ...payload,
      id: props.id
    }

    dispatch(update(data))
  }

  const formikConfig: FormikConfig<FormikValues> = {
    enableReinitialize: true,
    initialValues: {
      birthdate: itemEdit?.birthdate,
      document: itemEdit?.document,
      name: itemEdit?.name
    },
    validationSchema: clientSchema,
    onSubmit: handleSubmit,
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
              {({ handleSubmit, errors, setFieldValue, values }) => (
                <form onSubmit={handleSubmit}>
                  <Field
                    name="name"
                    label="Name"
                    margin="normal"
                    required
                    fullWidth
                    value={values?.name}
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
                    value={values?.document}
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
                    value={values?.birthdate}
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