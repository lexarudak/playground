"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OldClass {
    getStringValue(anyText) {
        return anyText.toUpperCase();
    }
}
class OldClassToNewInterfaceAdapter {
    class;
    constructor(classToAdapt) {
        this.class = classToAdapt;
    }
    getStringLength(anyText) {
        // преобразуем старый метод в новый. точнее 
        return this.class.getStringValue(anyText).length;
    }
}
function clientCode(service) {
    console.log(service.getStringLength('Test'));
}
// теперь мы можем юзать старый класс, там, где ожидается новыйы интерфейс. Через этот адаптер
const oldClass = new OldClass();
const oldClassToNewAdapter = new OldClassToNewInterfaceAdapter(oldClass);
clientCode(oldClassToNewAdapter); //  4
// test AA
// TEST - 1
// test - 2
//Correct data from test-br
