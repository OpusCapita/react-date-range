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

| Prop name     | Type               | Default  | Description                              |
| ------------- | ------------------ | -------- | ---------------------------------------- |
| id            | string             | required | ID for the DOM element                   |
| absoluteRange | absoluteRangeShape |          | Properties for absolute range            |
| className     | string             | ''       | Class for the DOM element                |
| enabled       | enabledShape       | ''       | Properties for enabling range types      |
| inputProps    | object             | {}       | Custom props for the input field         |
| inputRef      | function           |          | Input component ref function             |
| onChange      | function           |          | onChange callback returns new date range |
| period        | periodShape        |          | Properties for period                    |
| relativeRange | relativeRangeShape |          | Properties for relative range            |
| translations  | translationsShape  |          | Translations                             |
| width         | string             | '200px'  | Width of the date range input field      |

- __absoluteRangeShape:__

| Prop name      | Type     | Default    | Description                                                                                           |
| -------------- | -------- | ---------- | ----------------------------------------------------------------------------------------------------- |
| className      | string   | ''         | The class attribute of the element                                                                    |
| dateFormat     | string   | 'M/D/YYYY' | Date format as MomentJS [format](https://momentjs.com/docs/#/displaying/format)                       |
| endDate        | string   | ''         | End date                                                                                              |
| numberOfMonths | number   | 2          | The number of months to render [format](https://react-day-picker.js.org/api/DayPicker#numberOfMonths) |
| onChange       | function |            | onChange callback                                                                                     |
| region         | string   | 'en_GB'    | Language region                                                                                       |
| showOverlay    | number   | 0          | 0: no calender, 1: first day calendar, 2: last day calendar open by default                           |
| showWeekNumber | boolean  | true       | Show week number in calendar                                                                          |
| startDate      | string   | ''         | Start date                                                                                            |

- __enabledShape:__

| Prop name | Type | Default | Description                         |
| --------- | ---- | ------- | ----------------------------------- |
| absolute  | bool | true    | True, if absolute range is enabled. |
| period    | bool | false   | True, if period is enabled.         |
| relative  | bool | false   | True, if relative range is enabled. |

- __periodShape:__

| Prop name | Type              | Default | Description       |
| --------- | ----------------- | ------- | ----------------- |
| endDate   | periodDateShape   |         | End date          |
| onChange  | function          |         | onChange callback |
| startDate | relativeDateShape |         | Start date        |

- __periodDateShape:__

| Prop name | Type   | Default  | Description                                                         |
| --------- | ------ | -------- | ------------------------------------------------------------------- |
| unit      | enum   | required | 'DAY', 'WEEK' or 'MONTH'                                            |
| timing    | number | required | Negative or positive integer                                        |
| moment    | enum   | required | 'END' if timing is positive, 'START' if timing is negative integer. |
| periodic  | bool   | true     | True, if date is periodic.                                          |

- __relativeDateShape:__

| Prop name | Type | Default  | Description                      |
| --------- | ---- | -------- | -------------------------------- |
| unit      | enum | required | 'DAY', 'WEEK', 'MONTH' or 'YEAR' |
| timing    | enum | required | 'PREVIOUS', 'CURRENT' or 'NEXT'  |
| moment    | enum | required | 'END' or 'START'                 |

- __relativeRangeShape:__

| Prop name | Type              | Default | Description       |
| --------- | ----------------- | ------- | ----------------- |
| endDate   | relativeDateShape |         | End date          |
| onChange  | function          |         | onChange callback |
| startDate | relativeDateShape |         | Start date        |

- __translationsShape:__

| Prop name            | Type                   | Default     | Description                     |
| -------------------- | ---------------------- | ----------- | ------------------------------- |
| absolute             | string                 | 'Absolute'  | Absolute range label            |
| dates                | datesTranslationsShape |             |                                 |
| day                  | dayTranslationShape    |             |                                 |
| endDate              | string                 | 'Last day'  | Last date label                 |
| endDatePlaceholder   | string                 | 'Select...' | Placeholder of select component |
| from                 | string                 | 'From'      | From date label                 |
| month                | monthTranslationShape  |             |                                 |
| period               | string                 | 'Period'    | Period label                    |
| relative             | string                 | 'Relative'  | Relative range label            |
| startDate            | string                 | 'First day' | First date label                |
| startDatePlaceholder | string                 | 'Select...' | Placeholder of select component |
| to                   | string                 | 'To'        | To label                        |
| week                 | weekTranslationShape   |             |                                 |

- __datesTranslationsShape:__

| Prop name               | Type   | Default                       | Description |
| ----------------------- | ------ | ----------------------------- | ----------- |
| endOfTheCurrentMonth    | string | 'End of the current month'    |             |
| endOfTheCurrentWeek     | string | 'End of the current week'     |             |
| endOfTheCurrentYear     | string | 'End of the current year'     |             |
| endOfTheNextMonth       | string | 'End of the next month'       |             |
| endOfTheNextWeek        | string | 'End of the next week'        |             |
| endOfTheNextYear        | string | 'End of the next year'        |             |
| endOfThePreviousMonth   | string | 'End of the previous month'   |             |
| endOfThePreviousWeek    | string | 'End of the previous week'    |             |
| endOfThePreviousYear    | string | 'End of the previous year'    |             |
| startOfTheCurrentMonth  | string | 'Start of the current month'  |             |
| startOfTheCurrentWeek   | string | 'Start of the current week'   |             |
| startOfTheCurrentYear   | string | 'Start of the current year'   |             |
| startOfTheNextMonth     | string | 'Start of the next month'     |             |
| startOfTheNextWeek      | string | 'Start of the next week'      |             |
| startOfTheNextYear      | string | 'Start of the next year'      |             |
| startOfThePreviousMonth | string | 'Start of the previous month' |             |
| startOfThePreviousWeek  | string | 'Start of the previous week'  |             |
| startOfThePreviousYear  | string | 'Start of the previous year'  |             |
| today                   | string | 'Today'                       |             |
| tomorrow                | string | 'Tomorrow'                    |             |
| yesterday               | string | 'Yesterday'                   |             |

- __dayTranslationShape:__

| Prop name | Type   | Default | Description             |
| --------- | ------ | ------- | ----------------------- |
| plural    | string | 'days'  | Label for plural of day |
| singular  | string | 'day'   | Label for single day    |

- __monthTranslationShape:__

| Prop name | Type   | Default  | Description               |
| --------- | ------ | -------- | ------------------------- |
| plural    | string | 'months' | Label for plural of month |
| singular  | string | 'month'  | Label for single month    |

- __weekTranslationShape:__

| Prop name | Type   | Default | Description              |
| --------- | ------ | ------- | ------------------------ |
| plural    | string | 'weeks' | Label for plural of week |
| singular  | string | 'week'  | Lable for single week    |

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
