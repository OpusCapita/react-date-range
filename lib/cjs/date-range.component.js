'use strict';

exports.__esModule = true;
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

var _templateObject = _taggedTemplateLiteralLoose(['\n  .form-control[readonly] {\n    background-color: ', ';\n  }\n'], ['\n  .form-control[readonly] {\n    background-color: ', ';\n  }\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n      width: ', ';\n    '], ['\n      width: ', ';\n    ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactBootstrap = require('react-bootstrap');

var _ocCmCommonLayouts = require('@opuscapita/oc-cm-common-layouts');

var _dateRangePopover = require('./popover/date-range-popover.component');

var _dateRangePopover2 = _interopRequireDefault(_dateRangePopover);

var _propTypes3 = require('./popover/prop-types');

var _propTypes4 = _interopRequireDefault(_propTypes3);

var _defaultProps = require('./popover/default-props');

var _defaultProps2 = _interopRequireDefault(_defaultProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; } /* eslint-disable react/forbid-prop-types */


var ReadOnlyInput = _styledComponents2.default.div(_templateObject, _ocCmCommonLayouts.theme.contentBackgroundColor);

var DateRange = (_temp = _class = function (_React$PureComponent) {
  _inherits(DateRange, _React$PureComponent);

  function DateRange(props) {
    _classCallCheck(this, DateRange);

    var _this = _possibleConstructorReturn(this, _React$PureComponent.call(this, props));

    _this.mergePopoverProps = function () {
      var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return Object.assign({}, target, source, {
        absoluteRange: _extends({}, target.absoluteRange || {}, source.absoluteRange || {}),
        relativeRange: _extends({}, target.relativeRange || {}, source.relativeRange || {})
      });
    };

    _this.handleChange = function (event) {
      _this.setState({
        popoverProps: _this.mergePopoverProps(_this.state.popoverProps, event.popoverProps),
        value: event.value
      });

      var startDate = event.startDate,
          endDate = event.endDate;

      if (startDate || endDate) {
        _this.props.onChange({ startDate: startDate, endDate: endDate });
      }
    };

    _this.handleClick = function () {
      return _this.setState({ showOverlay: !_this.state.showOverlay });
    };

    _this.handleHide = function () {
      _this.setState({ showOverlay: false });
    };

    _this.state = {
      showOverlay: false,
      value: undefined,
      popoverProps: undefined
    };
    return _this;
  }

  DateRange.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        className = _props.className,
        id = _props.id,
        _inputRef = _props.inputRef,
        inputProps = _props.inputProps,
        width = _props.width;


    var DateRangeSection = _styledComponents2.default.div(_templateObject2, width);

    return _react2.default.createElement(
      DateRangeSection,
      { id: id, className: className },
      _react2.default.createElement(
        ReadOnlyInput,
        null,
        _react2.default.createElement(_reactBootstrap.FormControl, _extends({
          type: 'text',
          inputRef: function inputRef(el) {
            _this2.input = el;
            _inputRef(el);
          }
        }, inputProps, {
          readOnly: 'readonly',
          value: this.state.value,
          onClick: this.handleClick
        }))
      ),
      this.state.showOverlay && _react2.default.createElement(
        _reactBootstrap.Overlay,
        {
          show: this.state.showOverlay,
          onHide: this.handleHide,
          placement: 'bottom',
          container: this,
          rootClose: true
        },
        _react2.default.createElement(_dateRangePopover2.default, _extends({}, this.mergePopoverProps(this.props.popoverProps, this.state.popoverProps), {
          onChange: this.handleChange
        }))
      )
    );
  };

  return DateRange;
}(_react2.default.PureComponent), _class.defaultProps = {
  className: '',
  inputProps: {},
  inputRef: function inputRef() {},
  onChange: function onChange() {},
  popoverProps: _defaultProps2.default,
  width: '200px'
}, _temp);
exports.default = DateRange;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRlLXJhbmdlLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhZE9ubHlJbnB1dCIsInN0eWxlZCIsImRpdiIsInRoZW1lIiwiY29udGVudEJhY2tncm91bmRDb2xvciIsIkRhdGVSYW5nZSIsInByb3BzIiwibWVyZ2VQb3BvdmVyUHJvcHMiLCJ0YXJnZXQiLCJzb3VyY2UiLCJPYmplY3QiLCJhc3NpZ24iLCJhYnNvbHV0ZVJhbmdlIiwicmVsYXRpdmVSYW5nZSIsImhhbmRsZUNoYW5nZSIsImV2ZW50Iiwic2V0U3RhdGUiLCJwb3BvdmVyUHJvcHMiLCJzdGF0ZSIsInZhbHVlIiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsIm9uQ2hhbmdlIiwiaGFuZGxlQ2xpY2siLCJzaG93T3ZlcmxheSIsImhhbmRsZUhpZGUiLCJ1bmRlZmluZWQiLCJyZW5kZXIiLCJjbGFzc05hbWUiLCJpZCIsImlucHV0UmVmIiwiaW5wdXRQcm9wcyIsIndpZHRoIiwiRGF0ZVJhbmdlU2VjdGlvbiIsImVsIiwiaW5wdXQiLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJwb3BvdmVyRGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OzswRkFSQTs7O0FBVUEsSUFBTUEsZ0JBQWdCQywyQkFBT0MsR0FBdkIsa0JBRWtCQyx5QkFBTUMsc0JBRnhCLENBQU47O0lBTXFCQyxTOzs7QUFvQm5CLHFCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsaURBQ2pCLGdDQUFNQSxLQUFOLENBRGlCOztBQUFBLFVBU25CQyxpQkFUbUIsR0FTQztBQUFBLFVBQUNDLE1BQUQsdUVBQVUsRUFBVjtBQUFBLFVBQWNDLE1BQWQsdUVBQXVCLEVBQXZCO0FBQUEsYUFDbEJDLE9BQU9DLE1BQVAsQ0FDRSxFQURGLEVBRUVILE1B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TE07QUFNcEJQLFNBQU87QUFOYSxDO2tCQVhIM0IsUyIsImZpbGUiOiJkYXRlLXJhbmdlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2ZvcmJpZC1wcm9wLXR5cGVzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIE92ZXJsYXkgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IHsgdGhlbWUgfSBmcm9tICdAb3B1c2NhcGl0YS9vYy1jbS1jb21tb24tbGF5b3V0cyc7XG5pbXBvcnQgRGF0ZVJhbmdlUG9wb3ZlciBmcm9tICcuL3BvcG92ZXIvZGF0ZS1yYW5nZS1wb3BvdmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgcG9wb3ZlclByb3BUeXBlcyBmcm9tICcuL3BvcG92ZXIvcHJvcC10eXBlcyc7XG5pbXBvcnQgcG9wb3ZlckRlZmF1bHRQcm9wcyBmcm9tICcuL3BvcG92ZXIvZGVmYXVsdC1wcm9wcyc7XG5cbmNvbnN0IFJlYWRPbmx5SW5wdXQgPSBzdHlsZWQuZGl2YFxuICAuZm9ybS1jb250cm9sW3JlYWRvbmx5XSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5jb250ZW50QmFja2dyb3VuZENvbG9yfTtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0ZVJhbmdlIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgaW5wdXRQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBpbnB1dFJlZjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIHBvcG92ZXJQcm9wczogUHJvcFR5cGVzLnNoYXBlKHBvcG92ZXJQcm9wVHlwZXMpLFxuICAgIHdpZHRoOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY2xhc3NOYW1lOiAnJyxcbiAgICBpbnB1dFByb3BzOiB7fSxcbiAgICBpbnB1dFJlZjogKCkgPT4ge30sXG4gICAgb25DaGFuZ2U6ICgpID0+IHt9LFxuICAgIHBvcG92ZXJQcm9wczogcG9wb3ZlckRlZmF1bHRQcm9wcyxcbiAgICB3aWR0aDogJzIwMHB4JyxcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2hvd092ZXJsYXk6IGZhbHNlLFxuICAgICAgdmFsdWU6IHVuZGVmaW5lZCxcbiAgICAgIHBvcG92ZXJQcm9wczogdW5kZWZpbmVkLFxuICAgIH07XG4gIH1cblxuICBtZXJnZVBvcG92ZXJQcm9wcyA9ICh0YXJnZXQgPSB7fSwgc291cmNlID0ge30pID0+IChcbiAgICBPYmplY3QuYXNzaWduKFxuICAgICAge30sXG4gICAgICB0YXJnZXQsXG4gICAgICBzb3VyY2UsXG4gICAgICB7XG4gICAgICAgIGFic29sdXRlUmFuZ2U6IHtcbiAgICAgICAgICAuLi50YXJnZXQuYWJzb2x1dGVSYW5nZSB8fCB7fSxcbiAgICAgICAgICAuLi5zb3VyY2UuYWJzb2x1dGVSYW5nZSB8fCB7fSxcbiAgICAgICAgfSxcbiAgICAgICAgcmVsYXRpdmVSYW5nZToge1xuICAgICAgICAgIC4uLnRhcmdldC5yZWxhdGl2ZVJhbmdlIHx8IHt9LFxuICAgICAgICAgIC4uLnNvdXJjZS5yZWxhdGl2ZVJhbmdlIHx8IHt9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICApKTtcblxuICBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHBvcG92ZXJQcm9wczogdGhpcy5tZXJnZVBvcG92ZXJQcm9wcyh0aGlzLnN0YXRlLnBvcG92ZXJQcm9wcywgZXZlbnQucG9wb3ZlclByb3BzKSxcbiAgICAgIHZhbHVlOiBldmVudC52YWx1ZSxcbiAgICB9KTtcblxuICAgIGNvbnN0IHsgc3RhcnREYXRlLCBlbmREYXRlIH0gPSBldmVudDtcbiAgICBpZiAoc3RhcnREYXRlIHx8IGVuZERhdGUpIHtcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoeyBzdGFydERhdGUsIGVuZERhdGUgfSk7XG4gICAgfVxuICB9O1xuXG4gIGhhbmRsZUNsaWNrID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNob3dPdmVybGF5OiAhdGhpcy5zdGF0ZS5zaG93T3ZlcmxheSB9KTtcblxuICBoYW5kbGVIaWRlID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93T3ZlcmxheTogZmFsc2UgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2xhc3NOYW1lLFxuICAgICAgaWQsXG4gICAgICBpbnB1dFJlZixcbiAgICAgIGlucHV0UHJvcHMsXG4gICAgICB3aWR0aCxcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IERhdGVSYW5nZVNlY3Rpb24gPSBzdHlsZWQuZGl2YFxuICAgICAgd2lkdGg6ICR7d2lkdGh9O1xuICAgIGA7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPERhdGVSYW5nZVNlY3Rpb24gaWQ9e2lkfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICAgIDxSZWFkT25seUlucHV0PlxuICAgICAgICAgIDxGb3JtQ29udHJvbFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgaW5wdXRSZWY9eyhlbCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmlucHV0ID0gZWw7XG4gICAgICAgICAgICAgIGlucHV0UmVmKGVsKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICB7Li4uaW5wdXRQcm9wc31cbiAgICAgICAgICAgIHJlYWRPbmx5PVwicmVhZG9ubHlcIlxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvUmVhZE9ubHlJbnB1dD5cbiAgICAgICAge3RoaXMuc3RhdGUuc2hvd092ZXJsYXkgJiZcbiAgICAgICAgPE92ZXJsYXlcbiAgICAgICAgICBzaG93PXt0aGlzLnN0YXRlLnNob3dPdmVybGF5fVxuICAgICAgICAgIG9uSGlkZT17dGhpcy5oYW5kbGVIaWRlfVxuICAgICAgICAgIHBsYWNlbWVudD1cImJvdHRvbVwiXG4gICAgICAgICAgY29udGFpbmVyPXt0aGlzfVxuICAgICAgICAgIHJvb3RDbG9zZVxuICAgICAgICA+XG4gICAgICAgICAgPERhdGVSYW5nZVBvcG92ZXJcbiAgICAgICAgICAgIHsuLi50aGlzLm1lcmdlUG9wb3ZlclByb3BzKHRoaXMucHJvcHMucG9wb3ZlclByb3BzLCB0aGlzLnN0YXRlLnBvcG92ZXJQcm9wcyl9XG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9PdmVybGF5Pn1cbiAgICAgIDwvRGF0ZVJhbmdlU2VjdGlvbj5cbiAgICApO1xuICB9XG59XG4iXX0=