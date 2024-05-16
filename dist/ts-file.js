"use strict";
var OldClass = /** @class */ (function () {
    function OldClass() {
    }
    OldClass.prototype.getStringValue = function (anyText) {
        return anyText.toUpperCase();
    };
    return OldClass;
}());
var OldClassToNewInterfaceAdapter = /** @class */ (function () {
    function OldClassToNewInterfaceAdapter(classToAdapt) {
        this.class = classToAdapt;
    }
    OldClassToNewInterfaceAdapter.prototype.getStringLength = function (anyText) {
        // преобразуем старый метод в новый. точнее 
        return this.class.getStringValue(anyText).length;
    };
    return OldClassToNewInterfaceAdapter;
}());
function clientCode(service) {
    console.log(service.getStringLength('Test'));
}
// теперь мы можем юзать старый класс, там, где ожидается новыйы интерфейс. Через этот адаптер
var oldClass = new OldClass();
var oldClassToNewAdapter = new OldClassToNewInterfaceAdapter(oldClass);
clientCode(oldClassToNewAdapter); //  4
// test AA
// TEST - 1
// test - 2
//Correct data from test-br
//# sourceMappingURL=ts-file.js.map