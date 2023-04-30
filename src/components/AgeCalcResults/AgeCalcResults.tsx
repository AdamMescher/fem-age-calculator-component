import * as React from 'react';
import CountUp from 'react-countup';
import styles from './AgeCalcResults.module.scss';

type Measure = {
  value: number;
  metric: string;
};

type ResultProps = {
  value: number;
  metric: string;
};

interface AgeCalcResultsProps {
  measures: Measure[];
}

const Result = ({ value, metric }: ResultProps) => {
  const countAnimationDuration = 1;

  return (
    <div className={styles.result}>
      <p>
        <span>
          {value ? (
            <CountUp end={value} duration={countAnimationDuration} />
          ) : (
            '--'
          )}
        </span>
        {metric}
      </p>
    </div>
  );
};

const AgeCalcResults = ({ measures }: AgeCalcResultsProps) => {
  return (
    <div className={styles.wrapper} data-testid="age-calc-results">
      {measures.map((measure) => (
        <Result
          key={measure.value.toString() + measure.metric}
          value={measure.value}
          metric={measure.metric}
        />
      ))}
    </div>
  );
};

export default AgeCalcResults;
