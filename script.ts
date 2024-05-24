

const counter = (add: number) => {
  let count = 0

  return () => {
    count = count + add
    console.log(count); 
  }
}

const add1 = counter(1)
const add2 = counter(2)

const firstObj = {
  name: "DDD",
  BigFn: function () {
    return {
      arrow: () => {
        return {
          nestedArrow: () => {console.log(this)}
        }
        },
      fn: function () {
        console.log(this);
      }
    }
  }
}


const {arrow, fn} = firstObj.BigFn()
const {nestedArrow} = arrow()


const buttons = document.querySelectorAll(".button")
buttons[0].addEventListener("click", nestedArrow)
buttons[0].addEventListener("ce", (e) => {
  console.log(e);
})
buttons[1].addEventListener("click", fn)


const blackButtonClick = new CustomEvent("BBclick", {
  bubbles: true,
  detail: {
    message: "HOBA"
  }
})

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



const customEvent = new CustomEvent("ce", {
  detail: {
    name: "Marina"
  },
  bubbles: true
})

buttons[0].dispatchEvent(customEvent)