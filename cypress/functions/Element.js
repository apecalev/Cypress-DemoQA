import { urls,LocatorElements, Buttons, Fields, Results, Slider } from "../variables/data";

export function page() {
  cy.visit(urls.Demoqa);
  cy.contains(LocatorElements.Tag, LocatorElements.Name).scrollIntoView({
    duration: 1000,   
    easing: 'linear'  
  });
}

export function elementbutton() {
  cy.contains(LocatorElements.Tag, LocatorElements.Name).should('be.visible');
  cy.contains(LocatorElements.Tag, LocatorElements.Name).click({ force: true });
}

export function textboxfunction() {
      cy.get(Buttons.Textbox).should('be.visible').click();
      cy.get(Fields.userName).scrollIntoView().should('be.visible').clear().type('Aleksandar').should('have.value', 'Aleksandar');    
      cy.get(Fields.userEmail).scrollIntoView().should('be.visible').clear().type('aleksandar@gmail.com').should('have.value', 'aleksandar@gmail.com');    
      cy.get(Fields.currentAddress).scrollIntoView().should('be.visible').clear().type('Mirche Acev5').should('have.value', 'Mirche Acev5');
      cy.get(Fields.permanentAddress).scrollIntoView().should('be.visible').clear().type('Mirche Acev5').should('have.value', 'Mirche Acev5');
      cy.get(Buttons.SubmitButton).click(); 
      cy.get(Results.outputDiv).should('be.visible').should('contain.text', Results.outDivtext); 
}

export function checkboxfunction() {
    cy.get(Buttons.Checkbox).should('be.visible').click();
    cy.get(Buttons.Icon).click({ multiple: true });
    cy.get(Results.divText).should('be.visible').should('contain.text', Results.expectedText);
}


export function radiobuttonfunction() {
  cy.get(Buttons.Radiobutton).should('be.visible').click();
  cy.get(Buttons.ImpressiveCheckbox).click({ multiple: true });
  cy.get(Results.divTextRadio).should('be.visible').should('contain.text', Results.expectedText);
}

export function uploadbuttonfunction() {
  cy.contains(Buttons.UploadanddownloadButton).scrollIntoView({duration: 1000, easing: 'linear'});
  cy.contains(Buttons.UploadanddownloadButton).should('be.visible');
  cy.contains(Buttons.UploadanddownloadButton).click({ force: true });
  cy.get(Buttons.uploadButton).click({ force: true });
  // I was not able to import img 
}

export function alertframefunction() {
  cy.contains(LocatorElements.Tag, LocatorElements.Alertname).should('be.visible');
  cy.contains(LocatorElements.Tag, LocatorElements.Alertname).click({ force: true });
  cy.get(Buttons.Alertbox).should('be.visible').click();
  // cy.get(Buttons.Alertbox).click({force: true});
  cy.get(Buttons.Alertthirdoption).click();
  cy.get(Results.alerttext, { timeout: 10000 }).should('be.visible').should('contain.text', Results.alertexpectedtext);
}

export function widgetfunction () {
  cy.contains(LocatorElements.Tag, LocatorElements.Widgetname).should('be.visible');
  cy.contains(LocatorElements.Tag, LocatorElements.Widgetname).click({ force: true });
  cy.get(Buttons.Widgetbox).should('be.visible').click();
}


export function changeslidervalue(value) {
 
  if (typeof value !== 'number' || isNaN(value) || value < 0 || value > 100) {
    throw new Error('The value provided is not a valid number');
  }

  // Get the slider element and its bounding rectangle
  cy.get(Slider.slider)
    .then(($slider) => {
      const sliderWidth = $slider.width(); // Get the width of the slider
      const targetPosition = (value / 100) * sliderWidth; // Calculate the target position

      // Trigger mouse events to simulate dragging the slider
      cy.wrap($slider)
        .trigger('mousedown', { which: 1, pageX: $slider.offset().left + targetPosition }) // Trigger mouse down event
        .trigger('mousemove', { which: 1, pageX: $slider.offset().left + targetPosition }) // Move the slider
        .trigger('mouseup'); // Release the mouse button

      // Allow time for the slider to reflect the change visually
      cy.wait(500); // Wait for the change to take effect
  
    });
  }
  
