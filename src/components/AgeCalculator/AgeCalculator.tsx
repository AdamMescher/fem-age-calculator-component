'use client';

import * as React from 'react';
import { useForm } from 'react-hook-form';
import { DateTime } from 'luxon';
import Form from '@/components/Form';
import Input from '@/components/Input';
import IconButton from '@/components/IconButton';
import AgeCalcResults from '@/components/AgeCalcResults';
import styles from './AgeCalculator.module.scss';
import rules from './rules';

interface DateFormValues {
  day: string | undefined | null;
  month: string | undefined | null;
  year: string | undefined | null;
}

interface AgeCalculatorProps { }

const AgeCalculator = ({ }: AgeCalculatorProps) => {
  const [days, setDays] = React.useState<any>(null);
  const [months, setMonths] = React.useState<any>(null);
  const [years, setYears] = React.useState<any>(null);

  const {
    handleSubmit,
    control,
    setError,
    formState: { errors },
  } = useForm<DateFormValues>({
    defaultValues: {
      day: '',
      month: '',
      year: '',
    },
    mode: 'onBlur',
  });

  const onSubmit = (data: DateFormValues) => {
    const { day, month, year } = data;

    const date = {
      day: Math.floor(Number(day)),
      month: Math.floor(Number(month)),
      year: Math.floor(Number(year)),
    }

    const dt = DateTime.fromObject({
      day: date.day,
      month: date.month,
      year: date.year,
    });

    if (!dt.isValid) {
      setError(
        'day',
        {
          type: 'invalidDate',
          message: 'Must be a valid date',
        },
        { shouldFocus: true }
      );
      setError('month', {
        type: 'invalidDate',
      });
      setError('year', {
        type: 'invalidDate',
      });
    } else {
      const start = DateTime.fromObject({
        year: date.year,
        month: date.month,
        day: date.day,
      });
      const end = DateTime.now();
      const diff = end.diff(start, ['years', 'months', 'days']).toObject();

      const newYears = diff?.years?.toString();
      const newMonths = diff?.months?.toString();
      const newDays = Math.floor(Number(diff?.days))?.toString();

      setYears(newYears);
      setMonths(newMonths);
      setDays(newDays);
    }
  };

  return (
    <section className={styles.wrapper} data-testid="age-calculator">
      <div>
        <Form
          id="ageCalculatorForm"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            type="text"
            inputMode="numeric"
            name="day"
            label="day"
            placeholder="DD"
            control={control}
            rules={rules.day}
            errors={errors}
          />
          <Input
            type="text"
            inputMode="numeric"
            name="month"
            label="month"
            placeholder="MM"
            control={control}
            rules={rules.month}
            errors={errors}
          />
          <Input
            type="text"
            inputMode="numeric"
            name="year"
            label="year"
            placeholder="YYYY"
            control={control}
            rules={rules.year}
            errors={errors}
          />
        </Form>
      </div>
      <div className={styles.divider}>
        <div />
        <div />
        <IconButton type="submit" label="submit" form="ageCalculatorForm" icon="arrow" />
      </div>
      <AgeCalcResults
        measures={[
          { value: years, metric: 'year' },
          { value: months, metric: 'month' },
          { value: days, metric: 'day' },
        ]}
      />
    </section>
  );
};

export default AgeCalculator;
