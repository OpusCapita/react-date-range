'use strict';

exports.__esModule = true;

var _absoluteDateRange = require('../components/absolute/absolute-date-range.component');

var _absoluteDateRange2 = _interopRequireDefault(_absoluteDateRange);

var _period = require('../components/period/period.component');

var _period2 = _interopRequireDefault(_period);

var _relativeDateRange = require('../components/relative/relative-date-range.component');

var _relativeDateRange2 = _interopRequireDefault(_relativeDateRange);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  period: {
    id: 1,
    component: _period2.default,
    propsKey: 'period'
  },
  relative: {
    id: 2,
    component: _relativeDateRange2.default,
    propsKey: 'relativeRange'
  },
  absolute: {
    id: 3,
    component: _absoluteDateRange2.default,
    propsKey: 'absoluteRange'
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wb3BvdmVyL3JhbmdlLXR5cGVzLmpzIl0sIm5hbWVzIjpbInBlcmlvZCIsImlkIiwiY29tcG9uZW50IiwiUGVyaW9kIiwicHJvcHNLZXkiLCJyZWxhdGl2ZSIsIlJlbGF0aXZlRGF0ZVJhbmdlIiwiYWJzb2x1dGUiLCJBYnNvbHV0ZURhdGVSYW5nZSJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O2tCQUVlO0FBQ2JBLFVBQVE7QUFDTkMsUUFBSSxDQURFO0FBRU5DLGVBQVdDLGdCQUZMO0FBR05DLGNBQVU7QUFISixHQURLO0FBTWJDLFlBQVU7QUFDUkosUUFBSSxDQURJO0FBRVJDLGVBQVdJLDJCQUZIO0FBR1JGLGNBQVU7QUFIRixHQU5HO0FBV2JHLFlBQVU7QUFDUk4sUUFBSSxDQURJO0FBRVJDLGVBQVdNLDJCQUZIO0FBR1JKLGNBQVU7QUFIRjtBQVhHLEMiLCJmaWxlIjoicmFuZ2UtdHlwZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWJzb2x1dGVEYXRlUmFuZ2UgZnJvbSAnLi4vY29tcG9uZW50cy9hYnNvbHV0ZS9hYnNvbHV0ZS1kYXRlLXJhbmdlLmNvbXBvbmVudCc7XG5pbXBvcnQgUGVyaW9kIGZyb20gJy4uL2NvbXBvbmVudHMvcGVyaW9kL3BlcmlvZC5jb21wb25lbnQnO1xuaW1wb3J0IFJlbGF0aXZlRGF0ZVJhbmdlIGZyb20gJy4uL2NvbXBvbmVudHMvcmVsYXRpdmUvcmVsYXRpdmUtZGF0ZS1yYW5nZS5jb21wb25lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHBlcmlvZDoge1xuICAgIGlkOiAxLFxuICAgIGNvbXBvbmVudDogUGVyaW9kLFxuICAgIHByb3BzS2V5OiAncGVyaW9kJyxcbiAgfSxcbiAgcmVsYXRpdmU6IHtcbiAgICBpZDogMixcbiAgICBjb21wb25lbnQ6IFJlbGF0aXZlRGF0ZVJhbmdlLFxuICAgIHByb3BzS2V5OiAncmVsYXRpdmVSYW5nZScsXG4gIH0sXG4gIGFic29sdXRlOiB7XG4gICAgaWQ6IDMsXG4gICAgY29tcG9uZW50OiBBYnNvbHV0ZURhdGVSYW5nZSxcbiAgICBwcm9wc0tleTogJ2Fic29sdXRlUmFuZ2UnLFxuICB9LFxufTtcbiJdfQ==