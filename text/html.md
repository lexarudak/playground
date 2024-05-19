# HTML Related Questions

## I am aware of HTML5 semantic elements and can name them.

Семантические элементы HTML5 - это элементы, которые явно указывают на свое содержимое. Вот некоторые из них: Header, footer, main, section, aside, nav, article.

## Explain how to check HTML markup validity.

Проверка валидности разметки HTML - это проверка синтаксиса на соответствие стандартам. Это помогает улучшить доступность и производительность. Можно использовать сайты типа W3C Markup Validation Service. Также можно проверять валидность разметки через IDE.

## Where EventTarget, Node, Element, HTMLElement, HTMLInputElement classes can be used.

EventTarget, Node, Element, HTMLElement, HTMLInputElement - это классы, от которых наследуются другие классы DOM-узлов, либо создаются инстансы этих классов. Они предоставляют методы для работы с DOM. Например:

- EventTarget - корневой класс. Он абстрактный и не имеет инстансов. Все, что от него наследуется, получает методы работы с событиями.
- Node – тоже абстрактный класс. Все, что от него наследуется, имеет методы работы с узлами. Например, nextSibling, ChildNodes и т.д. От Node наследуются Element, Document и CharacterData.
- HTMLElement – наследуется от Element. От него уже могут создаваться инстансы без специфических методов. Например, section или span.
- HTMLInputElement наследуется от HTMLElement и имеет методы для работы с инпутами. Например, .value.

## Explain how methods matches and closest work.

Метод `matches` проверяет, соответствует ли элемент указанному селектору. Например, `item.matches("#test")` вернет `true`, если у элемента есть id "test". 

Метод `closest` возвращает ближайшего предка, который соответствует указанному селектору. Например, `eventTarget.closest(".block")` вернет ближайшего родителя с классом "block".

## Explain how to get, set, remove an attribute in the element, how to check whether an attribute exists in the element.

Для работы с атрибутами элемента используются методы `getAttribute`, `setAttribute`, `removeAttribute`. 

- `getAttribute` возвращает значение указанного атрибута. Например, `eventTarget.getAttribute("disabled")`.
- `setAttribute` устанавливает значение указанного атрибута. Например, `eventTarget.setAttribute("disabled", "disabled")`.
- `removeAttribute` удаляет указанный атрибут. Например, `eventTarget.removeAttribute("disabled")`.

Чтобы проверить, существует ли атрибут, используется метод `hasAttribute`. Например, `console.log(eventTarget.hasAttribute("disabled"))`.

## Explain the difference between element attributes and DOM properties.

Атрибуты – это статические значения, которые прописываются в html и остаются неизменными. DOM свойства – это те же самые значения атрибутов, но живые. При создании объектов DOM им присваиваются значения атрибутов (т.е. изначально они не отличаются), но потом мы можем их менять.

## I am aware of dataset element attribute.

Атрибут `dataset` используется для работы с пользовательскими атрибутами `data-*`. Важно отметить, что обращение к этому атрибуту происходит через точку, а не через метод `getAttribute`. Значениями `dataset` являются строки. Например:

```javascript
if (btn.dataset.color === "black") {
  btn.classList.add("black")
  btn.dataset.userName = "VASYA"
  console.log(btn);
}
```

## Explain three ways to add handler to DOM event.

Есть три основных способа добавить обработчик событий в DOM:

1. Непосредственно через атрибут элемента в HTML. Например, `<button onclick="myFunction()">Click me</button>`.
2. Через свойство элемента в JavaScript. Например, `button.onclick = myFunction;`.
3. Через метод `addEventListener`. Этот метод позволяет добавить несколько обработчиков на одно событие. Например, `button.addEventListener('click', myFunction);`.

## Describe three phases of DOM event propagation.

События в DOM проходят три фазы:

1. Фаза погружения/захвата (capturing phase): Событие спускается от корневого элемента (window или document) к элементу-цели.
2. Фаза цели (target phase): Событие достигло элемента-цели и если есть обработчики, назначенные на этом элементе, они запускаются.
3. Фаза всплытия (bubbling phase): Событие возвращается от элемента-цели к корневому элементу, вызывая обработчики, назначенные на пройденных элементах.

## How to add event handler to the capturing phase?

Чтобы добавить обработчик событий на фазу погружения, нужно передать в метод `addEventListener` третий параметр `true`. Например, `element.addEventListener('click', myFunction, true);`.

## Explain the difference between stopPropagation and stopImmediatePropagation event methods.

Методы `stopPropagation` и `stopImmediatePropagation` используются для остановки распространения события.

- `stopPropagation` останавливает всплытие события. Если у вас есть кнопка внутри div, и на обоих элементах есть обработчики события 'click', то вызов `stopPropagation` в обработчике кнопки предотвратит вызов обработчика события 'click' на div.
- `stopImmediatePropagation` блокирует вызов остальных обработчиков на этом же элементе. Если на элементе висят несколько обработчиков одного события, то вызов `stopImmediatePropagation` в одном из них предотвратит выполнение остальных обработчиков этого события.

