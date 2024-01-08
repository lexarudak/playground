interface OldInterface {
    getStringValue(anyText: string): string;
}

class OldClass implements OldInterface {
    public getStringValue(anyText: string) {
        return anyText.toUpperCase();
    }
}
///////////////////////////////////////////////////////////////////

interface NewInterface {
    getStringLength(anyText: string): number;
}

class OldClassToNewInterfaceAdapter implements NewInterface {
    private class: OldClass;

    constructor(classToAdapt: OldClass) {
        this.class = classToAdapt;
    }

    public getStringLength(anyText: string) {
      // преобразуем старый метод в новый. точнее 
        return this.class.getStringValue(anyText).length;
    }
}

function clientCode(service: NewInterface) {
    console.log(service.getStringLength('Test'));
}

// теперь мы можем юзать старый класс, там, где ожидается новыйы интерфейс. Через этот адаптер
const oldClass = new OldClass();
const oldClassToNewAdapter = new OldClassToNewInterfaceAdapter(oldClass)
clientCode(oldClassToNewAdapter);  //  4

// test AA

// TEST - 1

<<<<<<< HEAD

// wrong info form BR-2
=======
// test - 2

//Correct data from test-br
>>>>>>> 8819b65 (correct data)
