"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var react_1 = require('react');
var MainPage = (function (_super) {
    __extends(MainPage, _super);
    function MainPage() {
        _super.apply(this, arguments);
    }
    MainPage.prototype.render = function () {
        var _this = this;
        return (<div>
                <h1> Home Page!11 </h1>
                <button onClick={function () { return _this.buttonClicked(); }}> Screen 1 </button>
                <button onClick={function () { return _this.buttonClicked(); }}> Screen 2 </button>
            </div>);
    };
    MainPage.prototype.buttonClicked = function () {
        console.log("CLICKED");
    };
    return MainPage;
}(react_1.Component));
exports.MainPage = MainPage;
//# sourceMappingURL=main-page.js.map