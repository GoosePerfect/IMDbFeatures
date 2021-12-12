
const { Given, When, Then } = require('@wdio/cucumber-framework');

// Searching in all categories

Given('I am on the IMDb home page', async () => {
    await browser.url(`https://imdb.com/`);
});

When(/^I enter the text "(.*)" in the "(.*)" field$/, async (text, id) => {
    await $('*[name="q"]').setValue(text);
    expect( await $('*[name="q"]')).toHaveValue(text);
});

When('I hit the Return key', async() => {
    await browser.keys("\uE007"); 
});

Then(/^I see results containing the text "(.*)" in their title or description$/, async(text) => {
    expect( await $('body')).toHaveTextContaining(text);
});


// When searching for a celebrity

When('I click on the drop down menu', async () => {
    await $('//*[@id="nav-search-form"]/div[1]').click();
});

When('I click on celebs', async () => {
    await $('//*[@id="navbar-search-category-select-contents"]/ul/li[4]').click();
});

When(/^I enter the name "(.*)" in the "(.*)" field$/, async (text, id) => {
    await $('*[name="q"]').setValue(text);
    expect( await $('*[name="q"]')).toHaveValue(text);
});

// When doing an advanced search

Given('I am on the advanced search page', async () => {
    await browser.url(`https://www.imdb.com/search/`);
});

When('I click on the Movies, TV and Video Games dropdown', async () => {
    await $('*[class="imdb-search-gateway__text-search-option"]').click();
});

When('I select quotes', async () => {
    await $('*[value="quotes"]').click();
});

When(/^I enter "(.*)" in the "(.*)" field$/, async (text, id) => {
    await $('//*[@id="query"]').setValue(text);
    expect( await $('//*[@id="query"]')).toHaveValue(text);
});

When('I hit the search button', async () => {
    await $('//*[@id="main"]/div[3]/div/div/div[1]/form/div[3]/button').click();
});

Then(/^I see results containing the text "(.*)" on the page$/, async(text) => {
    expect( await $('body')).toHaveTextContaining(text);
});