## Explain two ways to prevent browser action on event.

Для предотвращения стандартного действия браузера на событие используется метод `preventDefault`. Например, можно предотвратить перезагрузку страницы при нажатии на кнопку с типом 'submit': 

```javascript
button.addEventListener('click', function(event) {
  event.preventDefault();
});
```

Также можно использовать `return false` в обработчике события, но это сработает только если обработчик был добавлен через свойство элемента, а не через `addEventListener`.

## Explain what event delegation is.

Делегирование событий - это подход, при котором вместо того, чтобы назначать обработчик каждому элементу, обработчик назначается их общему родителю. Затем с помощью методов `target` и `currentTarget` события можно определить, на каком элементе произошло событие и соответствующим образом реагировать на него. Это особенно полезно при работе с большим количеством однотипных элементов, например, пунктами меню.

## Explain how to dispatch custom event.

Для создания и отправки пользовательского события используется конструктор `CustomEvent` и метод `dispatchEvent`. Вот пример:

```javascript
const customEvent = new CustomEvent('myEvent', {
  detail: { message: 'This is my custom event' }
});

element.dispatchEvent(customEvent);
```

Затем можно слушать это событие так же, как и любое другое:

```javascript
element.addEventListener('myEvent', function(event) {
  console.log(event.detail.message);
});
```

## Explain the difference between DOMContentLoaded event and window load event.

Событие `DOMContentLoaded` срабатывает, когда весь HTML был полностью загружен и проанализирован, без ожидания завершения загрузки стилей и изображений. 

Событие `load` на объекте `window` срабатывает, когда весь HTML загружен и проанализирован, а также загружены все стили, изображения и другие ресурсы.

## Describe how async/defer attributes works at the <script> tag.

Атрибуты `async` и `defer` используются для изменения поведения загрузки и выполнения скриптов.

- `async` делает так, что скрипт начинает загружаться параллельно с анализом HTML, и как только скрипт загрузится, он выполняется. Это приводит к тому, что анализ HTML приостанавливается на время выполнения скрипта.
- `defer` также начинает загрузку скрипта параллельно с анализом HTML, но откладывает выполнение скрипта до тех пор, пока весь HTML не будет проанализирован. Скрипты с `defer` выполняются в том порядке, в котором они появляются в документе.

Оба этих атрибута работают только с внешними скриптами, которые подключаются через атрибут `src`.

## Describe XMLHttpRequest object. 

`XMLHttpRequest` - это встроенный в браузер объект, который используется для выполнения асинхронных запросов к серверу. Он предоставляет методы для отправки HTTP или HTTPS запросов и обработки ответов. Вот пример использования:

```javascript
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.example.com/data', true);
xhr.onload = function() {
  if (xhr.status === 200) {
    console.log(xhr.responseText);
  }
};
xhr.send();
```

## Explain what cookie, localStorage, sessionStorage are.

Cookie, localStorage и sessionStorage - это технологии, которые позволяют веб-сайтам хранить данные прямо в браузере пользователя.

- Cookie - это небольшие фрагменты данных, которые браузер хранит на компьютере пользователя. Они обычно используются для сохранения информации о пользователе и его предпочтениях. Cookie имеют ограниченный срок жизни и могут быть доступны только на определенном домене.
- localStorage - это объект, который позволяет хранить данные без срока действия. Это значит, что данные, сохраненные в localStorage, не исчезнут после закрытия браузера или компьютера. Они остаются доступны до тех пор, пока их явно не удалить.
- sessionStorage похож на localStorage, но имеет ограниченный срок жизни. Данные, сохраненные в sessionStorage, исчезнут после закрытия вкладки или окна браузера, в котором они были созданы.

## Draw simple image by using <svg> element.

SVG (Scalable Vector Graphics) - это язык разметки для описания двухмерной векторной графики. Вот пример простого изображения, созданного с помощью SVG:

```html
<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" stroke="blue" stroke-width="2" fill="white"></circle>
</svg>
```

Здесь создается круг с центром в точке (50, 50), радиусом 40, синим контуром толщиной 2 и белым цветом заливки.

## Difference between canvas and svg, where we can use them?

Canvas и SVG - это два мощных инструмента для работы с графикой в браузере, но они имеют значительные различия и подходят для разных задач.

- SVG (Scalable Vector Graphics) - это векторная графика, изображения масштабируются без потери качества. Элементы SVG становятся частью DOM и могут быть стилизованы с помощью CSS и манипулированы с помощью JavaScript так же, как и обычные HTML-элементы. SVG поддерживает сложные формы, включая вложенные и обрезанные формы. Идеально подходит для создания сложных интерактивных графиков, логотипов, иконок с анимацией и других сценариев, где важна детализация.
- Canvas - это растровая графика, изображения состоят из пикселей, и при масштабировании они могут стать пикселизованными. Canvas использует процедурный API для рисования, и элементы, нарисованные на холсте, не становятся частью DOM и не могут быть манипулированы потом. Canvas поддерживает только прямоугольные области клипа. Идеально подходит для создания графики в реальном времени, такой как игры, или для манипуляции изображениями на пиксельном уровне, за счет высокой эффективности и возможности прямого управления пикселями.

