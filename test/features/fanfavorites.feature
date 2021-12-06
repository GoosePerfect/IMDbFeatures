Feature: IMDb Fan favorites

    "bla bla bla"

    Scenario: Click on Arcane Serie in Fan Favorite

        Given I am on the IMDb Front Page
        When I click on "Arcane" in Fan favorites
        Then I see the movie containing the title "Arcane"  


    Scenario: Show all Fan Favorites

        Given I am on the IMDb Front Page
        When I click on "Fan favorites"
        Then I see all movies & series in "Fan favorites"


