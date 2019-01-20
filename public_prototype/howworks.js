var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var _ReactMotion =




ReactMotion,StaggeredMotion = _ReactMotion.StaggeredMotion,Helpers = _ReactMotion.Helpers,spring = _ReactMotion.spring,presets = _ReactMotion.presets;var

Card = function (_React$Component) {_inherits(Card, _React$Component);function Card() {_classCallCheck(this, Card);return _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).apply(this, arguments));}_createClass(Card, [{ key: "render", value: function render()
    {
      return (
        React.createElement("div", { className: "card" },
          React.createElement("img", { src: "{this.props.image}" }),
          React.createElement("h2", { className: "card__title" }, this.props.title),
          React.createElement("p", null, this.props.text)));


    } }]);return Card;}(React.Component);var


Demo = function (_React$Component2) {_inherits(Demo, _React$Component2);function Demo() {_classCallCheck(this, Demo);return _possibleConstructorReturn(this, (Demo.__proto__ || Object.getPrototypeOf(Demo)).apply(this, arguments));}_createClass(Demo, [{ key: "render", value: function render()

    {var _this3 = this;

      return (

        React.createElement(StaggeredMotion, {
            defaultStyles: [{ h: 100, opacity: 0 }, { h: 100, opacity: 0 }, { h: 100, opacity: 0 }],
            styles: function styles(prevInterpolatedStyles) {return prevInterpolatedStyles.map(function (_, i) {
                return i === 0 ?
                { h: spring(0, [170, 1]), opacity: spring(1) } :
                { h: spring(prevInterpolatedStyles[i - 1].h, [170, 12]), opacity: spring(prevInterpolatedStyles[i - 1].opacity) };
              });} },
          function (interpolatingStyles) {return (
              React.createElement("div", { className: "card-row" },
                interpolatingStyles.map(function (style, i) {return (
                    React.createElement("div", { className: "card", key: i,
                        style: {
                          WebkitTransform: "translate3d(0, " + style.h + "px, 0)",
                          transform: "translate3d(0, " + style.h + "px, 0)",
                          opacity: style.opacity } },

                      React.createElement("img", { src: _this3.props.cards[i].image }),
                      React.createElement("div", { className: "card__body" },
                        React.createElement("h2", { className: "card__title" }, _this3.props.cards[i].text))));})));}));








    } }]);return Demo;}(React.Component);

var cards = [
{
  image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/159921/photo-1420708392410-3c593b80d416.jpg',
  text: 'Card 1' },

{
  image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/159921/photo-1421977870504-378093748ae6.jpg',
  text: 'Card 2' },

{
  image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/159921/photo-1422513391413-ddd4f2ce3340.jpg',
  text: 'Card 3' }];



ReactDOM.render(React.createElement(Demo, { cards: cards }), document.getElementById('appabout'));