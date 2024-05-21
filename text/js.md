# JavaScript Related Questions

## Hosting, be able to create an example of it in code
- всплывает вар, всплывают function declaration
```javaScript
console.log(myFn(1, 2)) // 3

function myFn (a, b) {
	return a + b
}

console.log(myVar) // undefined

var myVar = 1
console.log(myVar) // 1
```
- не всплывают function expression, let, const
ошибку выдаст

## Closures, be able to create an example of it in code

- каждая функция

```js

const counter = (add: number) => {
  let count = 0

  return () => {
    count = count + add
    console.log(count); 
  }
}

const add1 = counter(1)
const add2 = counter(2)

const buttons = document.querySelectorAll(".button")
buttons[0].addEventListener("click", add1)
buttons[1].addEventListener("click", add2)
```

## Have solid understand why we use closures, how it is connected with encapsulation and IIFE

- IIFE больше не используется. потому что сейчас используют модули. каждый модуль имеет свою область видимости
- let и const имеют блочную область видимости что тоже упрощает работу с ними

поскольку var имеет функциональную область видимости, то использовали IIFE (Immediately Invoked Function Expressions) чтоб ограничит область видимости

мы можем использовать замыкания для инкапсуляции. например так доступ у значение переменной идет только через методы

```js
const fun = () => {
  let value = 0;

  return {
    setValue: (newVal: number) => value = newVal,
    getValue: () => value 
  }
}


const {getValue, setValue} = fun()
console.log(getValue()); // 0
setValue(setValue(4))
console.log(getValue()); // 4
```

## This keyword – basic idea, and its use in common and arrow function with examples

```js
const valera = {
  name: "valera"
}

const sasha = {
  name: "sasha"
}

function getName () {
  console.log(this.name);
}

valera.get = getName;
sasha.get = getName;

valera.get();  // выведет "valera"
sasha.get();   // выведет "sasha"
```

- function declaration имеют контекст объекта, в котором они вызываются. 
 - У стрелочной функции нет this. При получении значения this – оно, как обычная переменная, берётся из внешнего лексического окружения.

```js
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
buttons[0].addEventListener("click", nestedArrow) // {name: 'DDD', BigFn: ƒ}
buttons[1].addEventListener("click", fn) // <button class="button not-white">Add 2</button>
```

## New keyword. How it works

## == comparison algorithm

## Priority of operations with example

## Have solid understanding of types auto conversion, what is unary, binary, ternary operations.

## Type of vs instance of show difference in examples.

## Prototype inheritance, props and cons, be able to realize

## Primitive vs reference types with example. Pass by value vs pass by reference

## What is Promise, why should we use it. Promise vs async await, show similarity in examples

## Fetch api

## Basic DOM api: update, create, remove classes, attributes. Navigate through DOM tree. Be able to write recursive function to go throught DOM tree.

## How to add events. Capturing / Bubbling. Event delegation pattern. PreventDefault. Stop propagation. Stop propagation immediate.

## Differences between click, mousedown, mouseup, mouseover / mouseenter.

## BOM – navigation , history, location, LocalStorage, SessionStorage

## Even Loop with examples

## For In vs For Of. What Is Symbol.Iterator. Create custom interator

## Interators vs Generators – at least basic knowledge

## Object descriptors. How for in loop works

## Rest operator (…) destruturing object properties

## Js Errors. Throw, catch, create custom errors.





# Optional:

## Immutable types, what it is and how it works under the hood.

## Critical rendering path

## RAF

## Function patterns: callback, memo, currying, chaining, IIFE, pipe

## How to create private property in js class

## Private property using WeakMap pattern

## Basics about drag/drop api