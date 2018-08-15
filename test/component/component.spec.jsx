/* eslint-disable no-unused-expressions */
import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

import DateRange from '../../src/index';

describe('DateRange component', () => {
  it('is rendered', () => {
    const wrapper = mount(<DateRange id="test" />);
    expect(wrapper).to.exist;
  });
});
