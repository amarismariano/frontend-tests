Feature: Character View Validation
  Scenario: Validate character details
    Given I navigate to the character view
    Then the page should display the name, genre, species, and status
