import * as React from 'react';
import { useController, UseControllerProps } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import styles from './Input.module.scss';

const Input = ({
  type,
  label,
  placeholder,
  inputMode,
  errors,
  ...props
}: {
  label: string;
  placeholder?: string;
  type?: 'text' | 'number' | 'date';
  inputMode?: React.HTMLAttributes<HTMLLIElement>['inputMode'];
  errors?: any;
} & UseControllerProps<any>) => {
  const { field } = useController(props);

  return (
    <div className={styles.wrapper}>
      {
        <label
          className={
            styles[`label-${errors[props.name] ? 'invalid' : 'valid'}`]
          }
          htmlFor={props.name}
        >
          {label}
        </label>
      }
      <input
        id={props.name}
        className={errors[props.name] ? styles['input-invalid'] : 'input-valid'}
        {...field}
        aria-invalid={errors[props.name] ? 'true' : 'false'}
        type={type}
        inputMode={inputMode}
        placeholder={placeholder}
      />
      {!errors[props.name] && <p className={styles['error-empty']} />}
      <ErrorMessage
        errors={errors}
        name={props.name}
        render={({ message }) => (
          <p className={styles.error} role="alert">
            {message}
          </p>
        )}
      />
    </div>
  );
};

export default Input;
