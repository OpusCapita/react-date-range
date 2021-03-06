"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _propTypes = require("prop-types");

var _default = {
  absolute: _propTypes.PropTypes.string,
  dates: _propTypes.PropTypes.shape({
    endOfTheCurrentMonth: _propTypes.PropTypes.string,
    endOfTheCurrentWeek: _propTypes.PropTypes.string,
    endOfTheCurrentYear: _propTypes.PropTypes.string,
    endOfTheNextMonth: _propTypes.PropTypes.string,
    endOfTheNextWeek: _propTypes.PropTypes.string,
    endOfTheNextYear: _propTypes.PropTypes.string,
    endOfThePreviousMonth: _propTypes.PropTypes.string,
    endOfThePreviousWeek: _propTypes.PropTypes.string,
    endOfThePreviousYear: _propTypes.PropTypes.string,
    followingWeekday: _propTypes.PropTypes.string,
    previousWeekday: _propTypes.PropTypes.string,
    startOfTheCurrentMonth: _propTypes.PropTypes.string,
    startOfTheCurrentWeek: _propTypes.PropTypes.string,
    startOfTheCurrentYear: _propTypes.PropTypes.string,
    startOfTheNextMonth: _propTypes.PropTypes.string,
    startOfTheNextWeek: _propTypes.PropTypes.string,
    startOfTheNextYear: _propTypes.PropTypes.string,
    startOfThePreviousMonth: _propTypes.PropTypes.string,
    startOfThePreviousWeek: _propTypes.PropTypes.string,
    startOfThePreviousYear: _propTypes.PropTypes.string,
    today: _propTypes.PropTypes.string,
    tomorrow: _propTypes.PropTypes.string,
    yesterday: _propTypes.PropTypes.string
  }),
  day: _propTypes.PropTypes.shape({
    plural: _propTypes.PropTypes.string,
    singular: _propTypes.PropTypes.string
  }),
  endDate: _propTypes.PropTypes.string,
  endDatePlaceholder: _propTypes.PropTypes.string,
  from: _propTypes.PropTypes.string,
  month: _propTypes.PropTypes.shape({
    plural: _propTypes.PropTypes.string,
    singular: _propTypes.PropTypes.string
  }),
  period: _propTypes.PropTypes.string,
  relative: _propTypes.PropTypes.string,
  startDate: _propTypes.PropTypes.string,
  startDatePlaceholder: _propTypes.PropTypes.string,
  to: _propTypes.PropTypes.string,
  week: _propTypes.PropTypes.shape({
    plural: _propTypes.PropTypes.string,
    singular: _propTypes.PropTypes.string
  }),
  weekday: _propTypes.PropTypes.shape({
    plural: _propTypes.PropTypes.string,
    singular: _propTypes.PropTypes.string
  })
};
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90cmFuc2xhdGlvbnMvcHJvcC10eXBlcy5qcyJdLCJuYW1lcyI6WyJhYnNvbHV0ZSIsIlByb3BUeXBlcyIsInN0cmluZyIsImRhdGVzIiwic2hhcGUiLCJlbmRPZlRoZUN1cnJlbnRNb250aCIsImVuZE9mVGhlQ3VycmVudFdlZWsiLCJlbmRPZlRoZUN1cnJlbnRZZWFyIiwiZW5kT2ZUaGVOZXh0TW9udGgiLCJlbmRPZlRoZU5leHRXZWVrIiwiZW5kT2ZUaGVOZXh0WWVhciIsImVuZE9mVGhlUHJldmlvdXNNb250aCIsImVuZE9mVGhlUHJldmlvdXNXZWVrIiwiZW5kT2ZUaGVQcmV2aW91c1llYXIiLCJmb2xsb3dpbmdXZWVrZGF5IiwicHJldmlvdXNXZWVrZGF5Iiwic3RhcnRPZlRoZUN1cnJlbnRNb250aCIsInN0YXJ0T2ZUaGVDdXJyZW50V2VlayIsInN0YXJ0T2ZUaGVDdXJyZW50WWVhciIsInN0YXJ0T2ZUaGVOZXh0TW9udGgiLCJzdGFydE9mVGhlTmV4dFdlZWsiLCJzdGFydE9mVGhlTmV4dFllYXIiLCJzdGFydE9mVGhlUHJldmlvdXNNb250aCIsInN0YXJ0T2ZUaGVQcmV2aW91c1dlZWsiLCJzdGFydE9mVGhlUHJldmlvdXNZZWFyIiwidG9kYXkiLCJ0b21vcnJvdyIsInllc3RlcmRheSIsImRheSIsInBsdXJhbCIsInNpbmd1bGFyIiwiZW5kRGF0ZSIsImVuZERhdGVQbGFjZWhvbGRlciIsImZyb20iLCJtb250aCIsInBlcmlvZCIsInJlbGF0aXZlIiwic3RhcnREYXRlIiwic3RhcnREYXRlUGxhY2Vob2xkZXIiLCJ0byIsIndlZWsiLCJ3ZWVrZGF5Il0sIm1hcHBpbmdzIjoiOzs7OztBQUFBOztlQUVlO0FBQ2JBLEVBQUFBLFFBQVEsRUFBRUMscUJBQVVDLE1BRFA7QUFFYkMsRUFBQUEsS0FBSyxFQUFFRixxQkFBVUcsS0FBVixDQUFnQjtBQUNyQkMsSUFBQUEsb0JBQW9CLEVBQUVKLHFCQUFVQyxNQURYO0FBRXJCSSxJQUFBQSxtQkFBbUIsRUFBRUwscUJBQVVDLE1BRlY7QUFHckJLLElBQUFBLG1CQUFtQixFQUFFTixxQkFBVUMsTUFIVjtBQUlyQk0sSUFBQUEsaUJBQWlCLEVBQUVQLHFCQUFVQyxNQUpSO0FBS3JCTyxJQUFBQSxnQkFBZ0IsRUFBRVIscUJBQVVDLE1BTFA7QUFNckJRLElBQUFBLGdCQUFnQixFQUFFVCxxQkFBVUMsTUFOUDtBQU9yQlMsSUFBQUEscUJBQXFCLEVBQUVWLHFCQUFVQyxNQVBaO0FBUXJCVSxJQUFBQSxvQkFBb0IsRUFBRVgscUJBQVVDLE1BUlg7QUFTckJXLElBQUFBLG9CQUFvQixFQUFFWixxQkFBVUMsTUFUWDtBQVVyQlksSUFBQUEsZ0JBQWdCLEVBQUViLHFCQUFVQyxNQVZQO0FBV3JCYSxJQUFBQSxlQUFlLEVBQUVkLHFCQUFVQyxNQVhOO0FBWXJCYyxJQUFBQSxzQkFBc0IsRUFBRWYscUJBQVVDLE1BWmI7QUFhckJlLElBQUFBLHFCQUFxQixFQUFFaEIscUJBQVVDLE1BYlo7QUFjckJnQixJQUFBQSxxQkFBcUIsRUFBRWpCLHFCQUFVQyxNQWRaO0FBZXJCaUIsSUFBQUEsbUJBQW1CLEVBQUVsQixxQkFBVUMsTUFmVjtBQWdCckJrQixJQUFBQSxrQkFBa0IsRUFBRW5CLHFCQUFVQyxNQWhCVDtBQWlCckJtQixJQUFBQSxrQkFBa0IsRUFBRXBCLHFCQUFVQyxNQWpCVDtBQWtCckJvQixJQUFBQSx1QkFBdUIsRUFBRXJCLHFCQUFVQyxNQWxCZDtBQW1CckJxQixJQUFBQSxzQkFBc0IsRUFBRXRCLHFCQUFVQyxNQW5CYjtBQW9CckJzQixJQUFBQSxzQkFBc0IsRUFBRXZCLHFCQUFVQyxNQXBCYjtBQXFCckJ1QixJQUFBQSxLQUFLLEVBQUV4QixxQkFBVUMsTUFyQkk7QUFzQnJCd0IsSUFBQUEsUUFBUSxFQUFFekIscUJBQVVDLE1BdEJDO0FBdUJyQnlCLElBQUFBLFNBQVMsRUFBRTFCLHFCQUFVQztBQXZCQSxHQUFoQixDQUZNO0FBMkJiMEIsRUFBQUEsR0FBRyxFQUFFM0IscUJBQVVHLEtBQVYsQ0FBZ0I7QUFDbkJ5QixJQUFBQSxNQUFNLEVBQUU1QixxQkFBVUMsTUFEQztBQUVuQjRCLElBQUFBLFFBQVEsRUFBRTdCLHFCQUFVQztBQUZELEdBQWhCLENBM0JRO0FBK0JiNkIsRUFBQUEsT0FBTyxFQUFFOUIscUJBQVVDLE1BL0JOO0FBZ0NiOEIsRUFBQUEsa0JBQWtCLEVBQUUvQixxQkFBVUMsTUFoQ2pCO0FBaUNiK0IsRUFBQUEsSUFBSSxFQUFFaEMscUJBQVVDLE1BakNIO0FBa0NiZ0MsRUFBQUEsS0FBSyxFQUFFakMscUJBQVVHLEtBQVYsQ0FBZ0I7QUFDckJ5QixJQUFBQSxNQUFNLEVBQUU1QixxQkFBVUMsTUFERztBQUVyQjRCLElBQUFBLFFBQVEsRUFBRTdCLHFCQUFVQztBQUZDLEdBQWhCLENBbENNO0FBc0NiaUMsRUFBQUEsTUFBTSxFQUFFbEMscUJBQVVDLE1BdENMO0FBdUNia0MsRUFBQUEsUUFBUSxFQUFFbkMscUJBQVVDLE1BdkNQO0FBd0NibUMsRUFBQUEsU0FBUyxFQUFFcEMscUJBQVVDLE1BeENSO0FBeUNib0MsRUFBQUEsb0JBQW9CLEVBQUVyQyxxQkFBVUMsTUF6Q25CO0FBMENicUMsRUFBQUEsRUFBRSxFQUFFdEMscUJBQVVDLE1BMUNEO0FBMkNic0MsRUFBQUEsSUFBSSxFQUFFdkMscUJBQVVHLEtBQVYsQ0FBZ0I7QUFDcEJ5QixJQUFBQSxNQUFNLEVBQUU1QixxQkFBVUMsTUFERTtBQUVwQjRCLElBQUFBLFFBQVEsRUFBRTdCLHFCQUFVQztBQUZBLEdBQWhCLENBM0NPO0FBK0NidUMsRUFBQUEsT0FBTyxFQUFFeEMscUJBQVVHLEtBQVYsQ0FBZ0I7QUFDdkJ5QixJQUFBQSxNQUFNLEVBQUU1QixxQkFBVUMsTUFESztBQUV2QjRCLElBQUFBLFFBQVEsRUFBRTdCLHFCQUFVQztBQUZHLEdBQWhCO0FBL0NJLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm9wVHlwZXMgfSBmcm9tICdwcm9wLXR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBhYnNvbHV0ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZGF0ZXM6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgZW5kT2ZUaGVDdXJyZW50TW9udGg6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZW5kT2ZUaGVDdXJyZW50V2VlazogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBlbmRPZlRoZUN1cnJlbnRZZWFyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGVuZE9mVGhlTmV4dE1vbnRoOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGVuZE9mVGhlTmV4dFdlZWs6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZW5kT2ZUaGVOZXh0WWVhcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBlbmRPZlRoZVByZXZpb3VzTW9udGg6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZW5kT2ZUaGVQcmV2aW91c1dlZWs6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZW5kT2ZUaGVQcmV2aW91c1llYXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZm9sbG93aW5nV2Vla2RheTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBwcmV2aW91c1dlZWtkYXk6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgc3RhcnRPZlRoZUN1cnJlbnRNb250aDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzdGFydE9mVGhlQ3VycmVudFdlZWs6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgc3RhcnRPZlRoZUN1cnJlbnRZZWFyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHN0YXJ0T2ZUaGVOZXh0TW9udGg6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgc3RhcnRPZlRoZU5leHRXZWVrOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHN0YXJ0T2ZUaGVOZXh0WWVhcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzdGFydE9mVGhlUHJldmlvdXNNb250aDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzdGFydE9mVGhlUHJldmlvdXNXZWVrOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHN0YXJ0T2ZUaGVQcmV2aW91c1llYXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdG9kYXk6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdG9tb3Jyb3c6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgeWVzdGVyZGF5OiBQcm9wVHlwZXMuc3RyaW5nLFxuICB9KSxcbiAgZGF5OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIHBsdXJhbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzaW5ndWxhcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgfSksXG4gIGVuZERhdGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGVuZERhdGVQbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgZnJvbTogUHJvcFR5cGVzLnN0cmluZyxcbiAgbW9udGg6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgcGx1cmFsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHNpbmd1bGFyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB9KSxcbiAgcGVyaW9kOiBQcm9wVHlwZXMuc3RyaW5nLFxuICByZWxhdGl2ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgc3RhcnREYXRlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzdGFydERhdGVQbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgdG86IFByb3BUeXBlcy5zdHJpbmcsXG4gIHdlZWs6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgcGx1cmFsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHNpbmd1bGFyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB9KSxcbiAgd2Vla2RheTogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBwbHVyYWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgc2luZ3VsYXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gIH0pLFxufTtcbiJdfQ==