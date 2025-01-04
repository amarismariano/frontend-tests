Feature: Home Page Validation
  Scenario: Validate card details
    Given I navigate to the home page
    Then all cards should display the name, image, and "Ver detalle" link

  Scenario: Validate "Ver detalle" button navigation
    Given I navigate to the home page
    When I click on the "Ver detalle" button of the first card
    Then I should be navigated to the character view
