import {browser, by, element} from "protractor";

describe('sample tests', () => {
    let testParams = [
        {link: 'February 2017', count: 2 },
        {link: 'January 2017', count: 1 },
        {link: 'December 2016', count: 1 },
        {link: 'November 2016', count: 1 },
        {link: 'October 2016', count: 1 },
        {link: 'September 2016', count: 1 },
        {link: 'August 2016', count: 1 },
        {link: 'July 2016', count: 3 },
        {link: 'June 2016', count: 1 },
        {link: 'March 2016', count: 1 },
        {link: 'January 2016', count: 1 },
        {link: 'November 2015', count: 1 },
        {link: 'October 2015', count: 2 },
        {link: 'September 2015', count: 1 },
        {link: 'August 2015', count: 1 },
        {link: 'July 2015', count: 3 },
        {link: 'April 2015', count: 1 },
        {link: 'March 2015', count: 3 },
        {link: 'February 2015', count: 1 },
        {link: 'December 2014', count: 1 },
        {link: 'October 2014', count: 1 },
        {link: 'September 2014', count: 1 },
        {link: 'August 2014', count: 1 },
        {link: 'April 2014', count: 2 },
        {link: 'March 2014', count: 2 },
        {link: 'February 2014', count: 1 },
        {link: 'August 2013', count: 3 },
        {link: 'July 2013', count: 5 },
        {link: 'June 2013', count: 1 },
        {link: 'April 2013', count: 5 },
        {link: 'March 2013', count: 6 },
        {link: 'February 2013', count: 8 },
        {link: 'January 2013', count: 4 },
        {link: 'December 2012', count: 2 },
        {link: 'November 2012', count: 3 },
        {link: 'October 2012', count: 6 },
        {link: 'September 2012', count: 6 },
        {link: 'August 2012', count: 7 },
        {link: 'July 2012', count: 4 },
        {link: 'June 2012', count: 2 },
        {link: 'May 2012', count: 1 },
        {link: 'April 2012', count: 2 },
        {link: 'March 2012', count: 3 },
        {link: 'February 2012', count: 4 },
        {link: 'January 2012', count: 6 },
        {link: 'December 2011', count: 7 }
        ];

  testParams.forEach((test) => {
  it('should display correct number of blogs for' + test.link , (done) => {
      browser.waitForAngularEnabled(false);
      browser.get('http://www.sword-activerisk.com/news-resources/blog/');
      browser.sleep(4000);
     element(by.className('date')).element(by.linkText(test.link)).click().then(() => {
         // element(by.className('date')).element(by.linkText('February 2017')).click().then(() => {
         browser.sleep(2000);
         browser.getAllWindowHandles().then(function (handles) {
             let newWindowHandle;
             newWindowHandle = handles[1]; // this is  new tab
             browser.switchTo().window(newWindowHandle).then(function () {
                 //  expect(browser.getCurrentUrl()).toContain('https://www.sword-activerisk.com/2017/02/');
                 return element.all(by.className('metaPost')).count();
             }).then((newCount) => {
                 expect(newCount).toBe(test.count);
                 browser.driver.close();
                 browser.switchTo().window(handles[0]);
                 done();
             });
         });
     });
  });
});
});
