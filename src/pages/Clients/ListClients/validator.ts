import * as Yup from 'yup';

export const clientSchema = Yup.object().shape({
  name: Yup.string().required('ERROR:VALIDATION:REQUIRED'),
  birthdate: Yup.date().typeError('ERROR:VALIDATION:DATE').required('ERROR:VALIDATION:REQUIRED'),
  document: Yup.string().required('ERROR:VALIDATION:REQUIRED')
});
