import * as React from 'react';
import { useSpring, animated } from 'react-spring';
import styles from './AnimatedNumber.module.scss';

type AnimatedNumberProps = {
  start: number;
  end: number;
};

const AnimatedNumber = ({ start, end }: AnimatedNumberProps) => {
  const config = {
    mass: 1,
    tension: 20,
    friction: 10,
    duration: 1000,
  };

  const { number } = useSpring({
    from: { number: start },
    number: end,
    config,
  });

  return (
    <animated.span className={styles.wrapper} data-testid="animated-number">
      {number.to((num: number) => num.toFixed(0))}
    </animated.span>
  );
};

export default AnimatedNumber;
