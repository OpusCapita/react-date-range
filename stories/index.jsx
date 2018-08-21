import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import {
  withKnobs,
  text,
  boolean,
  number,
  object,
  select,
} from '@storybook/addon-knobs';

import DateRange from '../src/index';

import './stories.scss';

addDecorator(withKnobs);

storiesOf('Date range', (module))
  .add('default', () => {
    const width = text('Width', '200px');
    const translations = {
      startDate: text('Start date label', 'First day'),
      endDate: text('End date label', 'Last day'),
      absolute: text('Absolute label', 'Absolute'),
      relative: text('Relative label', 'Relative'),
    };
    const relativeEnabled = boolean('Relative range enabled', false);
    const selectedRangeType = select('Range type', ['absolute', 'relative'], 'absolute');
    const dateFormat = text('Date format', 'DD.MM.YYYY');
    const numberOfMonths = number('Number of months', 2);
    const region = text('Region', 'en_GB');
    const showWeekNumbers = boolean('Show week numbers', true);
    const absoluteStartDate = text('Absolute start date', '2013-04-22');
    const absoluteEndDate = text('Absolute end date', '2013-04-22');
    const popoverProps = {
      isRelativeEnabled: relativeEnabled,
      selectedRangeType,
      translations,
      absoluteRange: {
        dateFormat,
        numberOfMonths,
        region,
        showWeekNumbers,
        endDate: absoluteEndDate,
        startDate: absoluteStartDate,
      },
    };

    return (
      <DateRange
        id="default"
        width={width}
        popoverProps={popoverProps}
        onChange={action('handleChange')}
      />
    );
  })
  .add('relative range', () => {
    const width = text('Width', '200px');
    const translations = {
      startDate: text('Start date label', 'First day'),
      endDate: text('End date label', 'Last day'),
      absolute: text('Absolute label', 'Absolute'),
      relative: text('Relative label', 'Relative'),
    };
    const relativeEnabled = boolean('Relative range enabled', true);
    const selectedRangeType = select('Range type', ['absolute', 'relative'], 'relative');
    const dateFormat = text('Date format', 'DD.MM.YYYY');
    const numberOfMonths = number('Number of months', 2);
    const region = text('Region', 'en_GB');
    const showWeekNumbers = boolean('Show week numbers', true);
    const relativeStartDate = object(
      'Relative start date',
      {
        label: 'Today',
        value: { unit: 'DAY', timing: 'CURRENT', moment: 'START' },
        granularity: 'DAY',
      },
    );
    const relativeEndDate = object(
      'Relative end date',
      {
        label: 'Tomorrow',
        value: { unit: 'DAY', timing: 'NEXT', moment: 'END' },
        granularity: 'DAY',
      },
    );
    const popoverProps = {
      isRelativeEnabled: relativeEnabled,
      selectedRangeType,
      translations,
      absoluteRange: {
        dateFormat,
        numberOfMonths,
        region,
        showWeekNumbers,
      },
      relativeRange: {
        endDate: relativeEndDate,
        startDate: relativeStartDate,
      },
    };

    return (
      <DateRange
        id="default"
        width={width}
        popoverProps={popoverProps}
        onChange={action('handleChange')}
      />
    );
  });
