



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

interface N {
  name: string
}

interface N {
  age: number
}

type A = string

let a: N

a = {
  name: "s",
  age: 3
}

abstract class Animal {
  abstract makeSound(): void;
}

class Dog extends Animal {
  makeSound() {
    console.log('Woof woof!');
  }
}

class Cat extends Animal {
  makeSound() {
    console.log('Meow!');
  }
}

const dog = new Dog();
dog.makeSound(); // Выводит: Woof woof!

const cat = new Cat();
cat.makeSound(); // Выводит: Meow!

type Name = "Valera" | "Natasha"

type Email = `${string}@${number}.${number}`



const country = {
  arg: "Argentina",
  esp: "Spain"
}

type CountryCode = keyof typeof country // тут typeof нужен потому, что keyof работает с типами. т.е. typeof мы получаем тип объекта country а keyof - его ключи

const fn = (key: CountryCode) => country[key]

console.log(fn("arg")); // "Argentina"

const aaa = <T>(val: T): T => val

console.log(aaa("d"));

const book: Record<string, string> = {
  name: "a",
  age: "33"
}

book.e = "ddd"


type Valera = {
  
}