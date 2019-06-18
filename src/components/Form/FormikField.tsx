import React from 'react';
import { Field } from 'formik';

type TProps = {
  name: string;
  type: string;
  onChange: (name: string, event: any) => void;
};

const FormikField: React.SFC<TProps> = ({ name, type, onChange }) => (
  <Field
    name={name}
    type={type}
    onChange={(e: any) => onChange(name, e.target.value)}
  />
);

export default FormikField;
