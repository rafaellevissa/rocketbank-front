import * as React from 'react';
import { Formik, FormikConfig, FormikValues, Field } from 'formik'
import { Button, Container, IconButton, Modal, Paper, Typography, TextField } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch, useSelector } from 'react-redux';
import { clientSchema } from '../validator';
import MaskedInput from '../../../../components/MaskedInput';
import { find, update } from '../../../../store/modules/client/actions';
import DatePicker from '../../../../components/DatePicker';
import moment from 'moment'
import { useTranslation } from '../../../../hooks/use-translation';

const EditModal = (props: any) => {
  const dispatch = useDispatch()
  const { itemEdit } = useSelector<any, any>(item => item.client)
  const [open, setOpen] = React.useState(false);
  const {translate} = useTranslation()

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
      birthdate: new Date(
        moment(itemEdit?.birthdate, 'YYYY-MM-DD').toISOString()
      ),
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
              {translate('CLIENT:EDIT_TITLE')}
            </Typography>
            <Typography>
              {translate('CLIENT:EDIT_SUBTITLE')}
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
                    label={translate('CLIENT:RESOURCES:DOCUMENT')}
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
                    label={translate('CLIENT:RESOURCES:BIRTHDATE')}
                    margin="normal"
                    date={values?.birthdate}
                    required
                    fullWidth
                    component={DatePicker}
                    helperText={errors?.birthdate}
                    error={errors?.birthdate}
                    onChange={(birthdate: Date) => {
                      if (Object.prototype.toString.call(birthdate) === "[object Date]") {
                        setFieldValue('birthdate', birthdate);
                      }
                    }
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
                    {translate('CLIENT:SUBMIT')}
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