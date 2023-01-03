As a developer
I want to see and use a retro style website
So that I can have a unique site experience

    Feature: I want home to be a 90s themed desktop computer
        Scenario: I want to see a loading animation
            Given I am on /
            When I load the home page
            Then I should see a loading animation for 1.5 seconds

        Scenario: I want to see my custom mouse cursor
            Given I am /
            And the page is loaded
            When I use my cursor
            Then I should see both hover and default cursor states

        Scenario: I want to see a 90s themed desktop
            Given I am on /
            And I wait for the page to load
            When I take a screenshot and compare it to base line
            Then I should see there is no disparity greater than 3%
 
        Scenario: I want to use up, down and return keystrokes to select list options
            Given I am on /
            And I wait for the page to load
            When I press up
            Then I should see that "Desktop" is selected
            When I press down
            Then I should see that "Resume" is selected
            When I press return
            Then I should see a Windows 98 themed desktop
       
        Scenario: I want to use up, down and return buttons to select list options
            Given I am on /
            And I wait for the page to load
            When I click up
            Then I should see that "Desktop" is selected
            When I click down
            Then I should see that "Resume" is selected
            When I click return
            Then I should see a Windows 98 themed desktop
       
        Scenario: I want to use the floppy disk drive easter egg
            Given I am on /
            And I wait for the page to load
            When I press the floppy disk
            Then I should see the floppy disk

        Scenario: I want to see a Windows 98 style navigation menu
            Given I am on /desktop
            And I wait for the page to load
            When I open the start menu
            Then I should see my menu list options
    
    Feature: I want tech to be a Magazine style blog
        Scenario: I want to see a Windows 98 style screensaver
            Given I am on /tech
            When I wait for the page to load
            Then I should see my Magazine styled blog

        Scenario: I want to see a Windows 98 style screensaver
            Given I am on /tech
            When I switch the theme
            Then I should see my Magazine styled blog in dark