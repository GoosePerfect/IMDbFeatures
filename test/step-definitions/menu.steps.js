const { Given, When, Then } = require('@wdio/cucumber-framework');

//Scenario 1
Given(/^I am on the IMDb home page$/, async () => {
    await browser.url("https://www.imdb.com");
});

When(/^I press the menu button$/, async () => {
    await(await $('[class="ipc-button__text"]')).click();
});

When(/^I am in the menu, click the X$/, async () => {
    await(await $('[class="ipc-icon-button _2RzUkzyrsjx_BPIQ5uoj5s ipc-icon-button--baseAlt ipc-icon-button--onBase"]')).waitForDisplayed({timeout: 2000, timeoutMsg: "Menu clicked but not displayed"});
    await(await $('*[title="Close Navigation Drawer"]')).click();
});

Then(/^check if I am on the home page$/, async () => {
    expect(browser).toHaveUrl("https://www.imdb.com");
});


//Scenario 2
// When(/^I press the menu button$/, async () => {
//     await(await $('[class="ipc-button__text"]')).click();
// });

When(/^I am in the menu, click the imdb logo$/, async () => {
    await (await $('[class="ipc-logo WNY8DBPCS1ZbiSd7NoqdP"]')).waitForDisplayed({timeout: 2000, timeoutMsg: "Clicked menu but not displayed"});
    await (await $('[class="ipc-logo WNY8DBPCS1ZbiSd7NoqdP"]')).click();
});

Then(/^I check if i am on the home page$/, async () => {
    expect(browser).toHaveUrl("https://www.imdb.com");
});


//Scenario 3
// When(/^I click the menue icon$/, async () => {
//     await (await $('[class="ipc-button__text"]')).click();
// });

When(/^I am at the menu, click best of 2021 under Awards & Events$/, async () => {
    await (await $('[data-testid="panel-header"]')).waitForDisplayed({timeout: 2000, timeoutMsg: "menu but not displayed"});
   
    browser.waitUntil(async () => {
        await (await $('[testid="panel-content"]')).waitForDisplayed();
        return (await (await $('[testid="panel-content"]')).getText()).includes('Awards & Events')
    });

    await browser.pause(500)
    const categories = await $$('[data-testid="nav-link-category"]');
    let elem;
    for(const cat of categories) {
        let text = await cat.getText();
        if(text.includes('Awards & Events')) {
            elem = cat;
            break;
        }
    }
    let bestOf = (await elem.$$('[role="menuitem"]')).find(async (e) => (await e.getText()).includes('Best of 2021'))

    await bestOf.click();
    browser.pause(2000)
});

Then(/^I control that i am at best of 2021 page$/, async () => {
    await (await $('[class="nav-heading"]')).waitForDisplayed({timeout: 2000, timeoutMsg: "Header not displayed"});
    const headerText =  await $('[class="nav-heading"]').getText();
    expect(headerText).toBe("BEST OF 2021");
    
})