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
  day: string;
  month: string;
  year: string;
}

interface AgeCalculatorProps {}

const AgeCalculator = ({}: AgeCalculatorProps) => {
  const [days, setDays] = React.useState<string | null>(null);
  const [months, setMonths] = React.useState<string | null>(null);
  const [years, setYears] = React.useState<string | null>(null);

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
      day: parseInt(day),
      month: parseInt(month),
      year: parseInt(year),
    };
    var dt = DateTime.fromObject({
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
      const newDays = Math.floor(diff?.days).toString();

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
          className={styles.form}
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
        <IconButton type="submit" label="submit" form="ageCalculatorForm" />
      </div>
      <AgeCalcResults
        measures={[
          { value: years, metric: 'years ' },
          { value: months, metric: 'months ' },
          { value: days, metric: 'days ' },
        ]}
      />
    </section>
  );
};

export default AgeCalculator;
