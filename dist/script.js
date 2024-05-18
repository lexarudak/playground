"use strict";
var blackButtonClick = new CustomEvent("BBclick", {
    bubbles: true,
    detail: {
        message: "HOBA"
    }
});
var buttons = document.querySelectorAll(".button");
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