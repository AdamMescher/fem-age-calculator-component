const rules = {
  day: {
    pattern: {
      value: /^[0-9]{1,2}$/,
      message: 'Must be a valid day',
    },
    required: {
      value: true,
      message: 'This field is required',
    },
    min: {
      value: 1,
      message: 'Must be a valid day',
    },
    max: {
      value: 31,
      message: 'Must be a valid day',
    },
  },
  month: {
    pattern: {
      value: /^[0-9]{1,2}$/,
      message: 'Must be a valid month',
    },
    required: {
      value: true,
      message: 'This field is required',
    },
    min: {
      value: 1,
      message: 'Must be a valid month',
    },
    max: {
      value: 12,
      message: 'Must be a valid month',
    },
  },
  year: {
    pattern: {
      value: /^[0-9]{1,4}$/,
      message: 'Must be a valid year',
    },
    required: {
      value: true,
      message: 'This field is required',
    },
    max: {
      value: new Date().getFullYear(),
      message: 'Must be in the past',
    },
  },
};

export default rules;
