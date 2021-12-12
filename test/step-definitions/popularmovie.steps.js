const { Given, When, Then } = require('@wdio/cucumber-framework');

//////////////// Scenario 1 /////////////////////

Given('I am on IMDbs home page', async () =>{
    await browser.url('https://www.imdb.com');
});

When('I click on menu button', async () => {
    
    const clickOnMenuButton = await $('*[class="ipc-button__text"]');
    await clickOnMenuButton.click();
});

When('I click on Most Popular Movie', async () => {
    const clickOnMostPopularMovie = await $('*[href="/chart/moviemeter/?ref_=nv_mv_mpm"]');
    await clickOnMostPopularMovie.click();
});

Then(/^I see results containing the text "(.*)" as title or desciption on the page$/, async (text) => {
    expect (await (browser)).toHaveUrl('https://www.imdb.com/chart/moviemeter/?ref_=nv_mv_mpm');
    const header =  await $('[class="header"]').getText();
    expect (header).toBe(text);
});

//////////////// Scenario 2 /////////////////////

Given('I am on the IMDbs Most Popular Movie Page', async () => {
    await browser.url('https://www.imdb.com/chart/moviemeter/?ref_=nv_mv_mpm');
});

When('I click on the sort by dropdown menu', async () => {
    const clickOnDropDownMenu = await ($('*[id="lister-sort-by-options"]'));
    clickOnDropDownMenu.click();
});

When('I select IMDbs rating', async () => {
    const clickOnIMDbsRating = await ($('*[value="ir:descending"]'));
    clickOnIMDbsRating.click();
});

Then('I see most popular movies sorted by IMDbs rating', async() => {
    expect (await(browser)).toHaveUrl('https://www.imdb.com/chart/moviemeter/?sort=ir,desc&mode=simple&page=1');
});

//////////////// Scenario 3 /////////////////////

When('I select Release date', async () => {
    const clickOnIMDbsRating = await ($('*[value="us:descending"]'));
    clickOnIMDbsRating.click();
});

Then('I see most popular movies sorted by release date', async() => {
    expect (await(browser)).toHaveUrl('https://www.imdb.com/chart/moviemeter/?sort=us,desc&mode=simple&page=1');
});

//////////////// Scenario 4 /////////////////////

Given('I see movies sorted by release date', async () => {
    await browser.url('https://www.imdb.com/chart/moviemeter/?sort=us,desc&mode=simple&page=1');
});

When('I click on descending order', async () => {
    const clickOnDescendingOrder = await ($('*[class="global-sprite lister-sort-reverse ascending"]'));
    clickOnDescendingOrder.click();
});

Then('I see movies sorted by released date by ascending order', async() => {
    expect (await(browser)).toHaveUrlContaining('/chart/moviemeter/?sort=us,asc&mode=simple&page=1');
});

