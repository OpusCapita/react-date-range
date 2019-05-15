"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactFloatingSelect = require("@opuscapita/react-floating-select");

var _ocCmCommonLayouts = require("@opuscapita/oc-cm-common-layouts");

var _dateSection = _interopRequireDefault(require("../date-section.components"));

var _hyphen = _interopRequireDefault(require("../hyphen.component"));

var _propTypes = _interopRequireDefault(require("./prop-types"));

var _defaultProps = _interopRequireDefault(require("./default-props"));

var _constants = _interopRequireDefault(require("./constants"));

var _relativeOptions = _interopRequireDefault(require("./relative-options"));

var _translate = _interopRequireDefault(require("../../translations/translate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  flex-direction: row;\n  height: 100%;\n  width: 100%;\n  padding: ", " 0 0 0;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var RelativeRangeSection = _styledComponents.default.div(_templateObject(), _ocCmCommonLayouts.theme.gutterWidth);

var RelativeDateRange =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(RelativeDateRange, _React$PureComponent);

  function RelativeDateRange(props) {
    var _this;

    _this = _React$PureComponent.call(this, props) || this;

    _defineProperty(_assertThisInitialized(_this), "filterEndDateOptions", function (startDate, endDateOptions) {
      var options = startDate.past ? endDateOptions : endDateOptions.filter(function (date) {
        return !date.past;
      });
      return options.filter(function (date) {
        return date.granularity !== startDate.granularity || startDate.order <= date.order;
      });
    });

    _defineProperty(_assertThisInitialized(_this), "filterStartDateOptions", function (endDate, startDateOptions) {
      var options = endDate.past ? startDateOptions.filter(function (date) {
        return date.past;
      }) : startDateOptions;
      return options.filter(function (date) {
        return date.granularity !== endDate.granularity || date.order <= endDate.order;
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleStartDateChange", function (selectedStartDate) {
      var startDate = selectedStartDate.value.moment ? selectedStartDate : Object.assign({}, selectedStartDate, {
        value: _extends({}, selectedStartDate.value, {
          moment: _constants.default.START
        })
      });

      var endDateOptions = _this.filterEndDateOptions(startDate, _this.state.endDateOptions);

      var endDate = _this.state.endDate;

      _this.setState({
        endDateOptions: endDateOptions,
        startDate: startDate
      });

      var state = {
        startDate: startDate.value,
        relativeRange: {
          startDate: startDate
        }
      };

      if (endDate) {
        var endDateValue = endDate.value && !endDate.value.moment ? _extends({}, endDate.value, {
          moment: _constants.default.END
        }) : endDate.value;
        state = _extends({}, state, {
          value: startDate.label + " - " + (endDate.label || ''),
          endDate: endDateValue,
          relativeRange: _extends({}, state.relativeRange, {
            endDate: endDate
          })
        });
      }

      _this.props.onChange(state);
    });

    _defineProperty(_assertThisInitialized(_this), "handleEndDateChange", function (selectedEndDate) {
      var endDate = selectedEndDate.value.moment ? selectedEndDate : Object.assign({}, selectedEndDate, {
        value: _extends({}, selectedEndDate.value, {
          moment: _constants.default.END
        })
      });

      var startDateOptions = _this.filterStartDateOptions(endDate, _this.state.startDateOptions);

      var startDate = _this.state.startDate;

      _this.setState({
        startDateOptions: startDateOptions,
        endDate: endDate
      });

      var state = {
        endDate: endDate.value,
        relativeRange: {
          endDate: endDate
        }
      };

      if (startDate) {
        var startDateValue = startDate.value && !startDate.value.moment ? _extends({}, startDate.value, {
          moment: _constants.default.START
        }) : startDate.value;
        state = _extends({}, state, {
          value: (startDate.label || '') + " - " + endDate.label,
          startDate: startDateValue,
          relativeRange: _extends({}, state.relativeRange, {
            startDate: startDate
          })
        });
      }

      _this.props.onChange(state);
    });

    var _endDate = props.endDate,
        _startDate = props.startDate,
        translations = props.translations;

    var _options = (0, _relativeOptions.default)((0, _translate.default)(translations, 'dates'));

    _this.state = {
      endDate: _endDate,
      endDateOptions: _startDate ? _this.filterEndDateOptions(_startDate, _options) : _options,
      startDate: _startDate,
      startDateOptions: _endDate ? _this.filterStartDateOptions(_endDate, _options) : _options
    };
    return _this;
  }

  var _proto = RelativeDateRange.prototype;

  _proto.render = function render() {
    var _this$state = this.state,
        startDateOptions = _this$state.startDateOptions,
        endDateOptions = _this$state.endDateOptions,
        startDate = _this$state.startDate,
        endDate = _this$state.endDate;
    var translations = this.props.translations;
    return _react.default.createElement(RelativeRangeSection, null, _react.default.createElement(_dateSection.default, null, _react.default.createElement(_ocCmCommonLayouts.Content.InputColumn, {
      className: "relative-start-date",
      id: "relativeStartDate",
      label: (0, _translate.default)(translations, 'startDate')
    }, _react.default.createElement(_reactFloatingSelect.FloatingSelect, _extends({}, this.props, {
      clearable: false,
      onChange: this.handleStartDateChange,
      options: startDateOptions,
      placeholder: translations.startDatePlaceholder,
      value: startDate
    })))), _react.default.createElement(_hyphen.default, null), _react.default.createElement(_dateSection.default, null, _react.default.createElement(_ocCmCommonLayouts.Content.InputColumn, {
      className: "relative-end-date",
      id: "relativeEndDate",
      label: (0, _translate.default)(translations, 'endDate')
    }, _react.default.createElement(_reactFloatingSelect.FloatingSelect, _extends({}, this.props, {
      clearable: false,
      onChange: this.handleEndDateChange,
      options: endDateOptions,
      placeholder: translations.endDatePlaceholder,
      value: endDate
    })))));
  };

  return RelativeDateRange;
}(_react.default.PureComponent);

exports.default = RelativeDateRange;
RelativeDateRange.defaultProps = _defaultProps.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3JlbGF0aXZlL3JlbGF0aXZlLWRhdGUtcmFuZ2UuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWxhdGl2ZVJhbmdlU2VjdGlvbiIsInN0eWxlZCIsImRpdiIsInRoZW1lIiwiZ3V0dGVyV2lkdGgiLCJSZWxhdGl2ZURhdGVSYW5nZSIsInByb3BzIiwic3RhcnREYXRlIiwiZW5kRGF0ZU9wdGlvbnMiLCJvcHRpb25zIiwicGFzdCIsImZpbHRlciIsImRhdGUiLCJncmFudWxhcml0eSIsIm9yZGVyIiwiZW5kRGF0ZSIsInN0YXJ0RGF0ZU9wdGlvbnMiLCJzZWxlY3RlZFN0YXJ0RGF0ZSIsInZhbHVlIiwibW9tZW50IiwiT2JqZWN0IiwiYXNzaWduIiwiQ29uc3RhbnRzIiwiU1RBUlQiLCJmaWx0ZXJFbmREYXRlT3B0aW9ucyIsInN0YXRlIiwic2V0U3RhdGUiLCJyZWxhdGl2ZVJhbmdlIiwiZW5kRGF0ZVZhbHVlIiwiRU5EIiwibGFiZWwiLCJvbkNoYW5nZSIsInNlbGVjdGVkRW5kRGF0ZSIsImZpbHRlclN0YXJ0RGF0ZU9wdGlvbnMiLCJzdGFydERhdGVWYWx1ZSIsInRyYW5zbGF0aW9ucyIsInJlbmRlciIsImhhbmRsZVN0YXJ0RGF0ZUNoYW5nZSIsInN0YXJ0RGF0ZVBsYWNlaG9sZGVyIiwiaGFuZGxlRW5kRGF0ZUNoYW5nZSIsImVuZERhdGVQbGFjZWhvbGRlciIsIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsb0JBQW9CLEdBQUdDLDBCQUFPQyxHQUFWLG9CQUtiQyx5QkFBTUMsV0FMTyxDQUExQjs7SUFRcUJDLGlCOzs7OztBQUNuQiw2QkFBWUMsS0FBWixFQUFtQjtB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bUJBRkw7QUFHRSxNQUFBLEtBQUssRUFBRSx3QkFBVUEsWUFBVixFQUF3QixXQUF4QjtBQUhULE9BS0UsNkJBQUMsbUNBQUQsZUFDTSxLQUFLN0IsS0FEWDtBQUVFLE1BQUEsU0FBUyxFQUFFLEtBRmI7QUFHRSxNQUFBLFFBQVEsRUFBRSxLQUFLK0IscUJBSGpCO0FBSUUsTUFBQSxPQUFPLEVBQUVyQixnQkFKWDtBQUtFLE1BQUEsV0FBVyxFQUFFbUIsWUFBWSxDQUFDRyxvQkFMNUI7QUFNRSxNQUFBLEtBQUssRUFBRS9CO0FBTlQsT0FMRixDQURGLENBREYsRUFpQkUsNkJBQUMsZUFBRCxPQWpCRixFQWtCRSw2QkFBQyxvQkFBRCxRQUNFLDZCQUFDLDBCQUFELENBQVMsV0FBVDtBQUNFLE1BQUEsU0FBUyxFQUFDLG1CQURaO0FBRUUsTUFBQSxFQUFFLEVBQUMsaUJBRkw7QUFHRSxNQUFBLEtBQUssRUFBRSx3QkFBVTRCLFlBQVYsRUFBd0IsU0FBeEI7QUFIVCxPQUtFLDZCQUFDLG1DQUFELGVBQ00sS0FBSzdCLEtBRFg7QUFFRSxNQUFBLFNBQVMsRUFBRSxLQUZiO0FBR0UsTUFBQSxRQUFRLEVBQUUsS0FBS2lDLG1CQUhqQjtBQUlFLE1BQUEsT0FBTyxFQUFFL0IsY0FKWDtBQUtFLE1BQUEsV0FBVyxFQUFFMkIsWUFBWSxDQUFDSyxrQkFMNUI7QUFNRSxNQUFBLEtBQUssRUFBRXpCO0FBTlQsT0FMRixDQURGLENBbEJGLENBREY7QUFxQ0QsRzs7O0VBako0QzBCLGVBQU1DLGE7OztBQXNKckRyQyxpQkFBaUIsQ0FBQ3NDLFlBQWxCLEdBQWlDQSxxQkFBakMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9sYWJlbC1oYXMtZm9yICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCB7IEZsb2F0aW5nU2VsZWN0IH0gZnJvbSAnQG9wdXNjYXBpdGEvcmVhY3QtZmxvYXRpbmctc2VsZWN0JztcbmltcG9ydCB7IENvbnRlbnQsIHRoZW1lIH0gZnJvbSAnQG9wdXNjYXBpdGEvb2MtY20tY29tbW9uLWxheW91dHMnO1xuXG5pbXBvcnQgRGF0ZVNlY3Rpb24gZnJvbSAnLi4vZGF0ZS1zZWN0aW9uLmNvbXBvbmVudHMnO1xuaW1wb3J0IEh5cGhlbiBmcm9tICcuLi9oeXBoZW4uY29tcG9uZW50JztcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSAnLi9wcm9wLXR5cGVzJztcbmltcG9ydCBkZWZhdWx0UHJvcHMgZnJvbSAnLi9kZWZhdWx0LXByb3BzJztcbmltcG9ydCBDb25zdGFudHMgZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHJlbGF0aXZlT3B0aW9ucyBmcm9tICcuL3JlbGF0aXZlLW9wdGlvbnMnO1xuaW1wb3J0IHRyYW5zbGF0ZSBmcm9tICcuLi8uLi90cmFuc2xhdGlvbnMvdHJhbnNsYXRlJztcblxuY29uc3QgUmVsYXRpdmVSYW5nZVNlY3Rpb24gPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAke3RoZW1lLmd1dHRlcldpZHRofSAwIDAgMDtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbGF0aXZlRGF0ZVJhbmdlIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgY29uc3QgeyBlbmREYXRlLCBzdGFydERhdGUsIHRyYW5zbGF0aW9ucyB9ID0gcHJvcHM7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHJlbGF0aXZlT3B0aW9ucyh0cmFuc2xhdGUodHJhbnNsYXRpb25zLCAnZGF0ZXMnKSk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGVuZERhdGUsXG4gICAgICBlbmREYXRlT3B0aW9uczogc3RhcnREYXRlID9cbiAgICAgICAgdGhpcy5maWx0ZXJFbmREYXRlT3B0aW9ucyhzdGFydERhdGUsIG9wdGlvbnMpIDpcbiAgICAgICAgb3B0aW9ucyxcbiAgICAgIHN0YXJ0RGF0ZSxcbiAgICAgIHN0YXJ0RGF0ZU9wdGlvbnM6IGVuZERhdGUgP1xuICAgICAgICB0aGlzLmZpbHRlclN0YXJ0RGF0ZU9wdGlvbnMoZW5kRGF0ZSwgb3B0aW9ucykgOlxuICAgICAgICBvcHRpb25zLFxuICAgIH07XG4gIH1cblxuICBmaWx0ZXJFbmREYXRlT3B0aW9ucyA9IChzdGFydERhdGUsIGVuZERhdGVPcHRpb25zKSA9PiB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHN0YXJ0RGF0ZS5wYXN0ID8gZW5kRGF0ZU9wdGlvbnMgOlxuICAgICAgZW5kRGF0ZU9wdGlvbnMuZmlsdGVyKGRhdGUgPT4gIWRhdGUucGFzdCk7XG4gICAgcmV0dXJuIG9wdGlvbnMuZmlsdGVyKGRhdGUgPT5cbiAgICAgIGRhdGUuZ3JhbnVsYXJpdHkgIT09IHN0YXJ0RGF0ZS5ncmFudWxhcml0eSB8fFxuICAgICAgc3RhcnREYXRlLm9yZGVyIDw9IGRhdGUub3JkZXIpO1xuICB9XG5cbiAgZmlsdGVyU3RhcnREYXRlT3B0aW9ucyA9IChlbmREYXRlLCBzdGFydERhdGVPcHRpb25zKSA9PiB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IGVuZERhdGUucGFzdCA/XG4gICAgICBzdGFydERhdGVPcHRpb25zLmZpbHRlcihkYXRlID0+IGRhdGUucGFzdCkgOlxuICAgICAgc3RhcnREYXRlT3B0aW9ucztcbiAgICByZXR1cm4gb3B0aW9ucy5maWx0ZXIoZGF0ZSA9PlxuICAgICAgZGF0ZS5ncmFudWxhcml0eSAhPT0gZW5kRGF0ZS5ncmFudWxhcml0eSB8fFxuICAgICAgZGF0ZS5vcmRlciA8PSBlbmREYXRlLm9yZGVyKTtcbiAgfVxuXG4gIGhhbmRsZVN0YXJ0RGF0ZUNoYW5nZSA9IChzZWxlY3RlZFN0YXJ0RGF0ZSkgPT4ge1xuICAgIGNvbnN0IHN0YXJ0RGF0ZSA9IHNlbGVjdGVkU3RhcnREYXRlLnZhbHVlLm1vbWVudCA/IHNlbGVjdGVkU3RhcnREYXRlIDpcbiAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgIHt9LCBzZWxlY3RlZFN0YXJ0RGF0ZSxcbiAgICAgICAgeyB2YWx1ZTogeyAuLi5zZWxlY3RlZFN0YXJ0RGF0ZS52YWx1ZSwgbW9tZW50OiBDb25zdGFudHMuU1RBUlQgfSB9LFxuICAgICAgKTtcbiAgICBjb25zdCBlbmREYXRlT3B0aW9ucyA9IHRoaXMuZmlsdGVyRW5kRGF0ZU9wdGlvbnMoc3RhcnREYXRlLCB0aGlzLnN0YXRlLmVuZERhdGVPcHRpb25zKTtcbiAgICBjb25zdCB7IGVuZERhdGUgfSA9IHRoaXMuc3RhdGU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGVuZERhdGVPcHRpb25zLCBzdGFydERhdGUgfSk7XG4gICAgbGV0IHN0YXRlID0ge1xuICAgICAgc3RhcnREYXRlOiBzdGFydERhdGUudmFsdWUsXG4gICAgICByZWxhdGl2ZVJhbmdlOiB7XG4gICAgICAgIHN0YXJ0RGF0ZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgICBpZiAoZW5kRGF0ZSkge1xuICAgICAgY29uc3QgZW5kRGF0ZVZhbHVlID0gZW5kRGF0ZS52YWx1ZSAmJiAhZW5kRGF0ZS52YWx1ZS5tb21lbnRcbiAgICAgICAgPyB7IC4uLmVuZERhdGUudmFsdWUsIG1vbWVudDogQ29uc3RhbnRzLkVORCB9XG4gICAgICAgIDogZW5kRGF0ZS52YWx1ZTtcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgdmFsdWU6IGAke3N0YXJ0RGF0ZS5sYWJlbH0gLSAke2VuZERhdGUubGFiZWwgfHwgJyd9YCxcbiAgICAgICAgZW5kRGF0ZTogZW5kRGF0ZVZhbHVlLFxuICAgICAgICByZWxhdGl2ZVJhbmdlOiB7XG4gICAgICAgICAgLi4uc3RhdGUucmVsYXRpdmVSYW5nZSxcbiAgICAgICAgICBlbmREYXRlLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShzdGF0ZSk7XG4gIH1cblxuICBoYW5kbGVFbmREYXRlQ2hhbmdlID0gKHNlbGVjdGVkRW5kRGF0ZSkgPT4ge1xuICAgIGNvbnN0IGVuZERhdGUgPSBzZWxlY3RlZEVuZERhdGUudmFsdWUubW9tZW50ID8gc2VsZWN0ZWRFbmREYXRlIDpcbiAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgIHt9LCBzZWxlY3RlZEVuZERhdGUsXG4gICAgICAgIHsgdmFsdWU6IHsgLi4uc2VsZWN0ZWRFbmREYXRlLnZhbHVlLCBtb21lbnQ6IENvbnN0YW50cy5FTkQgfSB9LFxuICAgICAgKTtcbiAgICBjb25zdCBzdGFydERhdGVPcHRpb25zID0gdGhpcy5maWx0ZXJTdGFydERhdGVPcHRpb25zKGVuZERhdGUsIHRoaXMuc3RhdGUuc3RhcnREYXRlT3B0aW9ucyk7XG4gICAgY29uc3QgeyBzdGFydERhdGUgfSA9IHRoaXMuc3RhdGU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHN0YXJ0RGF0ZU9wdGlvbnMsIGVuZERhdGUgfSk7XG4gICAgbGV0IHN0YXRlID0ge1xuICAgICAgZW5kRGF0ZTogZW5kRGF0ZS52YWx1ZSxcbiAgICAgIHJlbGF0aXZlUmFuZ2U6IHtcbiAgICAgICAgZW5kRGF0ZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgICBpZiAoc3RhcnREYXRlKSB7XG4gICAgICBjb25zdCBzdGFydERhdGVWYWx1ZSA9IHN0YXJ0RGF0ZS52YWx1ZSAmJiAhc3RhcnREYXRlLnZhbHVlLm1vbWVudFxuICAgICAgICA/IHsgLi4uc3RhcnREYXRlLnZhbHVlLCBtb21lbnQ6IENvbnN0YW50cy5TVEFSVCB9XG4gICAgICAgIDogc3RhcnREYXRlLnZhbHVlO1xuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICB2YWx1ZTogYCR7c3RhcnREYXRlLmxhYmVsIHx8ICcnfSAtICR7ZW5kRGF0ZS5sYWJlbH1gLFxuICAgICAgICBzdGFydERhdGU6IHN0YXJ0RGF0ZVZhbHVlLFxuICAgICAgICByZWxhdGl2ZVJhbmdlOiB7XG4gICAgICAgICAgLi4uc3RhdGUucmVsYXRpdmVSYW5nZSxcbiAgICAgICAgICBzdGFydERhdGUsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH1cbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHN0YXRlKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBzdGFydERhdGVPcHRpb25zLFxuICAgICAgZW5kRGF0ZU9wdGlvbnMsXG4gICAgICBzdGFydERhdGUsXG4gICAgICBlbmREYXRlLFxuICAgIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgdHJhbnNsYXRpb25zIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWxhdGl2ZVJhbmdlU2VjdGlvbj5cbiAgICAgICAgPERhdGVTZWN0aW9uPlxuICAgICAgICAgIDxDb250ZW50LklucHV0Q29sdW1uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZS1zdGFydC1kYXRlXCJcbiAgICAgICAgICAgIGlkPVwicmVsYXRpdmVTdGFydERhdGVcIlxuICAgICAgICAgICAgbGFiZWw9e3RyYW5zbGF0ZSh0cmFuc2xhdGlvbnMsICdzdGFydERhdGUnKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8RmxvYXRpbmdTZWxlY3RcbiAgICAgICAgICAgICAgey4uLnRoaXMucHJvcHN9XG4gICAgICAgICAgICAgIGNsZWFyYWJsZT17ZmFsc2V9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVN0YXJ0RGF0ZUNoYW5nZX1cbiAgICAgICAgICAgICAgb3B0aW9ucz17c3RhcnREYXRlT3B0aW9uc31cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3RyYW5zbGF0aW9ucy5zdGFydERhdGVQbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgdmFsdWU9e3N0YXJ0RGF0ZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Db250ZW50LklucHV0Q29sdW1uPlxuICAgICAgICA8L0RhdGVTZWN0aW9uPlxuICAgICAgICA8SHlwaGVuIC8+XG4gICAgICAgIDxEYXRlU2VjdGlvbj5cbiAgICAgICAgICA8Q29udGVudC5JbnB1dENvbHVtblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUtZW5kLWRhdGVcIlxuICAgICAgICAgICAgaWQ9XCJyZWxhdGl2ZUVuZERhdGVcIlxuICAgICAgICAgICAgbGFiZWw9e3RyYW5zbGF0ZSh0cmFuc2xhdGlvbnMsICdlbmREYXRlJyl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEZsb2F0aW5nU2VsZWN0XG4gICAgICAgICAgICAgIHsuLi50aGlzLnByb3BzfVxuICAgICAgICAgICAgICBjbGVhcmFibGU9e2ZhbHNlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVFbmREYXRlQ2hhbmdlfVxuICAgICAgICAgICAgICBvcHRpb25zPXtlbmREYXRlT3B0aW9uc31cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3RyYW5zbGF0aW9ucy5lbmREYXRlUGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgIHZhbHVlPXtlbmREYXRlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0NvbnRlbnQuSW5wdXRDb2x1bW4+XG4gICAgICAgIDwvRGF0ZVNlY3Rpb24+XG4gICAgICA8L1JlbGF0aXZlUmFuZ2VTZWN0aW9uPlxuICAgICk7XG4gIH1cbn1cblxuUmVsYXRpdmVEYXRlUmFuZ2UucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuXG5SZWxhdGl2ZURhdGVSYW5nZS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG4iXX0=