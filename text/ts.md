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

any - переменная может быть чем угодно. как в js
unknown - прийти может что угодно, но дальше с этим нельзя просто взять и началть работать. надо или просвоить тип какой-то или сделать проверку
```ts
const vast: unknown = "name"
vast.length // "vast" относится к типу unknown.ts(18046)

if (typeof vast === "string") {
  console.log(vast.length); // а так норм
}
```
never - что-то чего не должно быть. например его может вернуть функция которая никогда не выполнится из-за бесконечного цикла. прикльный кейс:
```js
type AdminAction = "CREATE" | "ACTIVATE" | "BLOCK";
class ActionEngine {
    doAction(action: AdminAction) {
        switch (action) {
            case "CREATE":
                // логика здесь
                return "CREATED";
            case "ACTIVATE":
                // логика здесь
                return "ACTIVATED";
            default:
                const unknownAction: never = action; // Type '"BLOCK"' is not assignable to type 'never'.ts(2322)
                throw new Error(`Неизвестный тип действия ${unknownAction}`);
        }
    }
}
```

##	What is the Tuple? Use cases.

Это кортежи. Просто массивы с фиксированой длиной

```ts
let tuple: [string, string]

tuple = ["one", "two"] // ok

tuple = ["one", "two", "three"] // Тип "[string, string, string]" не может быть назначен для типа "[string, string]".
```

##	Functions in Typescript. What are the differences from ES6 functions

типизация аргументов и возвращаемых значений
значения по умолчанию
опциональные аргументы

```ts
type ValeraObj = {
  name: string,
  age?: number
}

const valera = (name = "valera", age?: number): ValeraObj => {
  return ({
    name,
    age
  })
}
```
можем написать интерфейс прям описывающий всю функцию:
```ts
interface ValeraMaker {
  (name: string, age?: number): ValeraObj
}

const valeraMaker: ValeraMaker = (name, age) =>  {
  return ({
    name,
    age
  })
}
```


##	Working with Enum. Numeric and String Enums.

это такой способ работать со списком констант
если написать только 1 значение от ему призвонится значение числа. а для строковых через = задются значения.
прикольно, что enum во время компиляции полностью удаляется. просто все подставляются значения. поэтому нельзя перегранть енам в массив или объект


```js
const enum Marina {
  "lena",
  "natasha"
}

console.log(Marina.lena); // 0
console.log(Marina.natasha); // 1

const enum Marina2 {
  lena = "lena",
  natasha = "natasha"
}
```


# TS OOP
##	What is an interface? How to define and extend?

Это способ определения пользовательского типа данных

```js
interface A { // так дефайн
  name: string
}

interface B extends A { // так экстенд
  age: number
}

const pers: B = {
  name: "valera",
  age: 47
}
```
причем можно раcширять типы. и имеющиеся тоже

```js
type T = {
  name: string
}

interface B extends T {
  age: number
}

const pers: B = {
  name: "valera",
  age: 47
}
```

##	What is the type alias?  Differences between Type Aliases and Interfaces.

Алиасы типов - это возможность задавать имена для своих типов
отличия:
- другой синтаксис
- тип не может быть реализован, а интерфес может (классом например)
- интерфесы расширяются а типы объединяются

```ts
interface N {
  name: string
}

interface N {
  age: number
}

let a: N

a = {
  name: "s",
  age: 3
}
```
- вот такая лабуда валидна для интерфейсов
- алиасы типов можно использовать для примитивов типа type A = string


##	Classes vs Interfaces. What are the differences between them?

это вообще разные вещи. Интерфес просто описывает объект и его свойства. класс эти методы и свойства реализует

##	What are the access modifiers? What are their differences?

 В TypeScript есть три основных модификатора доступа: public, protected и private.

 - паблик - открытые методы
 - протектед - достыпные только внутри класса и в классах наследниках
 - private - доступны только внутри класса

##	How the static class properties work.

он вызывается не в экземляре класса а в самом классе. соответсвенно не иметет доступа к зис

##	Abstract class. Use cases.

это классы, которые не могут быть иметь свои экземпляры, а могут быть только расширены. они хранят в себе только общие свойства и методы. например мы не можем создать ТРанспорт. нам надо создать класс Машина, расширяющий класс транспорт и создать его экземпляр

более того абстракные классы могут содержать обстрактные методы. это те, что имеют только имя и являются обязательными для расширения, но не имеют реализации. реализация остается на совести расширяющего класса

```js
abstract class Vehicle {
  abstract makeSound(): void;

  startEngine(): void {
    console.log('Engine started');
  }
}

class Car extends Vehicle {
  makeSound() {
    console.log('Vroom vroom!');
  }
}

const car = new Car();
car.startEngine(); // Выводит: Engine started
```

# Other
##	Template Literal Types (Nice to have)

шаблонные литералы по сути могут быть трех видов. 
- перечисление возможных вариантов (я б лучше енамы юзал)
~~~js
type Name = "Valera" | "Natasha"
~~~
- шаблонная строка без проверки типов значений
```ts
type Email = `${string}@${string}.${string}`
const email: Email = `lena@${44}.com` // хоть числа хоть что туда пихай. главное что на выходе это строка
```
- шаблонная строка но с указанием типов
```ts
type Email = `${string}@${number}.${number}`
const email: Email = `lena@${44}.com` // Тип ""lena@44.com"" не может быть назначен для типа "`${string}@${number}.${number}`".ts(2322)
```


##	Difference between the optional chaining and nullish coalescing?(Nice to have)

ну это вообще разные вещи

optional chaining - это:
```js
const a = person?.valera?.name // даже если person === undefined то он не вернет ошибку при попытке доступа к valera. просто a будет undefined
```
```js
const a = person?.valera?.name ?? "valera" // вот эти 2 вопроса это тоже самое что ||, но они пропустят "" 0 и false как валидные данные. они защитят только он undefined и null
```
##	Keyof Type Operator. Use cases.

Keyof = просто возвращает тип в которм значение может быть только ключ объекта. например

```js
const country = {
  arg: "Argentina",
  esp: "Spain"
}

type CountryCode = keyof typeof country // тут typeof нужен потому, что keyof работает с типами. т.е. typeof мы получаем тип объекта country а keyof - его ключи

const fn = (key: CountryCode) => country[key]

console.log(fn("arg")); // "Argentina"
```

##	What are decorators? What can you attach decorators to?
##	Decorator Factories (Nice to have)
##	What are Generics? Why are they used? Give example.

```js
const aaa = <T>(val: T): T => val

console.log(aaa("d"));
```
##	What Utility Types do you know? ( Record, Parsial, Readonly, Required...) Describe them. (Nice to have)
```js
const book: Record<string, string> = {
  name: "a",
  age: "33"
}

book.e = "ddd"
book.n = 33 // Тип "number" не может быть назначен для типа "string"
```
Record - задает типы для ключа и значения. наналогично `{[key: string]: string}`
Parsial - `type Man = Parsial<Valera>` сделает тип Man в котором будут все полол из типа Валера но необязательные
Readonly<Type>: Создает новый тип, который делает все свойства типа Type только для чтения, что предотвращает изменение свойств объекта.
Required<Type>: Создает новый тип, который делает все свойства типа Type 
##	What is Namespace?  The difference between namespace and ES modules?
##	Dynamic Import Expressions (Nice to have)

`const module = await import('./module');`
а в реакте это через  `React.lazy(() => import('./SomeComponent'));`

работает чтоб загрузать можули не зраю а при как-то условиях. по сути это оптимизация


