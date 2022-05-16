import * as React from 'react';
import { Formik, FormikConfig, FormikValues, Field } from 'formik'
import { Button, Container, IconButton, Modal, Paper, Typography, TextField } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useDispatch, useSelector } from 'react-redux';
import { clientSchema } from '../validator';
import MaskedInput from '../../../../components/MaskedInput';
import { find, update } from '../../../../store/modules/client/actions';
import DatePicker from '../../../../components/DatePicker';
import moment from 'moment'
import { useTranslation } from '../../../../hooks/use-translation';

const ShowModal = (props: any) => {
  const dispatch = useDispatch()
  const { itemEdit } = useSelector<any, any>(item => item.client)
  const [open, setOpen] = React.useState(false);
  const {translate} = useTranslation()

  React.useEffect(() => {
    if (open) {
      dispatch(find(props.id))
    }
  }, [open])

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
    onSubmit: () => {},
  }

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <IconButton aria-label="edit" onClick={handleOpen}>
				<VisibilityIcon />
			</IconButton>
      <Modal open={open} onClose={handleClose}>
        <Container component='main' maxWidth="xs" sx={{ position: 'absolute', top: '20%', left: '35%' }}>
          <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }} >
            <Typography component="h1" variant="h5">
              {translate('CLIENT:SHOW_TITLE')}
            </Typography>
            <Typography>
              {translate('CLIENT:SHOW_SUBTITLE')}
            </Typography>
            <Formik {...formikConfig}>
              {({ handleSubmit, values }) => (
                <form onSubmit={handleSubmit}>
                  <Field
                    name="name"
                    label={translate('CLIENT:RESOURCES:NAME')}
                    margin="normal"
                    fullWidth
                    value={values?.name}
                    component={TextField}
                    disabled
                  />

                  <Field
                    name="document"
                    label={translate('CLIENT:RESOURCES:DOCUMENT')}
                    margin="normal"
                    mask='999.999.999-99'
                    fullWidth
                    value={values?.document}
                    component={MaskedInput}
                    disabled
                  />

                  <Field
                    name="birthdate"
                    label={translate('CLIENT:RESOURCES:BIRTHDATE')}
                    margin="normal"
                    date={values?.birthdate}
                    fullWidth
                    component={DatePicker}
                    disabled
                  />
                </form>
              )}
              </Formik>
          </Paper>
        </Container>
      </Modal>
    </>
  )
}

export default ShowModal;