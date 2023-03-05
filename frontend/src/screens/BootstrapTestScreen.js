import React from 'react';
import Alert from 'react-bootstrap/Alert';
import Acordeon from '../components/bootstrap-test/Acordeon';

export default function BootstrapTestScreen() {
  return (
    <>
      {[
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          This is a {variant} alert—check it out!
        </Alert>
      ))}

      <Acordeon />
    </>
  );
}
