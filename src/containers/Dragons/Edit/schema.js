import * as yup from 'yup';

export const schema = yup.object({
  name: yup.string().required(),
  type: yup.string().required(),
});
