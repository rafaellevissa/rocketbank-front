import * as Yup from 'yup';

export const clientSchema = Yup.object().shape({
  name: Yup.string().required(),
  birthdate: Yup.string().required(),
  document: Yup.string().required()
});
