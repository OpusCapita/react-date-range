import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';

import {
  withKnobs,
  text,
  object,
  boolean,
  select,
  number,
} from '@storybook/addon-knobs';

import DateRange from '../src/index';

import './stories.scss';

addDecorator(withKnobs);

storiesOf('Date range', module)
  .add('default', () => {
    const relativeEnabled = boolean('Is relative range enabled?', false);
    const selectedRangeType = select('Range type', ['absolute', 'relative'], 'absolute');
console.log(relativeEnabled);
    return (
      <DateRange
        id="default"
        popoverProps={{
          isRelativeEnabled: relativeEnabled,
          selectedRangeType: selectedRangeType,
        }}
      />
    );
  });
