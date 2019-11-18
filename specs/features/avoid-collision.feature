Feature: Auto-pilot detects stationary object in the car path
    Scenario: stationary object in path to avoid collision
    Given the car is in auto-pilot mode
    When there is a stationary object ahead in the path of the car 
    Then the self-driving car should beep
