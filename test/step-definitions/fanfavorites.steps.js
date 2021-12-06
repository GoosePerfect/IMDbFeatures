
//Required for cucumber step-definitions to work 
const   {Given, When, Then} = require('@wdio/cucumber-framework');

//Scenario 1
//Start on the IMDb Front Page
Given('I am on the IMDb Front Page', async () => {
    await browser.url("https://www.imdb.com/");
    await $('//*[@id="__next"]/main/div/div[3]/div[3]/section[2]/div/div/div/section/a/div')
});

//Find the title Arcane in Fan Favorites and clicks on it
When(/^I click on "Arcane" in Fan favorites$/, async()=>{
   
    await $('*[href="/title/tt11126994/?ref_=hm_fanfav_tt_i_1_pd_fp1"]').click();    
});

//The click takes you to the page Arcane series page
Then(/^I see the movie containing the title "Arcane"$/, async() =>{
     
    expect($('*[href="/title/tt11126994/mediaviewer/rm1229974017/?ref_=tt_ov_i"]'));
});

//Scenario 2



When(/^I click on "Fan favorites"$/, async()=>{

    await $('*[href=/what-to-watch/fan-favorites/?ref_=hm_fanfav_sm]').click();
})

Then(/^I see all movies & series in "Fan favorites"$/), async()=>{

    expect($('*//*[@id="__next"]/main/div[2]/section/section/hgroup'))
}