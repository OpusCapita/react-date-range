import React from 'react';
import DateRange from '../../src/index';

export default class DateRangeView extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      absoluteRange: {
        endDate: '2020-03-18T23:59:59.999Z',
        startDate: '2020-03-17T00:00:00.000Z',
        dateFormat: 'DD/MM/YY',
      },
    };
  }

  render() {
    const { absoluteRange } = this.state;
    return (
      <>
        <div style={{ padding: '20px' }}>
          <h4>Absolute period (default)</h4>
          <DateRange
            id="example1"
            absoluteRange={absoluteRange}
            onChange={(range) => {
              console.log(range);
            }}
          />
          <h4>Absolute or relative</h4>
          <DateRange id="example2" enabled={{ absolute: true, relative: true }} />
          <h4>Absolute, relative or period</h4>
          <DateRange
            id="example3"
            enabled={{ absolute: true, relative: true, period: true }}
            absoluteRange={{ className: 'test', dateFormat: 'L' }}
          />
        </div>
      </>
    );
  }
}
