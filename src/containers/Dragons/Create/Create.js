import React from 'react';
import classNames from 'classnames';

import { useFormik } from 'formik';
import { navigate } from '@reach/router';

import { Card } from 'components/Card';
import { Input } from 'components/Input';
import { Button } from 'components/Button';
import { Title } from 'components/Title';

import { schema } from './schema';
import { createDragon } from 'api/dragons';

export default function CreateDragon() {
  const formik = useFormik({
    validationSchema: schema,
    initialValues: { name: '', type: '' },
    onSubmit: async (values, { setSubmitting }) => {
      try {
        await createDragon(values);
        await navigate('/dragons');
      } catch (error) {
        setSubmitting(false);
      }
    },
  });

  return (
    <main className="flex flex-col justify-center max-w-lg m-auto">
      <Title className="text-gray-100 mb-4">
        <i className="fas fa-dragon"></i> Create a new dragon
      </Title>
      <Card className="flex-1">
        <Card.Content>
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-4">
              <Input
                id="name"
                name="name"
                placeholder="Dragon name"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.name}
                className={classNames({ 'with-error': formik.touched.name && formik.errors.name })}
                autoFocus
              />
            </div>
            <div className="mb-4">
              <Input
                type="text"
                id="type"
                name="type"
                placeholder="Dragon type"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.type}
                className={classNames({ 'with-error': formik.touched.type && formik.errors.type })}
              />
            </div>
            <Button type="submit" className="w-full" disabled={formik.isSubmitting}>
              Create
            </Button>
          </form>
        </Card.Content>
      </Card>
    </main>
  );
}
