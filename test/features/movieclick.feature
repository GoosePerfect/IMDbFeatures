Feature: To test the movie page functionality 

    Scenario: Play trailer    
        Given I am on the movie page
        When I click the button "Play"
        Then I see results containing the movie trailer in redirected page

    Scenario: Actor info page
        Given I am on the movie page
        When I click on the actor
        Then I get redirected to actors info page

    Scenario: All topics button
        Given I am on the movie page
        When I click on the button All topics
        And I click on Awards
        Then I get redirected to page with list of awards
