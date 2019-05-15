"use strict";

exports.__esModule = true;
exports.default = void 0;

var _constants = _interopRequireDefault(require("./constants"));

var _constants2 = _interopRequireDefault(require("../relative/constants"));

var _translate = _interopRequireDefault(require("../../translations/translate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getNounsForm = function getNounsForm(timing) {
  switch (Math.abs(timing)) {
    case 1:
      {
        return _constants.default.SINGULAR;
      }

    default:
      {
        return _constants.default.PLURAL;
      }
  }
};

var getLabel = function getLabel(unit, timing, translations) {
  switch (unit) {
    case _constants2.default.MONTH:
      {
        return (0, _translate.default)(translations, 'month', getNounsForm(timing));
      }

    case _constants2.default.WEEK:
      {
        return (0, _translate.default)(translations, 'week', getNounsForm(timing));
      }

    case _constants2.default.WEEKDAY:
      {
        return (0, _translate.default)(translations, 'weekday', getNounsForm(timing));
      }

    default:
      {
        return (0, _translate.default)(translations, 'day', getNounsForm(timing));
      }
  }
};

var formatLabel = function formatLabel(endDate, translations) {
  var timing = endDate.timing,
      unit = endDate.unit;
  var count = timing > 0 ? "+" + timing : timing;
  return " (" + count + ") " + getLabel(unit, timing, translations);
};

var _default = function _default(startDate, endDate, translations) {
  return (startDate.label || '') + "  - " + formatLabel(endDate, translations);
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3BlcmlvZC9wZXJpb2QtbGFiZWwuZm9ybWF0dGVyLmpzIl0sIm5hbWVzIjpbImdldE5vdW5zRm9ybSIsInRpbWluZyIsIk1hdGgiLCJhYnMiLCJDb25zdGFudHMiLCJTSU5HVUxBUiIsIlBMVVJBTCIsImdldExhYmVsIiwidW5pdCIsInRyYW5zbGF0aW9ucyIsIlJlbGF0aXZlQ29uc3RhbnRzIiwiTU9OVEgiLCJXRUVLIiwiV0VFS0RBWSIsImZvcm1hdExhYmVsIiwiZW5kRGF0ZSIsImNvdW50Iiwic3RhcnREYXRlIiwibGFiZWwiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxNQUFELEVBQVk7QUFDL0IsVUFBUUMsSUFBSSxDQUFDQyxHQUFMLENBQVNGLE1BQVQsQ0FBUjtBQUNFLFNBQUssQ0FBTDtBQUFRO0FBQ04sZUFBT0csbUJBQVVDLFFBQWpCO0FBQ0Q7O0FBQ0Q7QUFBUztBQUNQLGVBQU9ELG1CQUFVRSxNQUFqQjtBQUNEO0FBTkg7QUFRRCxDQVREOztBQVdBLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLElBQUQsRUFBT1AsTUFBUCxFQUFlUSxZQUFmLEVBQWdDO0FBQy9DLFVBQVFELElBQVI7QUFDRSxTQUFLRSxvQkFBa0JDLEtBQXZCO0FBQThCO0FBQzVCLGVBQU8sd0JBQVVGLFlBQVYsRUFBd0IsT0FBeEIsRUFBaUNULFlBQVksQ0FBQ0MsTUFBRCxDQUE3QyxDQUFQO0FBQ0Q7O0FBQ0QsU0FBS1Msb0JBQWtCRSxJQUF2QjtBQUE2QjtBQUMzQixlQUFPLHdCQUFVSCxZQUFWLEVBQXdCLE1BQXhCLEVBQWdDVCxZQUFZLENBQUNDLE1BQUQsQ0FBNUMsQ0FBUDtBQUNEOztBQUNELFNBQUtTLG9CQUFrQkcsT0FBdkI7QUFBZ0M7QUFDOUIsZUFBTyx3QkFBVUosWUFBVixFQUF3QixTQUF4QixFQUFtQ1QsWUFBWSxDQUFDQyxNQUFELENBQS9DLENBQVA7QUFDRDs7QUFDRDtBQUFTO0FBQ1AsZUFBTyx3QkFBVVEsWUFBVixFQUF3QixLQUF4QixFQUErQlQsWUFBWSxDQUFDQyxNQUFELENBQTNDLENBQVA7QUFDRDtBQVpIO0FBY0QsQ0FmRDs7QUFpQkEsSUFBTWEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsT0FBRCxFQUFVTixZQUFWLEVBQTJCO0FBQUEsTUFDckNSLE1BRHFDLEdBQ3BCYyxPQURvQixDQUNyQ2QsTUFEcUM7QUFBQSxNQUM3Qk8sSUFENkIsR0FDcEJPLE9BRG9CLENBQzdCUCxJQUQ2QjtBQUU3QyxNQUFNUSxLQUFLLEdBQUdmLE1BQU0sR0FBRyxDQUFULFNBQWlCQSxNQUFqQixHQUE0QkEsTUFBMUM7QUFDQSxnQkFBWWUsS0FBWixVQUFzQlQsUUFBUSxDQUFDQyxJQUFELEVBQU9QLE1BQVAsRUFBZVEsWUFBZixDQUE5QjtBQUNELENBSkQ7O2VBTWUsa0JBQUNRLFNBQUQsRUFBWUYsT0FBWixFQUFxQk4sWUFBckI7QUFBQSxVQUNWUSxTQUFTLENBQUNDLEtBQVYsSUFBbUIsRUFEVCxhQUNrQkosV0FBVyxDQUFDQyxPQUFELEVBQVVOLFlBQVYsQ0FEN0I7QUFBQSxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbnN0YW50cyBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgUmVsYXRpdmVDb25zdGFudHMgZnJvbSAnLi4vcmVsYXRpdmUvY29uc3RhbnRzJztcbmltcG9ydCB0cmFuc2xhdGUgZnJvbSAnLi4vLi4vdHJhbnNsYXRpb25zL3RyYW5zbGF0ZSc7XG5cbmNvbnN0IGdldE5vdW5zRm9ybSA9ICh0aW1pbmcpID0+IHtcbiAgc3dpdGNoIChNYXRoLmFicyh0aW1pbmcpKSB7XG4gICAgY2FzZSAxOiB7XG4gICAgICByZXR1cm4gQ29uc3RhbnRzLlNJTkdVTEFSO1xuICAgIH1cbiAgICBkZWZhdWx0OiB7XG4gICAgICByZXR1cm4gQ29uc3RhbnRzLlBMVVJBTDtcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IGdldExhYmVsID0gKHVuaXQsIHRpbWluZywgdHJhbnNsYXRpb25zKSA9PiB7XG4gIHN3aXRjaCAodW5pdCkge1xuICAgIGNhc2UgUmVsYXRpdmVDb25zdGFudHMuTU9OVEg6IHtcbiAgICAgIHJldHVybiB0cmFuc2xhdGUodHJhbnNsYXRpb25zLCAnbW9udGgnLCBnZXROb3Vuc0Zvcm0odGltaW5nKSk7XG4gICAgfVxuICAgIGNhc2UgUmVsYXRpdmVDb25zdGFudHMuV0VFSzoge1xuICAgICAgcmV0dXJuIHRyYW5zbGF0ZSh0cmFuc2xhdGlvbnMsICd3ZWVrJywgZ2V0Tm91bnNGb3JtKHRpbWluZykpO1xuICAgIH1cbiAgICBjYXNlIFJlbGF0aXZlQ29uc3RhbnRzLldFRUtEQVk6IHtcbiAgICAgIHJldHVybiB0cmFuc2xhdGUodHJhbnNsYXRpb25zLCAnd2Vla2RheScsIGdldE5vdW5zRm9ybSh0aW1pbmcpKTtcbiAgICB9XG4gICAgZGVmYXVsdDoge1xuICAgICAgcmV0dXJuIHRyYW5zbGF0ZSh0cmFuc2xhdGlvbnMsICdkYXknLCBnZXROb3Vuc0Zvcm0odGltaW5nKSk7XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBmb3JtYXRMYWJlbCA9IChlbmREYXRlLCB0cmFuc2xhdGlvbnMpID0+IHtcbiAgY29uc3QgeyB0aW1pbmcsIHVuaXQgfSA9IGVuZERhdGU7XG4gIGNvbnN0IGNvdW50ID0gdGltaW5nID4gMCA/IGArJHt0aW1pbmd9YCA6IHRpbWluZztcbiAgcmV0dXJuIGAgKCR7Y291bnR9KSAke2dldExhYmVsKHVuaXQsIHRpbWluZywgdHJhbnNsYXRpb25zKX1gO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgKHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgdHJhbnNsYXRpb25zKSA9PiAoXG4gIGAke3N0YXJ0RGF0ZS5sYWJlbCB8fCAnJ30gIC0gJHtmb3JtYXRMYWJlbChlbmREYXRlLCB0cmFuc2xhdGlvbnMpfWBcbik7XG4iXX0=