Использование SVG или Canvas будет зависеть от конкретной задачи. Если вам нужна детализированная векторная графика, которую можно масштабировать и стилизовать, SVG может быть лучшим выбором. Если вам нужно создать сложную графику в реальном времени, Canvas может быть более эффективным выбором.

## Optional:

## Explain what DOM and CSSOM are.

DOM (Document Object Model) - это программный интерфейс для HTML и XML документов. Он представляет структуру документа в виде дерева, где каждый узел представляет часть документа (например, элемент, атрибут, текст и т.д.). DOM позволяет программам и скриптам динамически манипулировать содержимым и структурой документа.

CSSOM (CSS Object Model) - это аналогичный DOM интерфейс, но для CSS. Он позволяет программам и скриптам манипулировать стилями страницы.

## What is <doctype>?

`<!DOCTYPE>` - это объявление, которое должно быть первой строкой в HTML документе перед тегом `<html>`. Оно сообщает браузеру, какую версию HTML или XHTML следует использовать при обработке документа. Например, `<!DOCTYPE html>` указывает на использование HTML5.

## What is BOM. List global JS objects.

BOM (Browser Object Model) - это интерфейс для работы с браузером. Он предоставляет объекты для работы с окнами браузера, модальными окнами, историей браузера, местоположением и другими вещами, которые не связаны непосредственно с документом.

Некоторые глобальные JS объекты, предоставляемые BOM: Window, Screen, Location, History, Navigator, XMLHttpRequest.

## Explain the difference between innerHTML and outerHTML element properties.

`innerHTML` и `outerHTML` - это свойства элемента, которые позволяют получить или установить HTML-код элемента.

- `innerHTML` возвращает или устанавливает HTML-код внутри элемента. Например, если у нас есть `<div><p>Hello</p></div>`, то `div.innerHTML` вернет `<p>Hello</p>`.
- `outerHTML` возвращает или устанавливает HTML-код элемента вместе с самим элементом. В приведенном выше примере `div.outerHTML` вернет `<div><p>Hello</p></div>`.

## I am aware of the <head> tag and know which tags it can contain.

Тег `<head>` используется для хранения метаданных документа, которые не отображаются на веб-странице. Он может содержать следующие теги:

- `<title>`: Заголовок документа, который отображается на вкладке браузера.
- `<meta>`: Метаданные, такие как кодировка символов, описание страницы, ключевые слова и т.д.
- `<link>`: Ссылки на внешние ресурсы, такие как CSS-файлы.
- `<style>`: Внутренние CSS-стили.
- `<script>`: Внутренние JavaScript-скрипты.
- `<base>`: Базовый URL для относительных URL в документе.

## Explain the difference between childNodes and children collections, parentNode and parentElement, firstChild and firstElementChild, nextSibling and nextElementSibling.

- `childNodes` возвращает коллекцию всех дочерних узлов элемента, включая текстовые узлы и комментарии, в то время как `children` возвращает только дочерние элементы.
- `parentNode` возвращает родительский узел элемента, который может быть любым типом узла, в то время как `parentElement` возвращает родительский элемент, который всегда является элементом.
- `firstChild` возвращает первый дочерний узел элемента, который может быть любым типом узла, в то время как `firstElementChild` возвращает первый дочерний элемент.
- `nextSibling` возвращает следующий узел на том же уровне дерева, который может быть любым типом узла, в то время как `nextElementSibling` возвращает следующий элемент на том же уровне.

## Explain how methods getElementById, getElementsByTagName, getElementsByClassName work.

- `getElementById` возвращает элемент с указанным идентификатором. Например, `document.getElementById('myId')`.
- `getElementsByTagName` возвращает коллекцию элементов с указанным тегом. Например, `document.getElementsByTagName('p')`.
- `getElementsByClassName` возвращает коллекцию элементов с указанным классом. Например, `document.getElementsByClassName('myClass')`.

## Explain how methods querySelector and querySelectorAll work.

- `querySelector` возвращает первый элемент, который соответствует указанному CSS-селектору. Например, `document.querySelector('.myClass')`.
- `querySelectorAll` возвращает коллекцию всех элементов, которые соответствуют указанному CSS-селектору. Например, `document.querySelectorAll('.myClass')`.

## Explain what DOM event is and can name at least five events.

DOM событие - это сигнал от браузера о том, что что-то произошло. События могут быть вызваны пользователем (например, клик, наведение мыши, нажатие клавиши) или браузером (например, загрузка страницы, изменение значения элемента формы).

Некоторые примеры событий: `click`, `mouseover`, `keydown`, `load`, `change`.