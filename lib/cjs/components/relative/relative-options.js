"use strict";

exports.__esModule = true;
exports.getRelativeOption = exports["default"] = void 0;

var _constants = _interopRequireDefault(require("./constants"));

var _values = _interopRequireDefault(require("./values"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var relativeOptions = function relativeOptions(dates) {
  return [{
    label: dates.yesterday,
    value: _values["default"].yesterday,
    order: 1,
    granularity: _constants["default"].DAY,
    past: true
  }, {
    label: dates.previousWeekday,
    value: _values["default"].previousWeekday,
    order: 1,
    granularity: _constants["default"].WEEKDAY
  }, {
    label: dates.today,
    value: _values["default"].today,
    order: 2,
    granularity: _constants["default"].DAY
  }, {
    label: dates.tomorrow,
    value: _values["default"].tomorrow,
    order: 3,
    granularity: _constants["default"].DAY
  }, {
    label: dates.followingWeekday,
    value: _values["default"].followingWeekday,
    order: 2,
    granularity: _constants["default"].WEEKDAY
  }, {
    label: dates.startOfThePreviousWeek,
    value: _values["default"].startOfThePreviousWeek,
    order: 1,
    granularity: _constants["default"].WEEK,
    past: true
  }, {
    label: dates.endOfThePreviousWeek,
    value: _values["default"].endOfThePreviousWeek,
    order: 2,
    granularity: _constants["default"].WEEK,
    past: true
  }, {
    label: dates.startOfTheCurrentWeek,
    value: _values["default"].startOfTheCurrentWeek,
    order: 3,
    granularity: _constants["default"].WEEK,
    past: true
  }, {
    label: dates.endOfTheCurrentWeek,
    value: _values["default"].endOfTheCurrentWeek,
    order: 4,
    granularity: _constants["default"].WEEK
  }, {
    label: dates.startOfTheNextWeek,
    value: _values["default"].startOfTheNextWeek,
    order: 5,
    granularity: _constants["default"].WEEK
  }, {
    label: dates.endOfTheNextWeek,
    value: _values["default"].endOfTheNextWeek,
    order: 6,
    granularity: _constants["default"].WEEK
  }, {
    label: dates.startOfThePreviousMonth,
    value: _values["default"].startOfThePreviousMonth,
    order: 1,
    granularity: _constants["default"].MONTH,
    past: true
  }, {
    label: dates.endOfThePreviousMonth,
    value: _values["default"].endOfThePreviousMonth,
    order: 2,
    granularity: _constants["default"].MONTH,
    past: true
  }, {
    label: dates.startOfTheCurrentMonth,
    value: _values["default"].startOfTheCurrentMonth,
    order: 3,
    granularity: _constants["default"].MONTH,
    past: true
  }, {
    label: dates.endOfTheCurrentMonth,
    value: _values["default"].endOfTheCurrentMonth,
    order: 4,
    granularity: _constants["default"].MONTH
  }, {
    label: dates.startOfTheNextMonth,
    value: _values["default"].startOfTheNextMonth,
    order: 5,
    granularity: _constants["default"].MONTH
  }, {
    label: dates.endOfTheNextMonth,
    value: _values["default"].endOfTheNextMonth,
    order: 6,
    granularity: _constants["default"].MONTH
  }, {
    label: dates.startOfThePreviousYear,
    value: _values["default"].startOfThePreviousYear,
    order: 1,
    granularity: _constants["default"].YEAR,
    past: true
  }, {
    label: dates.endOfThePreviousYear,
    value: _values["default"].endOfThePreviousYear,
    order: 2,
    granularity: _constants["default"].YEAR,
    past: true
  }, {
    label: dates.startOfTheCurrentYear,
    value: _values["default"].startOfTheCurrentYear,
    order: 3,
    granularity: _constants["default"].YEAR,
    past: true
  }, {
    label: dates.endOfTheCurrentYear,
    value: _values["default"].endOfTheCurrentYear,
    order: 4,
    granularity: _constants["default"].YEAR
  }, {
    label: dates.startOfTheNextYear,
    value: _values["default"].startOfTheNextYear,
    order: 5,
    granularity: _constants["default"].YEAR
  }, {
    label: dates.endOfTheNextYear,
    value: _values["default"].endOfTheNextYear,
    order: 6,
    granularity: _constants["default"].YEAR
  }];
};

var getRelativeOption = function getRelativeOption(inputDate, dates) {
  return inputDate ? relativeOptions(dates).find(function (option) {
    return (!option.value.moment || option.value.moment === inputDate.moment) && option.value.unit === inputDate.unit && option.value.timing === inputDate.timing;
  }) : undefined;
};

exports.getRelativeOption = getRelativeOption;
var _default = relativeOptions;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3JlbGF0aXZlL3JlbGF0aXZlLW9wdGlvbnMuanMiXSwibmFtZXMiOlsicmVsYXRpdmVPcHRpb25zIiwiZGF0ZXMiLCJsYWJlbCIsInllc3RlcmRheSIsInZhbHVlIiwidmFsdWVzIiwib3JkZXIiLCJncmFudWxhcml0eSIsIkNvbnN0YW50cyIsIkRBWSIsInBhc3QiLCJwcmV2aW91c1dlZWtkYXkiLCJXRUVLREFZIiwidG9kYXkiLCJ0b21vcnJvdyIsImZvbGxvd2luZ1dlZWtkYXkiLCJzdGFydE9mVGhlUHJldmlvdXNXZWVrIiwiV0VFSyIsImVuZE9mVGhlUHJldmlvdXNXZWVrIiwic3RhcnRPZlRoZUN1cnJlbnRXZWVrIiwiZW5kT2ZUaGVDdXJyZW50V2VlayIsInN0YXJ0T2ZUaGVOZXh0V2VlayIsImVuZE9mVGhlTmV4dFdlZWsiLCJzdGFydE9mVGhlUHJldmlvdXNNb250aCIsIk1PTlRIIiwiZW5kT2ZUaGVQcmV2aW91c01vbnRoIiwic3RhcnRPZlRoZUN1cnJlbnRNb250aCIsImVuZE9mVGhlQ3VycmVudE1vbnRoIiwic3RhcnRPZlRoZU5leHRNb250aCIsImVuZE9mVGhlTmV4dE1vbnRoIiwic3RhcnRPZlRoZVByZXZpb3VzWWVhciIsIllFQVIiLCJlbmRPZlRoZVByZXZpb3VzWWVhciIsInN0YXJ0T2ZUaGVDdXJyZW50WWVhciIsImVuZE9mVGhlQ3VycmVudFllYXIiLCJzdGFydE9mVGhlTmV4dFllYXIiLCJlbmRPZlRoZU5leHRZZWFyIiwiZ2V0UmVsYXRpdmVPcHRpb24iLCJpbnB1dERhdGUiLCJmaW5kIiwib3B0aW9uIiwibW9tZW50IiwidW5pdCIsInRpbWluZyIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFDQTs7OztBQUVBLElBQU1BLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRDtBQUFBLFNBQVcsQ0FDakM7QUFDRUMsSUFBQUEsS0FBSyxFQUFFRCxL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bUJBQU84QixrQkFGaEI7QUFHRTdCLElBQUFBLEtBQUssRUFBRSxDQUhUO0FBSUVDLElBQUFBLFdBQVcsRUFBRUMsc0JBQVV1QjtBQUp6QixHQXpJaUMsRUErSWpDO0FBQ0U3QixJQUFBQSxLQUFLLEVBQUVELEtBQUssQ0FBQ21DLGdCQURmO0FBRUVoQyxJQUFBQSxLQUFLLEVBQUVDLG1CQUFPK0IsZ0JBRmhCO0FBR0U5QixJQUFBQSxLQUFLLEVBQUUsQ0FIVDtBQUlFQyxJQUFBQSxXQUFXLEVBQUVDLHNCQUFVdUI7QUFKekIsR0EvSWlDLENBQVg7QUFBQSxDQUF4Qjs7QUF1SkEsSUFBTU0saUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDQyxTQUFELEVBQVlyQyxLQUFaO0FBQUEsU0FDeEJxQyxTQUFTLEdBQ0x0QyxlQUFlLENBQUNDLEtBQUQsQ0FBZixDQUF1QnNDLElBQXZCLENBQTRCLFVBQUNDLE1BQUQ7QUFBQSxXQUM1QixDQUFDLENBQUNBLE1BQU0sQ0FBQ3BDLEtBQVAsQ0FBYXFDLE1BQWQsSUFBd0JELE1BQU0sQ0FBQ3BDLEtBQVAsQ0FBYXFDLE1BQWIsS0FBd0JILFNBQVMsQ0FBQ0csTUFBM0QsS0FDR0QsTUFBTSxDQUFDcEMsS0FBUCxDQUFhc0MsSUFBYixLQUFzQkosU0FBUyxDQUFDSSxJQURuQyxJQUVHRixNQUFNLENBQUNwQyxLQUFQLENBQWF1QyxNQUFiLEtBQXdCTCxTQUFTLENBQUNLLE1BSFQ7QUFBQSxHQUE1QixDQURLLEdBS0ZDLFNBTmlCO0FBQUEsQ0FBMUI7OztlQVNlNUMsZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb25zdGFudHMgZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHZhbHVlcyBmcm9tICcuL3ZhbHVlcyc7XG5cbmNvbnN0IHJlbGF0aXZlT3B0aW9ucyA9IChkYXRlcykgPT4gW1xuICB7XG4gICAgbGFiZWw6IGRhdGVzLnllc3RlcmRheSxcbiAgICB2YWx1ZTogdmFsdWVzLnllc3RlcmRheSxcbiAgICBvcmRlcjogMSxcbiAgICBncmFudWxhcml0eTogQ29uc3RhbnRzLkRBWSxcbiAgICBwYXN0OiB0cnVlLFxuICB9LFxuICB7XG4gICAgbGFiZWw6IGRhdGVzLnByZXZpb3VzV2Vla2RheSxcbiAgICB2YWx1ZTogdmFsdWVzLnByZXZpb3VzV2Vla2RheSxcbiAgICBvcmRlcjogMSxcbiAgICBncmFudWxhcml0eTogQ29uc3RhbnRzLldFRUtEQVksXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogZGF0ZXMudG9kYXksXG4gICAgdmFsdWU6IHZhbHVlcy50b2RheSxcbiAgICBvcmRlcjogMixcbiAgICBncmFudWxhcml0eTogQ29uc3RhbnRzLkRBWSxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiBkYXRlcy50b21vcnJvdyxcbiAgICB2YWx1ZTogdmFsdWVzLnRvbW9ycm93LFxuICAgIG9yZGVyOiAzLFxuICAgIGdyYW51bGFyaXR5OiBDb25zdGFudHMuREFZLFxuICB9LFxuICB7XG4gICAgbGFiZWw6IGRhdGVzLmZvbGxvd2luZ1dlZWtkYXksXG4gICAgdmFsdWU6IHZhbHVlcy5mb2xsb3dpbmdXZWVrZGF5LFxuICAgIG9yZGVyOiAyLFxuICAgIGdyYW51bGFyaXR5OiBDb25zdGFudHMuV0VFS0RBWSxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiBkYXRlcy5zdGFydE9mVGhlUHJldmlvdXNXZWVrLFxuICAgIHZhbHVlOiB2YWx1ZXMuc3RhcnRPZlRoZVByZXZpb3VzV2VlayxcbiAgICBvcmRlcjogMSxcbiAgICBncmFudWxhcml0eTogQ29uc3RhbnRzLldFRUssXG4gICAgcGFzdDogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiBkYXRlcy5lbmRPZlRoZVByZXZpb3VzV2VlayxcbiAgICB2YWx1ZTogdmFsdWVzLmVuZE9mVGhlUHJldmlvdXNXZWVrLFxuICAgIG9yZGVyOiAyLFxuICAgIGdyYW51bGFyaXR5OiBDb25zdGFudHMuV0VFSyxcbiAgICBwYXN0OiB0cnVlLFxuICB9LFxuICB7XG4gICAgbGFiZWw6IGRhdGVzLnN0YXJ0T2ZUaGVDdXJyZW50V2VlayxcbiAgICB2YWx1ZTogdmFsdWVzLnN0YXJ0T2ZUaGVDdXJyZW50V2VlayxcbiAgICBvcmRlcjogMyxcbiAgICBncmFudWxhcml0eTogQ29uc3RhbnRzLldFRUssXG4gICAgcGFzdDogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiBkYXRlcy5lbmRPZlRoZUN1cnJlbnRXZWVrLFxuICAgIHZhbHVlOiB2YWx1ZXMuZW5kT2ZUaGVDdXJyZW50V2VlayxcbiAgICBvcmRlcjogNCxcbiAgICBncmFudWxhcml0eTogQ29uc3RhbnRzLldFRUssXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogZGF0ZXMuc3RhcnRPZlRoZU5leHRXZWVrLFxuICAgIHZhbHVlOiB2YWx1ZXMuc3RhcnRPZlRoZU5leHRXZWVrLFxuICAgIG9yZGVyOiA1LFxuICAgIGdyYW51bGFyaXR5OiBDb25zdGFudHMuV0VFSyxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiBkYXRlcy5lbmRPZlRoZU5leHRXZWVrLFxuICAgIHZhbHVlOiB2YWx1ZXMuZW5kT2ZUaGVOZXh0V2VlayxcbiAgICBvcmRlcjogNixcbiAgICBncmFudWxhcml0eTogQ29uc3RhbnRzLldFRUssXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogZGF0ZXMuc3RhcnRPZlRoZVByZXZpb3VzTW9udGgsXG4gICAgdmFsdWU6IHZhbHVlcy5zdGFydE9mVGhlUHJldmlvdXNNb250aCxcbiAgICBvcmRlcjogMSxcbiAgICBncmFudWxhcml0eTogQ29uc3RhbnRzLk1PTlRILFxuICAgIHBhc3Q6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogZGF0ZXMuZW5kT2ZUaGVQcmV2aW91c01vbnRoLFxuICAgIHZhbHVlOiB2YWx1ZXMuZW5kT2ZUaGVQcmV2aW91c01vbnRoLFxuICAgIG9yZGVyOiAyLFxuICAgIGdyYW51bGFyaXR5OiBDb25zdGFudHMuTU9OVEgsXG4gICAgcGFzdDogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiBkYXRlcy5zdGFydE9mVGhlQ3VycmVudE1vbnRoLFxuICAgIHZhbHVlOiB2YWx1ZXMuc3RhcnRPZlRoZUN1cnJlbnRNb250aCxcbiAgICBvcmRlcjogMyxcbiAgICBncmFudWxhcml0eTogQ29uc3RhbnRzLk1PTlRILFxuICAgIHBhc3Q6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogZGF0ZXMuZW5kT2ZUaGVDdXJyZW50TW9udGgsXG4gICAgdmFsdWU6IHZhbHVlcy5lbmRPZlRoZUN1cnJlbnRNb250aCxcbiAgICBvcmRlcjogNCxcbiAgICBncmFudWxhcml0eTogQ29uc3RhbnRzLk1PTlRILFxuICB9LFxuICB7XG4gICAgbGFiZWw6IGRhdGVzLnN0YXJ0T2ZUaGVOZXh0TW9udGgsXG4gICAgdmFsdWU6IHZhbHVlcy5zdGFydE9mVGhlTmV4dE1vbnRoLFxuICAgIG9yZGVyOiA1LFxuICAgIGdyYW51bGFyaXR5OiBDb25zdGFudHMuTU9OVEgsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogZGF0ZXMuZW5kT2ZUaGVOZXh0TW9udGgsXG4gICAgdmFsdWU6IHZhbHVlcy5lbmRPZlRoZU5leHRNb250aCxcbiAgICBvcmRlcjogNixcbiAgICBncmFudWxhcml0eTogQ29uc3RhbnRzLk1PTlRILFxuICB9LFxuICB7XG4gICAgbGFiZWw6IGRhdGVzLnN0YXJ0T2ZUaGVQcmV2aW91c1llYXIsXG4gICAgdmFsdWU6IHZhbHVlcy5zdGFydE9mVGhlUHJldmlvdXNZZWFyLFxuICAgIG9yZGVyOiAxLFxuICAgIGdyYW51bGFyaXR5OiBDb25zdGFudHMuWUVBUixcbiAgICBwYXN0OiB0cnVlLFxuICB9LFxuICB7XG4gICAgbGFiZWw6IGRhdGVzLmVuZE9mVGhlUHJldmlvdXNZZWFyLFxuICAgIHZhbHVlOiB2YWx1ZXMuZW5kT2ZUaGVQcmV2aW91c1llYXIsXG4gICAgb3JkZXI6IDIsXG4gICAgZ3JhbnVsYXJpdHk6IENvbnN0YW50cy5ZRUFSLFxuICAgIHBhc3Q6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogZGF0ZXMuc3RhcnRPZlRoZUN1cnJlbnRZZWFyLFxuICAgIHZhbHVlOiB2YWx1ZXMuc3RhcnRPZlRoZUN1cnJlbnRZZWFyLFxuICAgIG9yZGVyOiAzLFxuICAgIGdyYW51bGFyaXR5OiBDb25zdGFudHMuWUVBUixcbiAgICBwYXN0OiB0cnVlLFxuICB9LFxuICB7XG4gICAgbGFiZWw6IGRhdGVzLmVuZE9mVGhlQ3VycmVudFllYXIsXG4gICAgdmFsdWU6IHZhbHVlcy5lbmRPZlRoZUN1cnJlbnRZZWFyLFxuICAgIG9yZGVyOiA0LFxuICAgIGdyYW51bGFyaXR5OiBDb25zdGFudHMuWUVBUixcbiAgfSxcbiAge1xuICAgIGxhYmVsOiBkYXRlcy5zdGFydE9mVGhlTmV4dFllYXIsXG4gICAgdmFsdWU6IHZhbHVlcy5zdGFydE9mVGhlTmV4dFllYXIsXG4gICAgb3JkZXI6IDUsXG4gICAgZ3JhbnVsYXJpdHk6IENvbnN0YW50cy5ZRUFSLFxuICB9LFxuICB7XG4gICAgbGFiZWw6IGRhdGVzLmVuZE9mVGhlTmV4dFllYXIsXG4gICAgdmFsdWU6IHZhbHVlcy5lbmRPZlRoZU5leHRZZWFyLFxuICAgIG9yZGVyOiA2LFxuICAgIGdyYW51bGFyaXR5OiBDb25zdGFudHMuWUVBUixcbiAgfSxcbl07XG5cbmNvbnN0IGdldFJlbGF0aXZlT3B0aW9uID0gKGlucHV0RGF0ZSwgZGF0ZXMpID0+IChcbiAgaW5wdXREYXRlXG4gICAgPyByZWxhdGl2ZU9wdGlvbnMoZGF0ZXMpLmZpbmQoKG9wdGlvbikgPT4gKFxuICAgICAgKCFvcHRpb24udmFsdWUubW9tZW50IHx8IG9wdGlvbi52YWx1ZS5tb21lbnQgPT09IGlucHV0RGF0ZS5tb21lbnQpXG4gICAgICAmJiBvcHRpb24udmFsdWUudW5pdCA9PT0gaW5wdXREYXRlLnVuaXRcbiAgICAgICYmIG9wdGlvbi52YWx1ZS50aW1pbmcgPT09IGlucHV0RGF0ZS50aW1pbmdcbiAgICApKSA6IHVuZGVmaW5lZFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgcmVsYXRpdmVPcHRpb25zO1xuZXhwb3J0IHsgZ2V0UmVsYXRpdmVPcHRpb24gfTtcbiJdfQ==