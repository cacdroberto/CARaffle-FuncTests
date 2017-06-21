describe('The Modern Software Factory Demo UI Test - NA East', function() {
  it('should add a todo', function() {
    browser.ignoreSynchronization = true;
    browser.get('http://naeast-preprod.cdbu.io');
    element(by.css('[name="Name"]')).sendKeys('Selenium Test User');
    element(by.buttonText('Submit')).click();
    });
});
