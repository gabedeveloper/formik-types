import React from 'react';
import { Formik, FormikActions } from 'formik';
import { TFormsTypes, TFormsInitialValues } from './FormTypes';

type TProps = {
  initialValues: TFormsInitialValues;
  onSubmit: (values: TFormsTypes, actions: FormikActions<TFormsTypes>) => void;
  children: React.ReactNode;
};

const FormikForm: React.FC<TProps> = ({
  initialValues,
  onSubmit,
  children,
}) => (
  <Formik
    initialValues={initialValues}
    onSubmit={(values, actions) => onSubmit(values, actions)}
  >
    {children}
  </Formik>
);

export default FormikForm;
