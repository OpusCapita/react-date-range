"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _absoluteDateRange = _interopRequireDefault(require("../components/absolute/absolute-date-range.component"));

var _period = _interopRequireDefault(require("../components/period/period.component"));

var _relativeDateRange = _interopRequireDefault(require("../components/relative/relative-date-range.component"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  period: {
    id: 1,
    component: _period["default"],
    propsKey: 'period'
  },
  relative: {
    id: 2,
    component: _relativeDateRange["default"],
    propsKey: 'relativeRange'
  },
  absolute: {
    id: 3,
    component: _absoluteDateRange["default"],
    propsKey: 'absoluteRange'
  }
};
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wb3BvdmVyL3JhbmdlLXR5cGVzLmpzIl0sIm5hbWVzIjpbInBlcmlvZCIsImlkIiwiY29tcG9uZW50IiwiUGVyaW9kIiwicHJvcHNLZXkiLCJyZWxhdGl2ZSIsIlJlbGF0aXZlRGF0ZVJhbmdlIiwiYWJzb2x1dGUiLCJBYnNvbHV0ZURhdGVSYW5nZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7OztlQUVlO0FBQ2JBLEVBQUFBLE1BQU0sRUFBRTtBQUNOQyxJQUFBQSxFQUFFLEVBQUUsQ0FERTtBQUVOQyxJQUFBQSxTQUFTLEVBQUVDLGtCQUZMO0FBR05DLElBQUFBLFFBQVEsRUFBRTtBQUhKLEdBREs7QUFNYkMsRUFBQUEsUUFBUSxFQUFFO0FBQ1JKLElBQUFBLEVBQUUsRUFBRSxDQURJO0FBRVJDLElBQUFBLFNBQVMsRUFBRUksNkJBRkg7QUFHUkYsSUFBQUEsUUFBUSxFQUFFO0FBSEYsR0FORztBQVdiRyxFQUFBQSxRQUFRLEVBQUU7QUFDUk4sSUFBQUEsRUFBRSxFQUFFLENBREk7QUFFUkMsSUFBQUEsU0FBUyxFQUFFTSw2QkFGSDtBQUdSSixJQUFBQSxRQUFRLEVBQUU7QUFIRjtBQVhHLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWJzb2x1dGVEYXRlUmFuZ2UgZnJvbSAnLi4vY29tcG9uZW50cy9hYnNvbHV0ZS9hYnNvbHV0ZS1kYXRlLXJhbmdlLmNvbXBvbmVudCc7XG5pbXBvcnQgUGVyaW9kIGZyb20gJy4uL2NvbXBvbmVudHMvcGVyaW9kL3BlcmlvZC5jb21wb25lbnQnO1xuaW1wb3J0IFJlbGF0aXZlRGF0ZVJhbmdlIGZyb20gJy4uL2NvbXBvbmVudHMvcmVsYXRpdmUvcmVsYXRpdmUtZGF0ZS1yYW5nZS5jb21wb25lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHBlcmlvZDoge1xuICAgIGlkOiAxLFxuICAgIGNvbXBvbmVudDogUGVyaW9kLFxuICAgIHByb3BzS2V5OiAncGVyaW9kJyxcbiAgfSxcbiAgcmVsYXRpdmU6IHtcbiAgICBpZDogMixcbiAgICBjb21wb25lbnQ6IFJlbGF0aXZlRGF0ZVJhbmdlLFxuICAgIHByb3BzS2V5OiAncmVsYXRpdmVSYW5nZScsXG4gIH0sXG4gIGFic29sdXRlOiB7XG4gICAgaWQ6IDMsXG4gICAgY29tcG9uZW50OiBBYnNvbHV0ZURhdGVSYW5nZSxcbiAgICBwcm9wc0tleTogJ2Fic29sdXRlUmFuZ2UnLFxuICB9LFxufTtcbiJdfQ==