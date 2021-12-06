
const { Given, When, Then } = require('@wdio/cucumber-framework');

// Searching in all categories

Given('I am on the IMDb home page', async () => {
    await browser.url(`https://imdb.com/`);
});

When(/^I enter the text "(.*)" in the "(.*)" field$/, async (text, id) => {
    await $('*[name="q"]').setValue(text);
    expect($('*[name="q"]')).toHaveValue(text);
});

When('I hit the Return key', async() => {
    await browser.keys("\uE007"); 
});

Then(/^I see results containing the text "(.*)" in their title or description$/, async(text) => {
    await expect($('body')).toHaveTextContaining(text);
});


// When searching for a celebrity

When('I click on the drop down menu', async () => {
    await $('//*[@id="nav-search-form"]/div[1]').click();
});

When('I click on celebs', async () => {
    await $('//*[@id="navbar-search-category-select-contents"]/ul/a[4]').click();
});

When(/^I enter the name "(.*)" in the "(.*)" field$/, async (text, id) => {
    await $('*[name="q"]').setValue(text);
    expect($('*[name="q"]')).toHaveValue(text);
});