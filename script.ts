

const blackButtonClick = new CustomEvent("BBclick", {
  bubbles: true,
  detail: {
    message: "HOBA"
  }
})

const buttons = document.querySelectorAll(".button")

buttons.forEach((btn) => {
  if (btn instanceof HTMLButtonElement)


  if (btn.dataset.color === "black") {
    btn.classList.add("black")
    btn.dataset.userName = "VASYA"
    btn.addEventListener("click", () => {
      console.log("s");
      btn.dispatchEvent(blackButtonClick)
    })
  }
})


const container = document.querySelector(".conatiner")
container?.addEventListener("BBclick", (e) => {
  console.log(e.target);
})
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



