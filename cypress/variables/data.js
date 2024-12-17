    export const urls = {
    homepage: 'https:google.com',
    Demoqa: 'https://demoqa.com',
  };
  
  export const LocatorElements = {
    Tag: 'h5', 
    Name: 'Elements',
    Alertname: 'Alerts, Frame & Windows',
    Widgetname: 'Widgets',
  };

  export const Buttons = {
    Textbox: 'span:contains("Text Box")',
    Checkbox: 'span:contains("Check Box")',
    Radiobutton: 'span:contains("Radio Button")',
    ImpressiveCheckbox: 'label[for="impressiveRadio"]',
    Icon: 'div > div > div > div > div > ol > li > span > label > span',
    SubmitButton: '#submit',
    UploadanddownloadButton: 'Upload and Download',
    uploadButton: '#uploadFile',
    Alertbox: ':nth-child(3) > .element-list > .menu-list > #item-1 > .text',
    Alertthirdoption: '#confirmButton', //On button click, confirm box will appear
    Widgetbox: 'span:contains("Slider")',
  };

  export const Fields = { 
    userName: '#userName',
    userEmail: '#userEmail',
    currentAddress: '#currentAddress',
    permanentAddress: '#permanentAddress',
    };
   
  export const Results = {
    outputDiv: '.border',
    outDivtext: 'Name',
    divText: '#result',
    divTextRadio: '.mt-3',
    expectedText: 'You have selected', 
    alerttext: '#confirmResult',
    alertexpectedtext: 'You selected Ok',
  }

  export const Slider = {
    slider: '#sliderContainer > div > span > input',
  }
  
