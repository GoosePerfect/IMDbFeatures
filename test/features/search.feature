Feature: Search IMDb All
    "As a user I want to search IMDb for all kinds of results, that I want to find."

    Scenario: Searching for Batman Begins
        
        Given I am on the IMDb home page
        When I enter the text "Batman Begins" in the "#input" field
        And I hit the Return key
        Then I see results containing the text "Batman Begins" in their title or description

    Scenario: Searching for Morgan Freeman among celebrities
        
        Given I am on the IMDb home page
        When I click on the drop down menu
        And I click on celebs
        And I enter the name "Morgan Freeman" in the "#input" field
        And I hit the Return key
        Then I see results containing the text "Morgan Freeman" in their title or description

    #Scenario: Searching for Christian Bale in advanced search page
        #Given I am on the advanced search page
        #When 