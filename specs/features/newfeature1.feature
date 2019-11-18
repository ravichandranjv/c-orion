Feature: Auto-pilot feature to test jira
    Scenario: new feature to add jira issue
    Given the car is in auto-pilot mode
    When there is a stationary object ahead in the path of the car 
    Then the self-driving car should beep
