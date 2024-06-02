"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var pers = {
    name: "valera",
    age: 47
};
var a;
a = {
    name: "s",
    age: 3
};
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.makeSound = function () {
        console.log('Woof woof!');
    };
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.makeSound = function () {
        console.log('Meow!');
    };
    return Cat;
}(Animal));
var dog = new Dog();
dog.makeSound(); // Выводит: Woof woof!
var cat = new Cat();
cat.makeSound(); // Выводит: Meow!
var country = {
    arg: "Argentina",
    esp: "Spain"
};
var fn = function (key) { return country[key]; };
console.log(fn("arg")); // "Argentina"
var aaa = function (val) { return val; };
console.log(aaa("d"));
var book = {
    name: "a",
    age: "33"
};
book.e = "ddd";
//# sourceMappingURL=script.js.map