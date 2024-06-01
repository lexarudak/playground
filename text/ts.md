# Testing

# Basic
##	What is TypeScript? What are the advantages of use?

Это строго строго типизированная раширенная версия JS. он компилируется в обычный компилятор
плюсы:
- обнаружение ошибок еще до запуска кода
- ускорение разработки благодаря автокомлиту
- по сути встроенная документация. тебе проще понять что функция принимает и возвращает например

##	Using tsconfig.

ну это объект для настройки компилятора по сути
```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "strict": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```
##	Primitives and built-in types.
string
number
null
undefined
boolean
symbol

встроенные типы
object
Array
Map
Set
Function
Date

##	Type assertions. Type Inference.

Type assertions - это сполсоб явно задать тип. модно через as а можно через присвоение

`const a: number = map.length`

Type Inference - это свойство тайпскрипта автоматом опрелять тип  переменной при присвоении значения. апример

```js
let a = 1 // number
a = "sss" // выдаст ошибку потому что а это number должен быть

let a: number | string = 1
a = "sss" // вот так ок
```


##	Type unions. | and &

| -  это пу сути или.
```ts
let a: number | string = 1
a = "sss" // вот так ок
```

& - это так создается тип реализующий сразу несколько интерфейсов. например
```js
interface Valera {
  name: string
}

interface Man {
  drink: boolean
}
type Me = Valera & Man

const me: Me = {
  name: "Sam",
  drink: false
}
```


##	Special Types: Using any and unknown types. Type never. Give example.
##	What is the Tuple? Use cases.
##	Functions in Typescript. What are the differences from ES6 functions
##	Working with Enum. Numeric and String Enums.
# TS OOP
##	What is an interface? How to define and extend?
##	What is the type alias?  Differences between Type Aliases and Interfaces.
##	Classes vs Interfaces. What are the differences between them?
##	What are the access modifiers? What are their differences?
##	How the static class properties work.
##	Abstract class. Use cases.
# Other
##	Template Literal Types (Nice to have)
##	Difference between the optional chaining and nullish coalescing?(Nice to have)
##	Keyof Type Operator. Use cases.
##	What are decorators? What can you attach decorators to?
##	Decorator Factories (Nice to have)
##	What are Generics? Why are they used? Give example.
##	What Utility Types do you know? ( Record, Parsial, Readonly, Required...) Describe them. (Nice to have) 
##	What is Namespace?  The difference between namespace and ES modules?
##	Dynamic Import Expressions (Nice to have)

