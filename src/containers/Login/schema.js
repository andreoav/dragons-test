import * as yup from 'yup';

export const schema = yup.object({
  username: yup
    .string()
    .min(4)
    .required(),
  password: yup
    .string()
    .min(4)
    .required(),
});
