describe('Проверка авторизации', function () {

    it('Верный логин и верный пароль', function () {
         cy.visit('https://login.qa.studio//'); // зашли на сайт
         cy.get('#forgotEmailButton').should('be.visible'); //проверить что кнопка востановить пароль видна
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //проверить цвет цвет кнопки востановить пароль

         cy.get('#mail').type('german@dolnikov.ru'); // ввели верный логин
         cy.get('#pass').type('iLoveqastudio1'); // ввели веный пароль
         cy.get('#loginButton').click(); //нажал войти

         cy.get('#messageHeader').contains('Авторизация прошла успешно'); //проверяю что вижу текст
         cy.get('#messageHeader').should('be.visible'); //текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //есть крестик и он виден пользователю
         cy.get('#exitMessageButton > .exitIcon').click(); //нажал на крестик         
     })

     it('Проверка востановления пароля', function () {
        cy.visit('https://login.qa.studio//'); // зашли на сайт
        cy.get('#forgotEmailButton').should('be.visible'); //проверить что кнопка востановить пароль видна
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //проверить цвет цвет кнопки востановить пароль

        cy.get('#forgotEmailButton').click(); //нажал на кнопку востановить пароль

        cy.get('#mailForgot').type('german@dolnikov.ru'); // ввели правельную почту
        cy.get('#restoreEmailButton').click(); //нажали отправить код

        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); //проверяю на совпадение текст
        cy.get('#messageHeader').should('be.visible'); //текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //есть крестик и он виден пользователю
        cy.get('#exitMessageButton > .exitIcon').click(); //нажал на крестик        
    })

    it('Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio//'); // зашли на сайт
        cy.get('#forgotEmailButton').should('be.visible'); //проверить что кнопка востановить пароль видна
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //проверить цвет цвет кнопки востановить пароль

        cy.get('#mail').type('german@dolnikov.ru'); // ввели верный логин
        cy.get('#pass').type('iLoveqastudio7'); // ввели невеный пароль
        cy.get('#loginButton').click(); //нажал войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //проверяю что вижу текст
        cy.get('#messageHeader').should('be.visible'); //текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //есть крестик и он виден пользователю
        cy.get('#exitMessageButton > .exitIcon').click(); //нажал на крестик        
    })

    it('Неверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio//'); // зашли на сайт
        cy.get('#forgotEmailButton').should('be.visible'); //проверить что кнопка востановить пароль видна
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //проверить цвет цвет кнопки востановить пароль

        cy.get('#mail').type('german1@dolnikov.ru'); // ввели неверный логин
        cy.get('#pass').type('iLoveqastudio1'); // ввели веный пароль
        cy.get('#loginButton').click(); //нажал войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //проверяю что вижу текст
        cy.get('#messageHeader').should('be.visible'); //текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //есть крестик и он виден пользователю
        cy.get('#exitMessageButton > .exitIcon').click(); //нажал на крестик        
    })

    it('Проверка что в логине присутствует @', function () {
        cy.visit('https://login.qa.studio//'); // зашли на сайт
        cy.get('#forgotEmailButton').should('be.visible'); //проверить что кнопка востановить пароль видна
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //проверить цвет цвет кнопки востановить пароль

        cy.get('#mail').type('germandolnikov.ru'); // ввели неверный логин без @
        cy.get('#pass').type('iLoveqastudio1'); // ввели веный пароль
        cy.get('#loginButton').click(); //нажал войти

        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); //проверяю что вижу текст
        cy.get('#messageHeader').should('be.visible'); //текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //есть крестик и он виден пользователю
        cy.get('#exitMessageButton > .exitIcon').click(); //нажал на крестик        
    })

    it('Проверка на приведение к строчным буквам в логине ', function () {
        cy.visit('https://login.qa.studio//'); // зашли на сайт
        cy.get('#forgotEmailButton').should('be.visible'); //проверить что кнопка востановить пароль видна
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //проверить цвет цвет кнопки востановить пароль

        cy.get('#mail').type('GerMan@Dolnikov.ru'); // ввели верный логин
        cy.get('#pass').type('iLoveqastudio1'); // ввели веный пароль
        cy.get('#loginButton').click(); //нажал войти

        cy.get('#messageHeader').contains('Авторизация прошла успешно'); //проверяю что вижу текст
        cy.get('#messageHeader').should('be.visible'); //текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //есть крестик и он виден пользователю
        cy.get('#exitMessageButton > .exitIcon').click(); //нажал на крестик         
    })
 })



// План
// + найти поле логин и ввести правильный логин
// найти поле пароль и ввести правильный пароль
// найти кнопку войти и нажать войти
// проверить, что авторизация прошла успешно