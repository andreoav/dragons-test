import React from 'react';
import classNames from 'classnames';

import { useFormik } from 'formik';
import { navigate } from '@reach/router';

import { Card } from 'components/Card';
import { Input } from 'components/Input';
import { Button } from 'components/Button';

import useRequest from 'utils/useRequest';

import { schema } from './schema';
import { editDragon } from 'api/dragons';

export default function EditDragon({ dragonId }) {
  const { data: dragon } = useRequest(dragonId ? `v1/dragon/${dragonId}` : null, { suspense: true });

  const formik = useFormik({
    validationSchema: schema,
    initialValues: { name: dragon.name, type: dragon.type },
    onSubmit: async (values, { setSubmitting }) => {
      try {
        await editDragon(dragonId, values);
        await navigate(`/dragons/${dragonId}`);
      } catch (error) {
        setSubmitting(false);
      }
    },
  });

  return (
    <main className="flex justify-center max-w-lg m-auto">
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
              <i className="far fa-edit mr-2"></i> Edit
            </Button>
          </form>
        </Card.Content>
      </Card>
    </main>
  );
}
