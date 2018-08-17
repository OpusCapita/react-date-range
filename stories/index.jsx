import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import {
  withKnobs,
  text,
  boolean,
  select,
  number,
} from '@storybook/addon-knobs';

import DateRange from '../src/index';

import './stories.scss';

addDecorator(withKnobs);

storiesOf('Date range', (module))
  .add('default', () => {
    const width = text('Width', '200px');
    const translations = {
      startDate: text('Start date', 'First day'),
      endDate: text('End date', 'Last day'),
      absolute: text('Absolute', 'Absolute'),
      relative: text('Relative', 'Relative'),
    };
    const relativeEnabled = boolean('Relative range enabled', false);
    const selectedRangeType = select('Range type', ['absolute', 'relative'], 'absolute');
    const dateFormat = text('Date format', 'DD.MM.YYYY');
    const numberOfMonths = number('Number of months', 2);
    const region = text('Region', 'en_GB');
    const showWeekNumbers = boolean('Show week numbers', true);
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
