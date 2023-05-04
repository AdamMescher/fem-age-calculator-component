import * as React from 'react';
import Image from 'next/image';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import styles from './IconButton.module.scss';

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  icon?: string;
}

const IconButton = ({ label, icon, ...rest }: IconButtonProps) => {
  return (
    <button className={styles.wrapper} {...rest}>
      <VisuallyHidden.Root>{label}</VisuallyHidden.Root>
      <img
        src={`/assets/images/icons/icon-${icon}.svg`}
        alt={`${label} icon`}
      />
    </button>
  );
};

export default IconButton;
