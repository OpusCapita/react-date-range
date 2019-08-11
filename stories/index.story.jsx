import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import {
  text,
  boolean,
  number,
  object,
} from '@storybook/addon-knobs';

import DateRange from '../src/index';

import './stories.scss';

const stories = storiesOf('Date range', module);
stories.add('absolute (default)', () => {
  const width = text('Width', '200px');
  const translations = {
    startDate: text('Start date label', 'First day'),
    endDate: text('End date label', 'Last day'),
    absolute: text('Absolute label', 'Absolute'),
    relative: text('Relative label', 'Relative'),
  };
  const absoluteEnabled = boolean('Absolute range enabled', true);
  const periodEnabled = boolean('Period enabled', false);
  const relativeEnabled = boolean('Relative range enabled', false);
  const dateFormat = text('Date format', 'DD.MM.YYYY');
  const numberOfMonths = number('Number of months', 1);
  const region = text('Region', 'en_GB');
  const showWeekNumbers = boolean('Show week numbers', true);
  const absoluteStartDate = text('Absolute start date', '2013-04-22');
  const absoluteEndDate = text('Absolute end date', '2013-04-22');
  const absoluteRange = {
    dateFormat,
    numberOfMonths,
    region,
    showWeekNumbers,
    endDate: absoluteEndDate,
    startDate: absoluteStartDate,
  };
  const enabled = {
    absolute: absoluteEnabled,
    period: periodEnabled,
    relative: relativeEnabled,
  };

  return (
    <DateRange
      id="default"
      absoluteRange={absoluteRange}
      enabled={enabled}
      onChange={action('handleChange')}
      translations={translations}
      width={width}
    />
  );
});

stories.add('relative range', () => {
  const width = text('Width', '200px');
  const translations = {
    startDate: text('Start date label', 'First day'),
    endDate: text('End date label', 'Last day'),
    absolute: text('Absolute label', 'Absolute'),
    relative: text('Relative label', 'Relative'),
  };
  const absoluteEnabled = boolean('Absolute range enabled', true);
  const periodEnabled = boolean('Period enabled', false);
  const relativeEnabled = boolean('Relative range enabled', true);
  const dateFormat = text('Date format', 'DD.MM.YYYY');
  const numberOfMonths = number('Number of months', 1);
  const region = text('Region', 'en_GB');
  const showWeekNumbers = boolean('Show week numbers', true);
  const relativeStartDate = object(
    'Relative start date',
    {
      unit: 'DAY',
      timing: 'CURRENT',
      moment: 'START',
    },
  );
  const relativeEndDate = object(
    'Relative end date',
    {
      unit: 'DAY',
      timing: 'NEXT',
      moment: 'END',
    },
  );
  const enabled = {
    absolute: absoluteEnabled,
    period: periodEnabled,
    relative: relativeEnabled,
  };
  const absoluteRange = {
    dateFormat,
    numberOfMonths,
    region,
    showWeekNumbers,
  };
  const relativeRange = {
    endDate: relativeEndDate,
    startDate: relativeStartDate,
  };

  return (
    <DateRange
      id="default"
      absoluteRange={absoluteRange}
      enabled={enabled}
      onChange={action('handleChange')}
      relativeRange={relativeRange}
      translations={translations}
      width={width}
    />
  );
});

stories.add('period', () => {
  const width = text('Width', '200px');
  const translations = {
    startDate: text('Start date label', 'First day'),
    endDate: text('End date label', 'Last day'),
    absolute: text('Absolute label', 'Absolute'),
    relative: text('Relative label', 'Relative'),
  };
  const absoluteEnabled = boolean('Absolute range enabled', true);
  const periodEnabled = boolean('Period enabled', true);
  const relativeEnabled = boolean('Relative range enabled', true);
  const dateFormat = text('Date format', 'DD.MM.YYYY');
  const numberOfMonths = number('Number of months', 1);
  const region = text('Region', 'en_GB');
  const showWeekNumbers = boolean('Show week numbers', true);
  const periodStartDate = object(
    'Period start date',
    {
      unit: 'DAY',
      timing: 'CURRENT',
    },
  );
  const periodEndDate = object(
    'Period end date',
    {
      unit: 'DAY',
      timing: 5,
      periodic: true,
    },
  );
  const enabled = {
    absolute: absoluteEnabled,
    period: periodEnabled,
    relative: relativeEnabled,
  };
  const absoluteRange = {
    dateFormat,
    numberOfMonths,
    region,
    showWeekNumbers,
  };
  const period = {
    endDate: periodEndDate,
    startDate: periodStartDate,
  };

  return (
    <DateRange
      id="default"
      absoluteRange={absoluteRange}
      enabled={enabled}
      onChange={action('handleChange')}
      period={period}
      translations={translations}
      width={width}
    />
  );
});

