"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var counter = function (add) {
    var count = 0;
    return function () {
        count = count + add;
        console.log(count);
    };
};
var add1 = counter(1);
var add2 = counter(2);
var firstObj = {
    name: "DDD",
    BigFn: function () {
        var _this = this;
        return {
            arrow: function () {
                return {
                    nestedArrow: function () { console.log(_this); }
                };
            },
            fn: function () {
                console.log(this);
            }
        };
    }
};
var _a = firstObj.BigFn(), arrow = _a.arrow, fn = _a.fn;
var nestedArrow = arrow().nestedArrow;
var buttons = document.querySelectorAll(".button");
buttons[0].addEventListener("click", nestedArrow);
buttons[0].addEventListener("ce", function (e) {
    console.log(e);
});
buttons[1].addEventListener("click", fn);
var blackButtonClick = new CustomEvent("BBclick", {
    bubbles: true,
    detail: {
        message: "HOBA"
    }
});
buttons.forEach(function (btn) {
    if (btn instanceof HTMLButtonElement)
        if (btn.dataset.color === "black") {
            btn.classList.add("black");
            btn.dataset.userName = "VASYA";
            btn.addEventListener("click", function () {
                console.log("s");
                btn.dispatchEvent(blackButtonClick);
            });
        }
});
var customEvent = new CustomEvent("ce", {
    detail: {
        name: "Marina"
    },
    bubbles: true
});
buttons[0].dispatchEvent(customEvent);
var myError = /** @class */ (function (_super) {
    __extends(myError, _super);
    function myError(message) {
        var _this = _super.call(this, message) || this;
        _this.name = "WOW!";
        return _this;
    }
    return myError;
}(Error));
try {
    throw new myError("AAAAAAAA!");
}
catch (e) {
    console.log(e.message, e.name);
}
//# sourceMappingURL=script.js.map