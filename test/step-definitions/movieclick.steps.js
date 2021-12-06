const { Given, When, Then } = require('@wdio/cucumber-framework');

Given('I am on the movie page', async () => {
    await browser.url(`https://www.imdb.com/title/tt1375666/?ref_=nv_sr_srsg_6`);
});

When('', async () => {

});

Then('', async () => {

}); 