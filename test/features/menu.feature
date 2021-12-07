Feature: IMDb Menu

    Scenario: IMDb close menu with X button

    Given I am on the IMDb home page
    When I press the menu button
    When I am in the menu, click the X
    Then check if I am on the home page

    Scenario: IMDb Menu To Icon

    Given I am on the IMDb home page
    When I press the menu button
    When Morris am in the menu, click the imdb logo
    Then Morris check if i am on the home page


    Scenario: IMDb Menu best of 2021

    Given I am on the IMDb home page
    When I press the menu button
    When I am at the menu, click best of 2021 under Awards & Events
    Then I control that i am at best of 2021 page