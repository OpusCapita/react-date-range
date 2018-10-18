'use strict';

exports.__esModule = true;
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp, _initialiseProps;

var _templateObject = _taggedTemplateLiteralLoose(['\n  display: flex;\n  flex-direction: row;\n  height: 100%;\n  width: 100%;\n  padding: ', ' 0 0 0;\n'], ['\n  display: flex;\n  flex-direction: row;\n  height: 100%;\n  width: 100%;\n  padding: ', ' 0 0 0;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactFloatingSelect = require('@opuscapita/react-floating-select');

var _ocCmCommonLayouts = require('@opuscapita/oc-cm-common-layouts');

var _dateSection = require('../date-section.components');

var _dateSection2 = _interopRequireDefault(_dateSection);

var _hyphen = require('../hyphen.component');

var _hyphen2 = _interopRequireDefault(_hyphen);

var _propTypes = require('./prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _defaultProps = require('./default-props');

var _defaultProps2 = _interopRequireDefault(_defaultProps);

var _constants = require('./constants');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; } /* eslint-disable jsx-a11y/label-has-for */


var RelativeRangeSection = _styledComponents2.default.div(_templateObject, _ocCmCommonLayouts.theme.gutterWidth);

var RelativeDateRange = (_temp = _class = function (_React$PureComponent) {
  _inherits(RelativeDateRange, _React$PureComponent);

  function RelativeDateRange(props) {
    _classCallCheck(this, RelativeDateRange);

    var _this = _possibleConstructorReturn(this, _React$PureComponent.call(this, props));

    _initialiseProps.call(_this);

    var endDate = props.endDate,
        options = props.options,
        startDate = props.startDate;

    _this.state = {
      endDate: endDate,
      endDateOptions: startDate ? _this.filterEndDateOptions(startDate, options) : options,
      startDate: startDate,
      startDateOptions: endDate ? _this.filterStartDateOptions(endDate, options) : options
    };
    return _this;
  }

  RelativeDateRange.prototype.render = function render() {
    var _state = this.state,
        startDateOptions = _state.startDateOptions,
        endDateOptions = _state.endDateOptions,
        startDate = _state.startDate,
        endDate = _state.endDate;


    return _react2.default.createElement(
      RelativeRangeSection,
      null,
      _react2.default.createElement(
        _dateSection2.default,
        null,
        _react2.default.createElement(
          _ocCmCommonLayouts.Content.InputColumn,
          {
            className: 'relative-start-date',
            id: 'relativeStartDate',
            label: this.props.translations.startDate
          },
          _react2.default.createElement(_reactFloatingSelect.FloatingSelect, _extends({}, this.props, {
            clearable: false,
            onChange: this.handleStartDateChange,
            options: startDateOptions,
            value: startDate
          }))
        )
      ),
      _react2.default.createElement(_hyphen2.default, null),
      _react2.default.createElement(
        _dateSection2.default,
        null,
        _react2.default.createElement(
          _ocCmCommonLayouts.Content.InputColumn,
          {
            className: 'relative-end-date',
            id: 'relativeEndDate',
            label: this.props.translations.endDate
          },
          _react2.default.createElement(_reactFloatingSelect.FloatingSelect, _extends({}, this.props, {
            clearable: false,
            onChange: this.handleEndDateChange,
            options: endDateOptions,
            value: endDate
          }))
        )
      )
    );
  };

  return RelativeDateRange;
}(_react2.default.PureComponent), _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.filterEndDateOptions = function (startDate, endDateOptions) {
    var options = startDate.past ? endDateOptions : endDateOptions.filter(function (date) {
      return !date.past;
    });
    return options.filter(function (date) {
      return date.granularity !== startDate.granularity || startDate.order <= date.order;
    });
  };

  this.filterStartDateOptions = function (endDate, startDateOptions) {
    var options = endDate.past ? startDateOptions.filter(function (date) {
      return date.past;
    }) : startDateOptions;
    return options.filter(function (date) {
      return date.granularity !== endDate.granularity || date.order <= endDate.order;
    });
  };

  this.handleStartDateChange = function (selectedStartDate) {
    var startDate = selectedStartDate.value.moment ? selectedStartDate : Object.assign({}, selectedStartDate, { value: _extends({}, selectedStartDate.value, { moment: _constants2.default.START }) });
    var endDateOptions = _this2.filterEndDateOptions(startDate, _this2.state.endDateOptions);
    var endDate = _this2.state.endDate;

    _this2.setState({ endDateOptions: endDateOptions, startDate: startDate });
    var state = {
      startDate: startDate.value,
      popoverProps: {
        relativeRange: {
          startDate: startDate
        }
      }
    };
    if (endDate) {
      var endDateValue = endDate.value && !endDate.value.moment ? _extends({}, endDate.value, { moment: _constants2.default.END }) : endDate.value;
      state = _extends({}, state, {
        value: startDate.label + ' - ' + (endDate.label || ''),
        endDate: endDateValue,
        popoverProps: {
          relativeRange: _extends({}, state.popoverProps.relativeRange, {
            endDate: endDate
          })
        }
      });
    }
    _this2.props.onChange(state);
  };

  this.handleEndDateChange = function (selectedEndDate) {
    var endDate = selectedEndDate.value.moment ? selectedEndDate : Object.assign({}, selectedEndDate, { value: _extends({}, selectedEndDate.value, { moment: _constants2.default.END }) });
    var startDateOptions = _this2.filterStartDateOptions(endDate, _this2.state.startDateOptions);
    var startDate = _this2.state.startDate;

    _this2.setState({ startDateOptions: startDateOptions, endDate: endDate });
    var state = {
      endDate: endDate.value,
      popoverProps: {
        relativeRange: {
          endDate: endDate
        }
      }
    };
    if (startDate) {
      var startDateValue = startDate.value && !startDate.value.moment ? _extends({}, startDate.value, { moment: _constants2.default.START }) : startDate.value;
      state = _extends({}, state, {
        value: (startDate.label || '') + ' - ' + endDate.label,
        startDate: startDateValue,
        popoverProps: {
          relativeRange: _extends({}, state.popoverProps.relativeRange, {
            startDate: startDate
          })
        }
      });
    }
    _this2.props.onChange(state);
  };
}, _temp);
exports.default = RelativeDateRange;


RelativeDateRange.defaultProps = _defaultProps2.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3JlbGF0aXZlL3JlbGF0aXZlLWRhdGUtcmFuZ2UuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWxhdGl2ZVJhbmdlU2VjdGlvbiIsInN0eWxlZCIsImRpdiIsInRoZW1lIiwiZ3V0dGVyV2lkdGgiLCJSZWxhdGl2ZURhdGVSYW5nZSIsInByb3BzIiwiZW5kRGF0ZSIsIm9wdGlvbnMiLCJzdGFydERhdGUiLCJzdGF0ZSIsImVuZERhdGVPcHRpb25zIiwiZmlsdGVyRW5kRGF0ZU9wdGlvbnMiLCJzdGFydERhdGVPcHRpb25zIiwiZmlsdGVyU3RhcnREYXRlT3B0aW9ucyIsInJlbmRlciIsInRyYW5zbGF0aW9ucyIsImhhbmRsZVN0YXJ0RGF0ZUNoYW5nZSIsImhhbmRsZUVuZERhdGVDaGFuZ2UiLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJwYXN0IiwiZmlsdGVyIiwiZGF0ZSIsImdyYW51bGFyaXR5Iiwib3JkZXIiLCJzZWxlY3RlZFN0YXJ0RGF0ZSIsInZhbHVlIiwibW9tZW50IiwiT2JqZWN0IiwiYXNzaWduIiwiQ29uc3RhbnRzIiwiU1RBUlQiLCJzZXRTdGF0ZSIsInBvcG92ZXJQcm9wcyIsInJlbGF0aXZlUmFuZ2UiLCJlbmREYXRlVmFsdWUiLCJFTkQiLCJsYWJlbCIsIm9uQ2hhbmdlIiwic2VsZWN0ZWRFbmREYXRlIiwic3RhcnREYXRlVmFsdWUiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOztBQUNBOztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OzswRkFYQTs7O0FBYUEsSUFBTUEsdUJBQXVCQywyQkFBT0MsR0FBOUIsa0JBS09DLHlCQUFNQyxXQUxiLENBQU47O0lBUXFCQyxpQjs7O0FBQ25CLDZCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsaURBQ2pCLGdDQUFNQSxLQUFOLENBRGlC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R0FBckQsR0FBRixFQUZGLENBREY7QUFLQSxRQUFNeEIsbUJBQW1CLE9BQUtDLHNCQUFMLENBQTRCUCxPQUE1QixFQUFxQyxPQUFLRyxLQUFMLENBQVdHLGdCQUFoRCxDQUF6QjtBQU55QyxRQU9qQ0osU0FQaUMsR0FPbkIsT0FBS0MsS0FQYyxDQU9qQ0QsU0FQaUM7O0FBUXpDLFdBQUt3QixRQUFMLENBQWMsRUFBRXBCLGtDQUFGLEVBQW9CTixnQkFBcEIsRUFBZDtBQUNBLFFBQUlHLFFBQVE7QUFDVkgsZUFBU0EsUUFBUW9CLEtBRFA7QUFFVk8sb0JBQWM7QUFDWkMsdUJBQWU7QUFDYjVCO0FBRGE7QUFESDtBQUZKLEtBQVo7QUFRQSxRQUFJRSxTQUFKLEVBQWU7QUFDYixVQUFNZ0MsaUJBQWlCaEMsVUFBVWtCLEtBQVYsSUFBbUIsQ0FBQ2xCLFVBQVVrQixLQUFWLENBQWdCQyxNQUFwQyxnQkFDZG5CLFVBQVVrQixLQURJLElBQ0dDLFFBQVFHLG9CQUFVQyxLQURyQixNQUVuQnZCLFVBQVVrQixLQUZkO0FBR0FqQiwyQkFDS0EsS0FETDtBQUVFaUIsZ0JBQVVsQixVQUFVNkIsS0FBVixJQUFtQixFQUE3QixZQUFxQy9CLFFBQVErQixLQUYvQztBQUdFN0IsbUJBQVdnQyxjQUhiO0FBSUVQLHNCQUFjO0FBQ1pDLHNDQUNLekIsTUFBTXdCLFlBQU4sQ0FBbUJDLGFBRHhCO0FBRUUxQjtBQUZGO0FBRFk7QUFKaEI7QUFXRDtBQUNELFdBQUtILEtBQUwsQ0FBV2lDLFFBQVgsQ0FBb0I3QixLQUFwQjtBQUNELEc7O2tCQXhHa0JMLGlCOzs7QUEwSnJCQSxrQkFBa0JxQyxZQUFsQixHQUFpQ0Esc0JBQWpDIiwiZmlsZSI6InJlbGF0aXZlLWRhdGUtcmFuZ2UuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvbGFiZWwtaGFzLWZvciAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgeyBGbG9hdGluZ1NlbGVjdCB9IGZyb20gJ0BvcHVzY2FwaXRhL3JlYWN0LWZsb2F0aW5nLXNlbGVjdCc7XG5pbXBvcnQgeyBDb250ZW50LCB0aGVtZSB9IGZyb20gJ0BvcHVzY2FwaXRhL29jLWNtLWNvbW1vbi1sYXlvdXRzJztcblxuaW1wb3J0IERhdGVTZWN0aW9uIGZyb20gJy4uL2RhdGUtc2VjdGlvbi5jb21wb25lbnRzJztcbmltcG9ydCBIeXBoZW4gZnJvbSAnLi4vaHlwaGVuLmNvbXBvbmVudCc7XG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gJy4vcHJvcC10eXBlcyc7XG5pbXBvcnQgZGVmYXVsdFByb3BzIGZyb20gJy4vZGVmYXVsdC1wcm9wcyc7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJy4vY29uc3RhbnRzJztcblxuY29uc3QgUmVsYXRpdmVSYW5nZVNlY3Rpb24gPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAke3RoZW1lLmd1dHRlcldpZHRofSAwIDAgMDtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbGF0aXZlRGF0ZVJhbmdlIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgY29uc3QgeyBlbmREYXRlLCBvcHRpb25zLCBzdGFydERhdGUgfSA9IHByb3BzO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBlbmREYXRlLFxuICAgICAgZW5kRGF0ZU9wdGlvbnM6IHN0YXJ0RGF0ZSA/XG4gICAgICAgIHRoaXMuZmlsdGVyRW5kRGF0ZU9wdGlvbnMoc3RhcnREYXRlLCBvcHRpb25zKSA6XG4gICAgICAgIG9wdGlvbnMsXG4gICAgICBzdGFydERhdGUsXG4gICAgICBzdGFydERhdGVPcHRpb25zOiBlbmREYXRlID9cbiAgICAgICAgdGhpcy5maWx0ZXJTdGFydERhdGVPcHRpb25zKGVuZERhdGUsIG9wdGlvbnMpIDpcbiAgICAgICAgb3B0aW9ucyxcbiAgICB9O1xuICB9XG5cbiAgZmlsdGVyRW5kRGF0ZU9wdGlvbnMgPSAoc3RhcnREYXRlLCBlbmREYXRlT3B0aW9ucykgPT4ge1xuICAgIGNvbnN0IG9wdGlvbnMgPSBzdGFydERhdGUucGFzdCA/IGVuZERhdGVPcHRpb25zIDpcbiAgICAgIGVuZERhdGVPcHRpb25zLmZpbHRlcihkYXRlID0+ICFkYXRlLnBhc3QpO1xuICAgIHJldHVybiBvcHRpb25zLmZpbHRlcihkYXRlID0+XG4gICAgICBkYXRlLmdyYW51bGFyaXR5ICE9PSBzdGFydERhdGUuZ3JhbnVsYXJpdHkgfHxcbiAgICAgIHN0YXJ0RGF0ZS5vcmRlciA8PSBkYXRlLm9yZGVyKTtcbiAgfVxuXG4gIGZpbHRlclN0YXJ0RGF0ZU9wdGlvbnMgPSAoZW5kRGF0ZSwgc3RhcnREYXRlT3B0aW9ucykgPT4ge1xuICAgIGNvbnN0IG9wdGlvbnMgPSBlbmREYXRlLnBhc3QgP1xuICAgICAgc3RhcnREYXRlT3B0aW9ucy5maWx0ZXIoZGF0ZSA9PiBkYXRlLnBhc3QpIDpcbiAgICAgIHN0YXJ0RGF0ZU9wdGlvbnM7XG4gICAgcmV0dXJuIG9wdGlvbnMuZmlsdGVyKGRhdGUgPT5cbiAgICAgIGRhdGUuZ3JhbnVsYXJpdHkgIT09IGVuZERhdGUuZ3JhbnVsYXJpdHkgfHxcbiAgICAgIGRhdGUub3JkZXIgPD0gZW5kRGF0ZS5vcmRlcik7XG4gIH1cblxuICBoYW5kbGVTdGFydERhdGVDaGFuZ2UgPSAoc2VsZWN0ZWRTdGFydERhdGUpID0+IHtcbiAgICBjb25zdCBzdGFydERhdGUgPSBzZWxlY3RlZFN0YXJ0RGF0ZS52YWx1ZS5tb21lbnQgPyBzZWxlY3RlZFN0YXJ0RGF0ZSA6XG4gICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICB7fSwgc2VsZWN0ZWRTdGFydERhdGUsXG4gICAgICAgIHsgdmFsdWU6IHsgLi4uc2VsZWN0ZWRTdGFydERhdGUudmFsdWUsIG1vbWVudDogQ29uc3RhbnRzLlNUQVJUIH0gfSxcbiAgICAgICk7XG4gICAgY29uc3QgZW5kRGF0ZU9wdGlvbnMgPSB0aGlzLmZpbHRlckVuZERhdGVPcHRpb25zKHN0YXJ0RGF0ZSwgdGhpcy5zdGF0ZS5lbmREYXRlT3B0aW9ucyk7XG4gICAgY29uc3QgeyBlbmREYXRlIH0gPSB0aGlzLnN0YXRlO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBlbmREYXRlT3B0aW9ucywgc3RhcnREYXRlIH0pO1xuICAgIGxldCBzdGF0ZSA9IHtcbiAgICAgIHN0YXJ0RGF0ZTogc3RhcnREYXRlLnZhbHVlLFxuICAgICAgcG9wb3ZlclByb3BzOiB7XG4gICAgICAgIHJlbGF0aXZlUmFuZ2U6IHtcbiAgICAgICAgICBzdGFydERhdGUsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH07XG4gICAgaWYgKGVuZERhdGUpIHtcbiAgICAgIGNvbnN0IGVuZERhdGVWYWx1ZSA9IGVuZERhdGUudmFsdWUgJiYgIWVuZERhdGUudmFsdWUubW9tZW50XG4gICAgICAgID8geyAuLi5lbmREYXRlLnZhbHVlLCBtb21lbnQ6IENvbnN0YW50cy5FTkQgfVxuICAgICAgICA6IGVuZERhdGUudmFsdWU7XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHZhbHVlOiBgJHtzdGFydERhdGUubGFiZWx9IC0gJHtlbmREYXRlLmxhYmVsIHx8ICcnfWAsXG4gICAgICAgIGVuZERhdGU6IGVuZERhdGVWYWx1ZSxcbiAgICAgICAgcG9wb3ZlclByb3BzOiB7XG4gICAgICAgICAgcmVsYXRpdmVSYW5nZToge1xuICAgICAgICAgICAgLi4uc3RhdGUucG9wb3ZlclByb3BzLnJlbGF0aXZlUmFuZ2UsXG4gICAgICAgICAgICBlbmREYXRlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH1cbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHN0YXRlKTtcbiAgfVxuXG4gIGhhbmRsZUVuZERhdGVDaGFuZ2UgPSAoc2VsZWN0ZWRFbmREYXRlKSA9PiB7XG4gICAgY29uc3QgZW5kRGF0ZSA9IHNlbGVjdGVkRW5kRGF0ZS52YWx1ZS5tb21lbnQgPyBzZWxlY3RlZEVuZERhdGUgOlxuICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAge30sIHNlbGVjdGVkRW5kRGF0ZSxcbiAgICAgICAgeyB2YWx1ZTogeyAuLi5zZWxlY3RlZEVuZERhdGUudmFsdWUsIG1vbWVudDogQ29uc3RhbnRzLkVORCB9IH0sXG4gICAgICApO1xuICAgIGNvbnN0IHN0YXJ0RGF0ZU9wdGlvbnMgPSB0aGlzLmZpbHRlclN0YXJ0RGF0ZU9wdGlvbnMoZW5kRGF0ZSwgdGhpcy5zdGF0ZS5zdGFydERhdGVPcHRpb25zKTtcbiAgICBjb25zdCB7IHN0YXJ0RGF0ZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICB0aGlzLnNldFN0YXRlKHsgc3RhcnREYXRlT3B0aW9ucywgZW5kRGF0ZSB9KTtcbiAgICBsZXQgc3RhdGUgPSB7XG4gICAgICBlbmREYXRlOiBlbmREYXRlLnZhbHVlLFxuICAgICAgcG9wb3ZlclByb3BzOiB7XG4gICAgICAgIHJlbGF0aXZlUmFuZ2U6IHtcbiAgICAgICAgICBlbmREYXRlLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9O1xuICAgIGlmIChzdGFydERhdGUpIHtcbiAgICAgIGNvbnN0IHN0YXJ0RGF0ZVZhbHVlID0gc3RhcnREYXRlLnZhbHVlICYmICFzdGFydERhdGUudmFsdWUubW9tZW50XG4gICAgICAgID8geyAuLi5zdGFydERhdGUudmFsdWUsIG1vbWVudDogQ29uc3RhbnRzLlNUQVJUIH1cbiAgICAgICAgOiBzdGFydERhdGUudmFsdWU7XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHZhbHVlOiBgJHtzdGFydERhdGUubGFiZWwgfHwgJyd9IC0gJHtlbmREYXRlLmxhYmVsfWAsXG4gICAgICAgIHN0YXJ0RGF0ZTogc3RhcnREYXRlVmFsdWUsXG4gICAgICAgIHBvcG92ZXJQcm9wczoge1xuICAgICAgICAgIHJlbGF0aXZlUmFuZ2U6IHtcbiAgICAgICAgICAgIC4uLnN0YXRlLnBvcG92ZXJQcm9wcy5yZWxhdGl2ZVJhbmdlLFxuICAgICAgICAgICAgc3RhcnREYXRlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH1cbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHN0YXRlKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBzdGFydERhdGVPcHRpb25zLFxuICAgICAgZW5kRGF0ZU9wdGlvbnMsXG4gICAgICBzdGFydERhdGUsXG4gICAgICBlbmREYXRlLFxuICAgIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWxhdGl2ZVJhbmdlU2VjdGlvbj5cbiAgICAgICAgPERhdGVTZWN0aW9uPlxuICAgICAgICAgIDxDb250ZW50LklucHV0Q29sdW1uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZS1zdGFydC1kYXRlXCJcbiAgICAgICAgICAgIGlkPVwicmVsYXRpdmVTdGFydERhdGVcIlxuICAgICAgICAgICAgbGFiZWw9e3RoaXMucHJvcHMudHJhbnNsYXRpb25zLnN0YXJ0RGF0ZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8RmxvYXRpbmdTZWxlY3RcbiAgICAgICAgICAgICAgey4uLnRoaXMucHJvcHN9XG4gICAgICAgICAgICAgIGNsZWFyYWJsZT17ZmFsc2V9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVN0YXJ0RGF0ZUNoYW5nZX1cbiAgICAgICAgICAgICAgb3B0aW9ucz17c3RhcnREYXRlT3B0aW9uc31cbiAgICAgICAgICAgICAgdmFsdWU9e3N0YXJ0RGF0ZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Db250ZW50LklucHV0Q29sdW1uPlxuICAgICAgICA8L0RhdGVTZWN0aW9uPlxuICAgICAgICA8SHlwaGVuIC8+XG4gICAgICAgIDxEYXRlU2VjdGlvbj5cbiAgICAgICAgICA8Q29udGVudC5JbnB1dENvbHVtblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUtZW5kLWRhdGVcIlxuICAgICAgICAgICAgaWQ9XCJyZWxhdGl2ZUVuZERhdGVcIlxuICAgICAgICAgICAgbGFiZWw9e3RoaXMucHJvcHMudHJhbnNsYXRpb25zLmVuZERhdGV9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEZsb2F0aW5nU2VsZWN0XG4gICAgICAgICAgICAgIHsuLi50aGlzLnByb3BzfVxuICAgICAgICAgICAgICBjbGVhcmFibGU9e2ZhbHNlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVFbmREYXRlQ2hhbmdlfVxuICAgICAgICAgICAgICBvcHRpb25zPXtlbmREYXRlT3B0aW9uc31cbiAgICAgICAgICAgICAgdmFsdWU9e2VuZERhdGV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQ29udGVudC5JbnB1dENvbHVtbj5cbiAgICAgICAgPC9EYXRlU2VjdGlvbj5cbiAgICAgIDwvUmVsYXRpdmVSYW5nZVNlY3Rpb24+XG4gICAgKTtcbiAgfVxufVxuXG5SZWxhdGl2ZURhdGVSYW5nZS5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5cblJlbGF0aXZlRGF0ZVJhbmdlLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcbiJdfQ==