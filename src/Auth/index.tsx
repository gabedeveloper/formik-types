import React, { useState } from 'react';
import { FormikForm, FormikField } from '../components';
import { TFormsTypes } from '../components/Form/FormTypes';
import useLocalStorage from '../useLocalStorage';
import { FormikActions, FormikProps } from 'formik';

const Auth = () => {
  const regDataStorage: string | null = window.localStorage.getItem('regData');
  const [state, setState] = useState(
    regDataStorage ? JSON.parse(regDataStorage) : {},
  );
  const [regData, setRegData] = useLocalStorage('regData', '');

  const handleChange = (field: string, value: string) => {
    setState(() => ({
      ...state,
      [field]: value,
    }));

    setRegData({
      ...state,
      [field]: value,
    });
  };

  const initialValues = {
    firstName: regData.firstName,
    lastName: regData.lastName,
    phone: regData.phone,
    age: regData.age,
    country: regData.country,
  };

  const submitFormik = (
    values: TFormsTypes,
    actions: FormikActions<TFormsTypes>,
  ) => {
    console.log(values);
    console.log(actions);
  };

  return (
    <FormikForm initialValues={initialValues} onSubmit={submitFormik}>
      {(formikBag: FormikProps<TFormsTypes>) => (
        <React.Fragment>
          <FormikField name="firstName" type="text" onChange={handleChange} />
          <FormikField name="lastName" type="text" onChange={handleChange} />
          <FormikField name="phone" type="text" onChange={handleChange} />
          <FormikField name="age" type="text" onChange={handleChange} />
          <FormikField name="country" type="text" onChange={handleChange} />
          <FormikField name="submit" type="submit" onChange={handleChange} />
        </React.Fragment>
      )}
    </FormikForm>
  );
};

export default Auth;
