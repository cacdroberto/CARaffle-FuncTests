describe('The Modern Software Factory Demo UI Test - NY', function() {
  it('should add a todo', function() {
    browser.ignoreSynchronization = true;
    browser.get('http://ny-preprod.cdbu.io/');
    element(by.css('[name="name"]')).sendKeys('Selenium Test User');
    element(by.buttonText('I\'m In!')).click();
    });
});
