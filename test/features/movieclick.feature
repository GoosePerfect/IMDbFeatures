Feature: To test the movie page functionality 

    Scenario: Play trailer    
        Given I am on the movie page
        When I click the button "Play"
        Then I see results containing the movie trailer in redirected page

    Scenario: Actor info page
        Given I am on the movie page
        When I click on the actor
        Then I get redirected to actors info page

    Scenario: User review page
        Given I am on the movie page
        When I click on User reviews
        Then I get redirected to user reviews