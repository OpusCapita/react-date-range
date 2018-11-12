'use strict';

exports.__esModule = true;

var _constants = require('./constants');

var _constants2 = _interopRequireDefault(_constants);

var _constants3 = require('../relative/constants');

var _constants4 = _interopRequireDefault(_constants3);

var _translate = require('../../translations/translate');

var _translate2 = _interopRequireDefault(_translate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getNounsForm = function getNounsForm(timing) {
  switch (Math.abs(timing)) {
    case 1:
      {
        return _constants2.default.SINGULAR;
      }
    default:
      {
        return _constants2.default.PLURAL;
      }
  }
};

var getLabel = function getLabel(unit, timing, translations) {
  switch (unit) {
    case _constants4.default.MONTH:
      {
        return (0, _translate2.default)(translations, 'month', getNounsForm(timing));
      }
    case _constants4.default.WEEK:
      {
        return (0, _translate2.default)(translations, 'week', getNounsForm(timing));
      }
    default:
      {
        return (0, _translate2.default)(translations, 'day', getNounsForm(timing));
      }
  }
};

var formatLabel = function formatLabel(endDate, translations) {
  var timing = endDate.timing,
      unit = endDate.unit;

  var count = timing > 0 ? '+' + timing : timing;
  return ' (' + count + ') ' + getLabel(unit, timing, translations);
};

exports.default = function (startDate, endDate, translations) {
  return (startDate.label || '') + '  - ' + formatLabel(endDate, translations);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3BlcmlvZC9wZXJpb2QtbGFiZWwuZm9ybWF0dGVyLmpzIl0sIm5hbWVzIjpbImdldE5vdW5zRm9ybSIsInRpbWluZyIsIk1hdGgiLCJhYnMiLCJDb25zdGFudHMiLCJTSU5HVUxBUiIsIlBMVVJBTCIsImdldExhYmVsIiwidW5pdCIsInRyYW5zbGF0aW9ucyIsIlJlbGF0aXZlQ29uc3RhbnRzIiwiTU9OVEgiLCJXRUVLIiwiZm9ybWF0TGFiZWwiLCJlbmREYXRlIiwiY291bnQiLCJzdGFydERhdGUiLCJsYWJlbCJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsZUFBZSxTQUFmQSxZQUFlLENBQUNDLE1BQUQsRUFBWTtBQUMvQixVQUFRQyxLQUFLQyxHQUFMLENBQVNGLE1BQVQsQ0FBUjtBQUNFLFNBQUssQ0FBTDtBQUFRO0FBQ04sZUFBT0csb0JBQVVDLFFBQWpCO0FBQ0Q7QUFDRDtBQUFTO0FBQ1AsZUFBT0Qsb0JBQVVFLE1BQWpCO0FBQ0Q7QUFOSDtBQVFELENBVEQ7O0FBV0EsSUFBTUMsV0FBVyxTQUFYQSxRQUFXLENBQUNDLElBQUQsRUFBT1AsTUFBUCxFQUFlUSxZQUFmLEVBQWdDO0FBQy9DLFVBQVFELElBQVI7QUFDRSxTQUFLRSxvQkFBa0JDLEtBQXZCO0FBQThCO0FBQzVCLGVBQU8seUJBQVVGLFlBQVYsRUFBd0IsT0FBeEIsRUFBaUNULGFBQWFDLE1BQWIsQ0FBakMsQ0FBUDtBQUNEO0FBQ0QsU0FBS1Msb0JBQWtCRSxJQUF2QjtBQUE2QjtBQUMzQixlQUFPLHlCQUFVSCxZQUFWLEVBQXdCLE1BQXhCLEVBQWdDVCxhQUFhQyxNQUFiLENBQWhDLENBQVA7QUFDRDtBQUNEO0FBQVM7QUFDUCxlQUFPLHlCQUFVUSxZQUFWLEVBQXdCLEtBQXhCLEVBQStCVCxhQUFhQyxNQUFiLENBQS9CLENBQVA7QUFDRDtBQVRIO0FBV0QsQ0FaRDs7QUFjQSxJQUFNWSxjQUFjLFNBQWRBLFdBQWMsQ0FBQ0MsT0FBRCxFQUFVTCxZQUFWLEVBQTJCO0FBQUEsTUFDckNSLE1BRHFDLEdBQ3BCYSxPQURvQixDQUNyQ2IsTUFEcUM7QUFBQSxNQUM3Qk8sSUFENkIsR0FDcEJNLE9BRG9CLENBQzdCTixJQUQ2Qjs7QUFFN0MsTUFBTU8sUUFBUWQsU0FBUyxDQUFULFNBQWlCQSxNQUFqQixHQUE0QkEsTUFBMUM7QUFDQSxnQkFBWWMsS0FBWixVQUFzQlIsU0FBU0MsSUFBVCxFQUFlUCxNQUFmLEVBQXVCUSxZQUF2QixDQUF0QjtBQUNELENBSkQ7O2tCQU1lLFVBQUNPLFNBQUQsRUFBWUYsT0FBWixFQUFxQkwsWUFBckI7QUFBQSxVQUNWTyxVQUFVQyxLQUFWLElBQW1CLEVBRFQsYUFDa0JKLFlBQVlDLE9BQVosRUFBcUJMLFlBQXJCLENBRGxCO0FBQUEsQyIsImZpbGUiOiJwZXJpb2QtbGFiZWwuZm9ybWF0dGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbnN0YW50cyBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgUmVsYXRpdmVDb25zdGFudHMgZnJvbSAnLi4vcmVsYXRpdmUvY29uc3RhbnRzJztcbmltcG9ydCB0cmFuc2xhdGUgZnJvbSAnLi4vLi4vdHJhbnNsYXRpb25zL3RyYW5zbGF0ZSc7XG5cbmNvbnN0IGdldE5vdW5zRm9ybSA9ICh0aW1pbmcpID0+IHtcbiAgc3dpdGNoIChNYXRoLmFicyh0aW1pbmcpKSB7XG4gICAgY2FzZSAxOiB7XG4gICAgICByZXR1cm4gQ29uc3RhbnRzLlNJTkdVTEFSO1xuICAgIH1cbiAgICBkZWZhdWx0OiB7XG4gICAgICByZXR1cm4gQ29uc3RhbnRzLlBMVVJBTDtcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IGdldExhYmVsID0gKHVuaXQsIHRpbWluZywgdHJhbnNsYXRpb25zKSA9PiB7XG4gIHN3aXRjaCAodW5pdCkge1xuICAgIGNhc2UgUmVsYXRpdmVDb25zdGFudHMuTU9OVEg6IHtcbiAgICAgIHJldHVybiB0cmFuc2xhdGUodHJhbnNsYXRpb25zLCAnbW9udGgnLCBnZXROb3Vuc0Zvcm0odGltaW5nKSk7XG4gICAgfVxuICAgIGNhc2UgUmVsYXRpdmVDb25zdGFudHMuV0VFSzoge1xuICAgICAgcmV0dXJuIHRyYW5zbGF0ZSh0cmFuc2xhdGlvbnMsICd3ZWVrJywgZ2V0Tm91bnNGb3JtKHRpbWluZykpO1xuICAgIH1cbiAgICBkZWZhdWx0OiB7XG4gICAgICByZXR1cm4gdHJhbnNsYXRlKHRyYW5zbGF0aW9ucywgJ2RheScsIGdldE5vdW5zRm9ybSh0aW1pbmcpKTtcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IGZvcm1hdExhYmVsID0gKGVuZERhdGUsIHRyYW5zbGF0aW9ucykgPT4ge1xuICBjb25zdCB7IHRpbWluZywgdW5pdCB9ID0gZW5kRGF0ZTtcbiAgY29uc3QgY291bnQgPSB0aW1pbmcgPiAwID8gYCske3RpbWluZ31gIDogdGltaW5nO1xuICByZXR1cm4gYCAoJHtjb3VudH0pICR7Z2V0TGFiZWwodW5pdCwgdGltaW5nLCB0cmFuc2xhdGlvbnMpfWA7XG59O1xuXG5leHBvcnQgZGVmYXVsdCAoc3RhcnREYXRlLCBlbmREYXRlLCB0cmFuc2xhdGlvbnMpID0+IChcbiAgYCR7c3RhcnREYXRlLmxhYmVsIHx8ICcnfSAgLSAke2Zvcm1hdExhYmVsKGVuZERhdGUsIHRyYW5zbGF0aW9ucyl9YFxuKTtcbiJdfQ==