import * as React from 'react';
import AnimatedNumber from '@/components/AnimatedNumber';
import styles from './AgeCalcResults.module.scss';

type Measure = {
  value: string | null;
  metric: string;
};

type ResultProps = {
  value: string;
  metric: string;
};

type ResultNullProps = {
  metric: string;
};

interface AgeCalcResultsProps {
  measures: Measure[];
}

const ResultNull = ({ metric }: ResultNullProps) => {
  return (
    <div className={styles.result} key={metric}>
      <p>
        <span>- -</span>
        {' '}
        {metric}
      </p>
    </div>
  );
};

const Result = ({ value, metric }: ResultProps) => {
  const end = parseInt(value);
  return (
    <div className={styles.result} key={metric}>
      <p>
        <AnimatedNumber start={0} end={end} />
        {' '}
        {metric}
      </p>
    </div>
  );
};

const AgeCalcResults = ({ measures }: AgeCalcResultsProps) => {
  return (
    <div className={styles.wrapper} data-testid="age-calc-results">
      {measures.map((measure) =>
        measure.value !== null ? (
          <Result
            key={measure.value + measure.metric}
            value={measure.value}
            metric={measure.value === "1" ? measure.metric : measure.metric + 's'}

          />
        ) : (
          <ResultNull key={measure.metric} metric={measure.metric + 's'} />
        )
      )}
    </div>
  );
};

export default AgeCalcResults;
