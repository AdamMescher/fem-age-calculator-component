import * as React from 'react';
import AnimatedNumber from '@/components/AnimatedNumber';
import styles from './AgeCalcResults.module.scss';

type Measure = {
  value:  string | null;
  metric: string;
};

type ResultProps = {
  value: number;
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
        <span>--</span>
        {metric}
      </p>
    </div>
  );
};

const Result = ({ value, metric }: ResultProps) => {
  console.log({ value, metric });
  return (
    <div className={styles.result} key={metric}>
      <p>
        <span>
          <AnimatedNumber start={0} end={parseInt(value)} />
        </span>
        {metric}
      </p>
    </div>
  );
};

const AgeCalcResults = ({ measures }: AgeCalcResultsProps) => {
  console.log({ measures });
  return (
    <div className={styles.wrapper} data-testid="age-calc-results">
      {measures.map((measure) =>
        measure.value !== null ? (
          <Result
            key={measure.value + measure.metric}
            value={parseInt(measure.value)}
            metric={measure.metric}
          />
        ) : (
          <ResultNull metric={measure.metric} />
        )
      )}
    </div>
  );
};

export default AgeCalcResults;
