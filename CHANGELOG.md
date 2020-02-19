# Changelog

* In general follow (https://docs.npmjs.com/getting-started/semantic-versioning) versioning.

## <next>

## 2.4.0
* Change calendars to static type instead of popups
* Add OK button that closes the popover
* Change calendar colors for better visualization
* Upgrade packages to latest

## 2.3.2
* Upgrade `@opuscapita/oc-cm-common-layouts`
* Upgrade packages

## 2.3.1
* Upgrade to `react-bootstrap@0.33.1`, add target ref to Overlay
* Upgrade packages
* Fix lint errors
* Fix hot loader

## 2.3.0
* Upgraded react and `@opuscapita/react-floating-select` versions

## 2.2.3
* Fixed periodic default first date

## 2.2.2
* If popup is closed when date range change is not completed, last valid/used range is updated to input field value

## 2.2.1
* Tiny color changes

## 2.2.0
* Added caret icon
* Fixed date input typing
* Select relative days and time period length as the number of weekdays
* Updated dependencies

## 2.1.3
* Fixed timing is converted to number before passing it to callback function

## 2.1.2
* Added translation for select placeholder
* Fixed radio button left margin

## 2.1.1
* Fixed typing minus sign

## 2.1.0
* It is not possible to enter valid date manually by entering numbers in First day / Last day fields. Autocorrect functionality messes up the date always
* Alignment errors (radiobuttons are not centered horizontally and in period selection fields below To-title are not aligned correctly
* Changes translations prop types, only strings allowed

## 2.0.9
* Updated npm packages

## 2.0.8
* Fixed period selection: date is updated on blur, not on each input change

## 2.0.7
* Fixed absolute prop handling and period view rendering in IE

## 2.0.6
* Added classname prop for absolute range

## 2.0.5
* Fixed peer dependency styled-components

## 2.0.4
* Updated npm packages

## 2.0.3
* Fixed period so that moment is always set

## 2.0.2
* Fixed: period moment of startDate set only if undefined

## 2.0.1
* Fixed: period start date moment

## 2.0.0
* Added period type
* Enhanced localization
* Better state handling

## 1.1.1
* Updated @opuscapita/react-datetime version

## 1.1.0
* Relative range initialization and labels
* Major state handling changes

## 1.0.4
* Allowed input value update
* Updated versions of dependencies

## 1.0.3
* Fixed changing month & year does not close overlay

## 1.0.2
* Fixed startDate output format
* Fixed input initialization

## 1.0.1
* Fixed: react-day-picker's click events don't close popover
* Fixed: input field's default value rendering

## 1.0.0
* Initial release
