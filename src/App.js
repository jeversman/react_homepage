"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var react_router_1 = require('react-router');
var main_page_1 = require('./components/main-page');
var FirstScreen_1 = require("./components/FirstScreen");
var SecondScreen_1 = require("./components/SecondScreen");
var Links = function () {
    return <nav>
        <react_router_1.Link to="/FirstScreen"> First </react_router_1.Link>
        <react_router_1.Link to="/SecondScreen"> Second </react_router_1.Link>
    </nav>;
};
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        _super.apply(this, arguments);
    }
    App.prototype.render = function () {
        return (<div>
                <Links />
                <react_router_1.Router history={react_router_1.hashHistory}>
                    <react_router_1.Route path="/" component={main_page_1.MainPage}></react_router_1.Route>
                    <react_router_1.Route path="/FirstScreen" component={FirstScreen_1.FirstScreen}></react_router_1.Route>
                    <react_router_1.Route path="/SecondScreen" component={SecondScreen_1.SecondScreen}></react_router_1.Route>
                </react_router_1.Router>
            </div>);
    };
    return App;
}(React.Component));
exports.App = App;
//# sourceMappingURL=App.js.map