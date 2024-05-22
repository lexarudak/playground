

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



const domNavigator = (element: Element | null | undefined) => {
  if (!element) {
    console.log("END");
    return
  }

  console.log(element);
  const children = element.children
  if (children.length) {
    domNavigator(children[0])
  }
  if (element.nextElementSibling) {
    domNavigator(element.nextElementSibling)
  }
  const parent = element.parentElement


  console.log("DDD", parent?);
  domNavigator(parent?.nextElementSibling)

}

const display = document.querySelector('.display')
domNavigator(display)