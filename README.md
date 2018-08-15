# react-date-range

### Description
Date range component is a component that can be useful for selecting date ranges. 

### Installation
```
npm install @opuscapita/react-date-range
```

### Demo
View the [DEMO](https://opuscapita.github.io/react-date-range)

### Builds
#### UMD
The default build with compiled styles in the .js file. Also minified version available in the lib/umd directory.
#### CommonJS/ES Module
You need to configure your module loader to use `cjs` or `es` fields of the package.json to use these module types.
Also you need to configure sass loader, since all the styles are in sass format.
* With webpack use [resolve.mainFields](https://webpack.js.org/configuration/resolve/#resolve-mainfields) to configure the module type.
* Add [SASS loader](https://github.com/webpack-contrib/sass-loader) to support importing of SASS styles.

### API

| Prop name    | Type              | Default  | Description                              |
| ------------ | ----------------- | -------- | ---------------------------------------- |
| id           | string            | required | ID for the DOM element                   |
| className    | string            | ''       | Class for the DOM element                |
| inputProps   | object            | {}       | Custom props for the input field         |
| inputRef     | function          |          | Input component ref function             |
| onChange     | function          |          | onChange callback returns new date range |
| popoverProps | popoverPropsShape |          | Properties for popover                   |
| width        | string            | '200px'  | Width of the date range input field      |

###### Types

- __popoverPropsShape:__ 

| Prop name         | Type               | Default    | Description                                                               |
| ----------------- | ------------------ | ---------- | ------------------------------------------------------------------------- |
| absoluteRange     | absoluteRangeShape |            | Properties for absolute range                                             |
| isRelativeEnabled | boolean            | false      | If true, relative range is enabled. otherwise relative range is disabled. |
| selectedRangeType | enum               | 'absolute' |                                                                           |
| onChange          | function           |            | onChange callback                                                         |
| relativeRange     | relativeRangeShape |            | Properties for relative range                                             |
| translations      | translationsShape  |            | Translations                                                              |

- __absoluteRangeShape:__ 

| Prop name      | Type     | Default    | Description                                                                                           |
| -------------- | -------- | ---------- | ----------------------------------------------------------------------------------------------------- |
| dateFormat     | string   | 'M/D/YYYY' | Date format as MomentJS [format](https://momentjs.com/docs/#/displaying/format)                       |
| endDate        | string   | ''         | End date                                                                                              |
| numberOfMonths | number   | 2          | The number of months to render [format](https://react-day-picker.js.org/api/DayPicker#numberOfMonths) |
| onChange       | function |            | onChange callback                                                                                     |
| region         | string   | 'en_GB'    | Language region                                                                                       |
| showWeekNumber | boolean  | true       | Show week number in calendar                                                                          |
| startDate      | string   | ''         | Start date                                                                                            |

- __relativeRangeShape:__ 

| Prop name | Type                       | Default | Description       |
| --------- | -------------------------- | ------- | ----------------- |
| endDate   | relativeDateShape          |         | End date          |
| onChange  | function                   |         | onChange callback |
| options   | array of relativeDateShape |         |                   |
| startDate | relativeDateShape          |         |                   |

- __translationsShape:__ 

| Prop name | Type              | Default     | Description              |
| --------- | ----------------- | ----------- | ------------------------ |
| absolute  | string or element | 'Absolute'  | Label for absolute range |
| endDate   | string or element | 'Last day'  | Label for end date       |
| relative  | string or element | 'Relative'  | Label for relative range |
| startDate | string or element | 'First day' | Label for start date     |

- __relativeDateShape:__ 

| Prop name | Type | Default  | Description                      |
| --------- | ---- | -------- | -------------------------------- |
| unit      | enum | required | 'DAY', 'WEEK', 'MONTH' or 'YEAR' |
| timing    | enum | required | 'PREVIOUS', 'CURRENT' or 'NEXT'  |
| moment    | enum | required | 'END' or 'START'                 |

### Code example
```jsx
import React from 'react';
import DateRange from '@opuscapita/react-date-range';

export default class DateRangeView extends React.Component {
  render() {
    return (
      <DateRange
        id="id"
      />
    );
  }
}
```
