Feature: beep if stationary object detected in the car path
    Scenario: beep alarm if stationary object is in car path
    Given the car is in auto-pilot mode
    When there is a stationary object ahead in the path of the car 
    Then the self-driving car should beep
