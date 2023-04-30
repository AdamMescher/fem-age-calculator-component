import * as React from 'react';
import styles from './Form.module.scss';

interface FormProps {
  id?: string;
  name?: string;
  children: React.ReactNode;
  onSubmit: () => void;
}

const Form = ({ id, name, children, onSubmit, ...rest }: FormProps) => {
  return (
    <form
      data-testid="form"
      id={id}
      name={name}
      className={styles.wrapper}
      onSubmit={onSubmit}
      {...rest}
    >
      {children}
    </form>
  );
};

export default Form;
