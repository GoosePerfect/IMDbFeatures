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
When('I click on User reviews', async () => {
    await $('*[href="/title/tt1375666/reviews?ref_=tt_ov_rt"]').click(); 
});

Then('I get redirected to user reviews', async () => {
    await expect(browser).toHaveUrlContaining('/title/tt1375666/reviews?ref_=tt_ov_rt')
});



