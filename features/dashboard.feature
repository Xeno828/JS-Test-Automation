Feature: testing the dashboard

  Scenario: trying to access the dashboard
    Given a customer has logged into online banking
    When they access the dashboard
    Then the dashboard is displayed as expected
