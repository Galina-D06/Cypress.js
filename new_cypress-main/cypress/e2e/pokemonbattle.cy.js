describe('Битва покемонов', function () {

 it('Верный логин и верный пароль', function () {
        cy.visit('https://pokemonbattle.ru/'); //Зашли на сайт
        cy.get('#k_email').type('galia.iljina@yandex.ru'); //Ввели логин
        cy.get('#k_password').type('MkZ-2er-LFE-khV'); //Ввели верный пароль
        cy.get('.MuiButton-root').click(); //Нажать Войти
        cy.wait(2000);
        cy.get('.header_card_trainer').click(); //Нажать на кнопку с аватаром тренера
        cy.wait(2000);
        cy.get('[data-qa="shop"]').click(); //Нажать кнопку Смена аватара
        cy.get('.available > button').first().click(); //Выбрать первого доступного аватара
        cy.get('.payment_form_card_form > :nth-child(2) > .style_1_base_input').type(5555555555555599); //Ввести номер карты
        cy.get(':nth-child(1) > .style_1_base_input').type(1234); //Ввести срок действия
        cy.get('.payment_form_card_form_inputs > :nth-child(2) > .style_1_base_input').type(125); //Ввести CVV
        cy.get('.payment_form_card_form_input_last > .style_1_base_input').type("galina ilina"); //Ввести имя
        cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();  //Нажать оплатить
        cy.get('.style_1_base_input').type(56456); //Ввести код из смс
        cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click(); //Нажать оплатить
        cy.get('.payment_form_card_form').should('be.visible');  //Проверить что надпись видна
     
    })
})