describe('Проверка авторизации', function () {

   it('Верный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); //Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //Проверка цвета кнопки восстановить пароль

        cy.get ('#mail').type('german@dolnikov.ru'); //Ввели верный логин
        cy.get('#pass').type('qa_one_love1'); //Ввели верный пароль
        cy.get('#loginButton').click(); //Нажал Войти

        cy.get('#messageHeader').contains('Авторизация прошла успешно'); //Проверка текста
        cy.get('#messageHeader').should('be.visible'); //Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Есть крестик и он виден для пользователя

    })
    
    it('Проверка логики восстановления пароля', function () {
        cy.visit('https://login.qa.studio/'); //Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //Проверка цвета кнопки восстановить пароль
        
        cy.get('#forgotEmailButton').click(); //Нажал восстановить пароль
        cy.get('#mailForgot').type('german@dolnikov.ru'); //Ввести почту для восстановления
        cy.get('#restoreEmailButton').click(); //Нажать кнопку Отправить код

        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); //Проверка на совпадение текст текст
        cy.get('#messageHeader').should('be.visible'); //Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Есть крестик и он виден для пользователя

    })
       it('Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio/'); //Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //Проверка цвета кнопки восстановить пароль

        cy.get ('#mail').type('german@dolnikov.ru'); //Ввели верный логин
        cy.get('#pass').type('qa_one_love'); //Ввели неверный пароль
        cy.get('#loginButton').click(); //Нажал Войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //Проверка текста
        cy.get('#messageHeader').should('be.visible'); //Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Есть крестик и он виден для пользователя

    })
    it('Неверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); //Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //Проверка цвета кнопки восстановить пароль

        cy.get ('#mail').type('g@dolnikov.ru'); //Ввели неверный логин
        cy.get('#pass').type('qa_one_love1'); //Ввели верный пароль
        cy.get('#loginButton').click(); //Нажал Войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //Проверка текста
        cy.get('#messageHeader').should('be.visible'); //Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Есть крестик и он виден для пользователя
    })

      it('Логин без @ и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); //Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //Проверка цвета кнопки восстановить пароль

        cy.get ('#mail').type('germandolnikov.ru'); //Ввели логин без @
        cy.get('#pass').type('qa_one_love1'); //Ввели верный пароль
        cy.get('#loginButton').click(); //Нажал Войти

        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); //Проверка текста
        cy.get('#messageHeader').should('be.visible'); //Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Есть крестик и он виден для пользователя

    })
    it('Проверка на приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/'); //Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //Проверка цвета кнопки восстановить пароль

        cy.get ('#mail').type('GerMan@Dolnikov.ru'); //Ввели логин с заглавными буквами
        cy.get('#pass').type('qa_one_love1'); //Ввели верный пароль
        cy.get('#loginButton').click(); //Нажал Войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //Проверка текста
        cy.get('#messageHeader').should('be.visible'); //Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Есть крестик и он виден для пользователя

    })
})
    

