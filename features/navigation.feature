Feature: Navigation Validation
  Scenario: Validate home button navigation
    Given I navigate to the character view
    When I click the home button
    Then I should be navigated to the home page
