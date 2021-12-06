const { Given, When, Then } = require('@wdio/cucumber-framework');
// Scenario 1
Given('I am on the movie page', async () => {
    await browser.url(`https://www.imdb.com/title/tt1375666/?ref_=nv_sr_srsg_6`);
});

When('I click the button "Play"', async () => {   
    await $('*[href*="/video/vi2959588889?playlistId=tt1375666"]').click();    
});

 Then('I see results containing the movie trailer in redirected page', async () => {
    await expect(browser).toHaveUrlContaining('/video/vi2959588889?playlistId=tt1375666')
}); 


 //Scenario 2
When('I click on the actor', async () => {
    await $('*[href="/name/nm0000138/?ref_=tt_ov_st"]').click(); 
});


Then('I get redirected to actors info page', async () => {
    await expect(browser).toHaveUrlContaining('/name/nm0000138/?ref_=tt_ov_st')
});

// Scenario 3
When('I click on the button All topics', async () => {
    await $('*[class="ipc-responsive-button ipc-btn--theme-baseAlt ipc-responsive-button--transition-xs ipc-btn--on-textPrimary AllTopicsButton__ResponsiveButtonBreakpointsAllExceptM-sc-30dzxw-2 bZocno"]').click();
});

When('I click on Awards', async () => {
    await $('*[data-testid="page-link-awards"]').click();
});

Then('I get redirected to page with list of awards', async () => {
    await expect(browser).toHaveUrlContaining('/title/tt1375666/awards?ref_=tt_ql_sm')
});



