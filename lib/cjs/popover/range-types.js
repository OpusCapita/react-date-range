"use strict";

exports.__esModule = true;
exports.default = void 0;

var _absoluteDateRange = _interopRequireDefault(require("../components/absolute/absolute-date-range.component"));

var _period = _interopRequireDefault(require("../components/period/period.component"));

var _relativeDateRange = _interopRequireDefault(require("../components/relative/relative-date-range.component"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  period: {
    id: 1,
    component: _period.default,
    propsKey: 'period'
  },
  relative: {
    id: 2,
    component: _relativeDateRange.default,
    propsKey: 'relativeRange'
  },
  absolute: {
    id: 3,
    component: _absoluteDateRange.default,
    propsKey: 'absoluteRange'
  }
};
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wb3BvdmVyL3JhbmdlLXR5cGVzLmpzIl0sIm5hbWVzIjpbInBlcmlvZCIsImlkIiwiY29tcG9uZW50IiwiUGVyaW9kIiwicHJvcHNLZXkiLCJyZWxhdGl2ZSIsIlJlbGF0aXZlRGF0ZVJhbmdlIiwiYWJzb2x1dGUiLCJBYnNvbHV0ZURhdGVSYW5nZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7OztlQUVlO0FBQ2JBLEVBQUFBLE1BQU0sRUFBRTtBQUNOQyxJQUFBQSxFQUFFLEVBQUUsQ0FERTtBQUVOQyxJQUFBQSxTQUFTLEVBQUVDLGVBRkw7QUFHTkMsSUFBQUEsUUFBUSxFQUFFO0FBSEosR0FESztBQU1iQyxFQUFBQSxRQUFRLEVBQUU7QUFDUkosSUFBQUEsRUFBRSxFQUFFLENBREk7QUFFUkMsSUFBQUEsU0FBUyxFQUFFSSwwQkFGSDtBQUdSRixJQUFBQSxRQUFRLEVBQUU7QUFIRixHQU5HO0FBV2JHLEVBQUFBLFFBQVEsRUFBRTtBQUNSTixJQUFBQSxFQUFFLEVBQUUsQ0FESTtBQUVSQyxJQUFBQSxTQUFTLEVBQUVNLDBCQUZIO0FBR1JKLElBQUFBLFFBQVEsRUFBRTtBQUhGO0FBWEcsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBYnNvbHV0ZURhdGVSYW5nZSBmcm9tICcuLi9jb21wb25lbnRzL2Fic29sdXRlL2Fic29sdXRlLWRhdGUtcmFuZ2UuY29tcG9uZW50JztcbmltcG9ydCBQZXJpb2QgZnJvbSAnLi4vY29tcG9uZW50cy9wZXJpb2QvcGVyaW9kLmNvbXBvbmVudCc7XG5pbXBvcnQgUmVsYXRpdmVEYXRlUmFuZ2UgZnJvbSAnLi4vY29tcG9uZW50cy9yZWxhdGl2ZS9yZWxhdGl2ZS1kYXRlLXJhbmdlLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcGVyaW9kOiB7XG4gICAgaWQ6IDEsXG4gICAgY29tcG9uZW50OiBQZXJpb2QsXG4gICAgcHJvcHNLZXk6ICdwZXJpb2QnLFxuICB9LFxuICByZWxhdGl2ZToge1xuICAgIGlkOiAyLFxuICAgIGNvbXBvbmVudDogUmVsYXRpdmVEYXRlUmFuZ2UsXG4gICAgcHJvcHNLZXk6ICdyZWxhdGl2ZVJhbmdlJyxcbiAgfSxcbiAgYWJzb2x1dGU6IHtcbiAgICBpZDogMyxcbiAgICBjb21wb25lbnQ6IEFic29sdXRlRGF0ZVJhbmdlLFxuICAgIHByb3BzS2V5OiAnYWJzb2x1dGVSYW5nZScsXG4gIH0sXG59O1xuIl19