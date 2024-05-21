"use strict";
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
var container = document.querySelector(".conatiner");
container === null || container === void 0 ? void 0 : container.addEventListener("BBclick", function (e) {
    console.log(e.target);
});
// buttons?.addEventListener("click", ({target}) => {
//   if (target) {
//     const eventTarget = target as HTMLButtonElement
//   }
// })
// const input = document.querySelector("#input") as HTMLInputElement
// input?.addEventListener("input", (e) => {
//    console.log(e.target.value);
//    console.log(e.target.getAttribute("value"));
// })
//# sourceMappingURL=script.js.map