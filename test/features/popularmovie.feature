
Feature: See IMDbs most popular movies
    "As a user I want to view and sort most popular movies."

    Scenario: Go to Most Popular Movie Page
      "As a user I want to be able to go to Most Popular Movie page"

      Given I am on IMDbs home page
      When I click on menu button
      And I click on Most Popular Movie
      Then I see results containing the text "Most Popular Movies" as title or desciption on the page

    Scenario: Sort movies by IMDb top rating
      "As a user I want to sort the movies by IMDbs top rating"

      Given I am on the IMDbs Most Popular Movie Page
      When I click on the sort by dropdown menu
      And I select IMDbs rating
      Then I see most popular movies sorted by IMDbs rating

    Scenario: Sort movies by release date
      "As a user I want to sort the movies by release date"

      Given I see most popular movies sorted by IMDbs rating
      When I click on the sort by dropdown menu
      And I select Release date
      Then I see most popular movies sorted by release date

    Scenario: Ascend order of movies sorted by release date 
      "As a user I want to see the oldest of most popular movie on the top "

      Given I see movies sorted by release date
      When I click on descending order
      Then I see movies sorted by released date by ascending order

