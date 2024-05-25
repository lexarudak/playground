## Explain what is JSX.

Это синтаксическое расширение для javascript. Оно дает нам возможность писать код сразу похожим на html. это делает написание когда полее простым и понятны. по сути это синтаксический сахар для react.createElement

```js
const element = <h1>Hello, world!</h1>;

===

const element = React.createElement('h1', null, 'Hello, world!');
```

есть отличия от синтаксиса html. типа кэмелкейс для атрибутов, самозакрывающихся тегов, можно js писать прям внутри. 

## Unidirectional flow of Data?
## Class component vs functional component?
## Stateless and stateful components?
## Prop vs State.
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