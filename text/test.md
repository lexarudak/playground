# Testing
##	What is software testing. Pros and Cons.

Тестирование приложение на наличие ошибок. Плюсы - более стабильное приложение на выходе. минусы - больше времени на разработку, плюс не особо интересно

##	Different types of tests.

- юнит тесты
- интеграционные тесты
- е2е тесты

##	Explain Testing pyramid & Ice-Cream cone.

пирамиде тестирования это концепция, говорящая, что мелких и дешевых тестов должно быть много. и чем тесты дороже. тем меньше их должно быть. внизу приамиды простые и дешевые юнит тесты. вверху пирамиды - е2е

 Ice-Cream cone - это дисбаланс тестов, когда юнитов слишком мало а е2е и интеграционных много. это приводит к ошибкам
- нехватка юнитов. значит код недостестирован
- много дорогих, значит долго тестировать
- много дорогих - значит их часто и долго менять при внесении изменений в код


##	TDD vs BDD.

TDD - test-driven development. это когда ты сначала пишешь тесты, а потом реализуешь фнкуционал, покрывающих эти тесты

BDD - Behavior-Driven Development. это вообще слегка о другом. Это скорее принцип постановки задачи и описания конкретного результата через
GIVEN 
WHEN
THEN

в целом два этих подхода могут использоваться вместе


##	White box, Gray box, black box testing. What the difference?

 это различные методы тестирования программного обеспечения
Black Box Testing оценивает функциональность программы без знания внутренней структуры.
White Box Testing анализирует внутреннюю структуру и логику программы.
Gray Box Testing использует комбинацию внутренних и внешних характеристик программы для тестирования.

##	Test structure, assertion function, assertion library Chai.
##	What are test spies, stubs, mocks. When to use them. Sinon.JS overview.
##	Testing frameworks overview Jasmine, Jest, Mocha, Cucumber.
##	Test runners overview Karma, Wallaby.
##	What is Selenium WebDriver.
##	E2E testing with Protractor.
##	Test coverage tool Istanbul overview. What branch, statement, line, functions coverage means?
