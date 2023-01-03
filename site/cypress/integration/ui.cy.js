/// <reference types="cypress" />
describe('sajjad.nyc', () => {
  // As a developer
  // I want to see and use a retro style website
  // So that I can have a unique site experience
  describe('home: 90s themed desktop computer', () => {
    beforeEach(() => {
      cy.visit('/');
      cy.viewport(1080, 720);
    });
    // Scenario: I want to see a loading animation
      // Given I am on /
      // When I load the home page
      // Then I should see a loading animation for 1.5 seconds
    it('should have a loading animation', () => {
      cy.get('#loading').should('be.visible');
    });
    // Scenario: I want to see my custom mouse cursor
      // Given I am /
      // And the page is loaded
      // When I use my cursor
      // Then I should see both hover and default cursor states
    it('should have a custom cursor as default and hover', () => {
      cy.wait(3000);
      cy.request('/images/mouse/hover.png').its('status').should('equal', 200);
    });
    // Scenario: I want to see a 90s themed desktop
      // Given I am on /
      // And I wait for the page to load
      // When I take a screenshot and compare it to base line
      // Then I should see there is no disparity greater than 3%
    it('should look like a 90s themed desktop computer', () => {
      cy.wait(3000);
      cy.matchImageSnapshot('home');
    });
    // Scenario: I want to use up, down and return keystrokes to select list options
      // Given I am on /
      // And I wait for the page to load
      // When I press down
      // Then I should see that "E-mail" is selected
      // When I press down
      // Then I should see that "Desktop" is selected
      // When I press return
      // Then I should see a Windows 98 themed desktop
    it('should be able to use up, down and return keystrokes to select list options', () => {
      cy.wait(3000);
      cy.get('.active').type('{downArrow}');
      cy.get('.active').type('{downArrow}');
      cy.get('.active').type('{enter}');
    }); 
    // Scenario: I want to use up, down and return buttons to select list options
      // Given I am on /
      // And I wait for the page to load
      // When I click up
      // Then I should see that "Desktop" is selected
      // When I click down
      // Then I should see that "Resume" is selected
      // When I click return
      // Then I should see a Windows 98 themed desktop
    it('should be able to use up, down and return buttons to select list options', () => {
      cy.wait(3000);
      cy.get('#next').click();
      cy.get('#next').click();
      cy.get('#return').click();
    });
    // Scenario: I want to use the floppy disk drive easter egg
      // Given I am on /
      // And I wait for the page to load
      // When I press the floppy disk
      // Then I should see the floppy disk
    it('I want to use the floppy disk drive easter egg', () => {
      cy.wait(3000);
      cy.get('#play').click();
      cy.get('#floppy').should('not.have.css', 'display', 'none');
    });
  });
  describe('desktop: Windows 98 style portfolio', () => {
    beforeEach(() => {
      cy.wait(1000);
      cy.visit('/desktop');
      cy.viewport(1080, 720);
    });
    // Scenario: I want to see a Windows 98 style screensaver
      // Given I am on /desktop
      // And I wait for the page to load
      // When I open the start menu
      // Then I should see my menu list options
    it('should see a Windows 98 style navigation menu', () => {
      cy.get('#start').click({ force: true });
    });
  });
  describe('tech: a magazine style blog', () => {
    beforeEach(() => {
      cy.visit('/tech');
      cy.viewport(1080, 720);
    });
    // Scenario: I want to see a Windows 98 style screensaver
      // Given I am on /tech
      // When I wait for the page to load
      // Then I should see my Magazine styled blog
    it('should see my Magazine styled blog', () => {
      cy.wait(3000);
      cy.matchImageSnapshot('tech');
    });
    // Scenario: I want to see a Windows 98 style screensaver
      // Given I am on /tech
      // When I switch the theme
      // Then I should see my Magazine styled blog in dark
    it('should see my Magazine styled blog in dark', () => {
      cy.wait(3000);
      cy.get('.slider').click();
      cy.matchImageSnapshot('tech-dark');
    });
  });
});