stories.add('all', () => {
  const width = text('Width', '200px');
  const translations = {
    startDate: text('Start date label', 'First day'),
    endDate: text('End date label', 'Last day'),
    absolute: text('Absolute label', 'Absolute'),
    relative: text('Relative label', 'Relative'),
  };
  const absoluteEnabled = boolean('Absolute range enabled', true);
  const periodEnabled = boolean('Period enabled', true);
  const relativeEnabled = boolean('Relative range enabled', true);
  const dateFormat = text('Date format', 'DD.MM.YYYY');
  const numberOfMonths = number('Number of months', 1);
  const region = text('Region', 'en_GB');
  const showWeekNumbers = boolean('Show week numbers', true);
  const relativeStartDate = object(
    'Relative start date',
    {
      unit: 'DAY',
      timing: 'CURRENT',
      moment: 'START',
    },
  );
  const relativeEndDate = object(
    'Relative end date',
    {
      unit: 'DAY',
      timing: 'NEXT',
      moment: 'END',
    },
  );
  const enabled = {
    absolute: absoluteEnabled,
    period: periodEnabled,
    relative: relativeEnabled,
  };
  const absoluteRange = {
    dateFormat,
    numberOfMonths,
    region,
    showWeekNumbers,
  };
  const relativeRange = {
    endDate: relativeEndDate,
    startDate: relativeStartDate,
  };

  return (
    <DateRange
      id="default"
      absoluteRange={absoluteRange}
      enabled={enabled}
      onChange={action('handleChange')}
      relativeRange={relativeRange}
      translations={translations}
      width={width}
    />
  );
});

stories.add('Range field', () => {
  const width = text('Width', '200px');
  const translations = {
    startDate: text('Start date label', 'First day'),
    endDate: text('End date label', 'Last day'),
    absolute: text('Absolute label', 'Absolute'),
    relative: text('Relative label', 'Relative'),
  };
  const absoluteEnabled = boolean('Absolute range enabled', true);
  const periodEnabled = boolean('Period enabled', true);
  const relativeEnabled = boolean('Relative range enabled', true);
  const dateFormat = text('Date format', 'DD.MM.YYYY');
  const numberOfMonths = number('Number of months', 1);
  const region = text('Region', 'en_GB');
  const showWeekNumbers = boolean('Show week numbers', true);
  const periodStartDate = object(
    'Period start date',
    {
      unit: 'DAY',
      timing: 'CURRENT',
    },
  );
  const periodEndDate = object(
    'Period end date',
    {
      unit: 'DAY',
      timing: 5,
      periodic: true,
    },
  );
  const enabled = {
    absolute: absoluteEnabled,
    period: periodEnabled,
    relative: relativeEnabled,
  };
  const absoluteRange = {
    dateFormat,
    numberOfMonths,
    region,
    showWeekNumbers,
  };
  const period = {
    endDate: periodEndDate,
    startDate: periodStartDate,
  };
  const rangeField = {
    onChange: action('handleChange'),
    options: [
      {
        label: 'Created',
        value: 'created',
      },
      {
        label: 'Modified',
        value: 'modified',
      },
    ],
    value: {
      label: 'Modified',
      value: 'modified',
    }
  };

  return (
    <DateRange
      id="default"
      absoluteRange={absoluteRange}
      enabled={enabled}
      onChange={action('handleChange')}
      period={period}
      rangeField={rangeField}
      translations={translations}
      width={width}
    />
  );
});
