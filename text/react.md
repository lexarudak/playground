## Explain what is JSX.

Это синтаксическое расширение для javascript. Оно дает нам возможность писать код сразу похожим на html. это делает написание когда полее простым и понятны. по сути это синтаксический сахар для react.createElement

```js
const element = <h1>Hello, world!</h1>;

===

const element = React.createElement('h1', null, 'Hello, world!');
```

есть отличия от синтаксиса html. типа кэмелкейс для атрибутов, самозакрывающихся тегов, можно js писать прям внутри. 

## Unidirectional flow of Data?

данные в реакт передаются по однанаправленному потоку данных, от родителей к чайлду, через пропсы
- пропсы неизменные. их нельзя менять
- если нужно иметь общий стейт с сиблингами, то он рамещается в родителе

Преимущества однонаправленного потока данных:
Простота отслеживания данных:
Легче понять, откуда данные приходят и куда идут, поскольку они текут в одном направлении.

Упрощенная отладка:
Проще отлаживать компоненты, поскольку каждый компонент четко знает, откуда он получает свои данные и кто отвечает за их изменение.

Предсказуемость:
Так как данные передаются только сверху вниз, поведение приложения становится более предсказуемым.

Лучше масштабируемость:
Однонаправленный поток данных хорошо работает с большими и сложными приложениями, облегчая управление состоянием и данными.

## Class component vs functional component?

- это два подхода в написании компонентов
- сейчас более распространены функциональные. функциональные считаются более простыми

из различий кроме самого синтаксиса, у классовых стейт объявляется в конструкторе и находится в this.state. у функционального в хуке useState
плюс у классовых есть явные методы жизенного цикла, типа
componentDidMount - Вызывается сразу после монтирования компонента
componentShouldUpdate - Вызывается перед обновлением
componentDidUpdate - Вызывается сразу после обновления
componentWillUnmount - Вызывается перед размонтированием компонента

## Stateless and stateful components?

это просто компоненты с состоянием и без. если компонент получает что-то пропсами, как-то модифицирует и рендорит - это стейтлесс компонент

если внутри компонента вызван useState - и компонент редорит что-то в зависимости от него - стэйтфул компонент

## Prop vs State.

пропсы это параметры принятые в компонент от родителя. из нельзя менять
стэйт - это переменные хранящиеся внутри компонента. они хранятся сквозь рендеры. и их изменение вызывает ререндер компонента

## How setState method works?



## List and explain Lifecycle methods in React? Reflection in hooks. 
## Why we need getDerivedStateFromProps and why this method is static? 
## Which lifecycle methods we don’t have in hooks approach?
## Why will methods (except componentWillUnmount) become deprecated?
## Explain concept of Virtual DOM? Pros and cons of this approach?
## Re-render mechanism, DOM comparison and diff algorithm.
## How to handle events in React?
## List and Keys? What will happen if we mark a couple of div’s with identical key property?
## Presentational vs Container components?
## What is Context in React?
## What are Refs? Explain how they work?
## Describe error boundaries?
## Explain what HOC is.
## What is React hooks?
## How to optimize performance of React Application?

Optional:
## How Portals work in React? (optional)
## State management (Redux, Mobx) (at least one, optional)
## Unit testing in React, shallow render (maybe optional)