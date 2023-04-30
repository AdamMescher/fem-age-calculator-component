import * as React from 'react';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import Arrow from '../../../public/assets/images/icons/icon-arrow.svg';
import styles from './IconButton.module.scss';

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
}

const IconButton = ({ label, ...rest }: IconButtonProps) => {
  return (
    <button className={styles.wrapper} {...rest}>
      <VisuallyHidden.Root>{label}</VisuallyHidden.Root>
      <Arrow />
    </button>
  );
};

export default IconButton;
