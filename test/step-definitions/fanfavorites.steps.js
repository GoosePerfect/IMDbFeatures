
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

    await browser.pause(3000) 
    await $('*[href="/title/tt11126994/?ref_=hm_fanfav_tt_i_1_pd_fp1"]').click(); 
    expect($('*[class="ipc-metadata-list-item__list-content-item ipc-metadata-list-item__list-content-item--link"]')); 
});


//The click takes you to the page Arcane series page
Then(/^I see the movie containing the title "Arcane"$/, async() =>{
     
    expect($('*[href="/title/tt11126994/mediaviewer/rm1229974017/?ref_=tt_ov_i"]'));
    browser.pause(3000)
});



//Scenario 2
//Using the same Given as scenario 1 

//Find the headline "Fan favorites" and click on it
When(/^I click on "Fan favorites"$/, async()=>{
    
    await browser.pause(3000) 
    await $('*[href="/what-to-watch/fan-favorites/?ref_=hm_fanfav_sm"]').click();
    expect($('*[href="/title/tt1160419/?ref_=watch_fanfav_tt_t_3"]'))
     
});

//Expects to get on the Fan favorites page and checks for "Fan favorite" headline
Then(/^I see all movies & series in "Fan favorites"$/, async()=>{

    expect($('*[class="ipc-title ipc-title--page-title ipc-title--baseAlt ipc-title--on-textPrimary"]'));
    browser.pause(3000);
});


//Scenario 3
//Using the same Given as scenario 1 

When(/^I click on "Watch List"$/, async()=>{

    await browser.pause(3000) 
    await $('*[class="ipc-icon ipc-icon--add ipc-button__icon ipc-button__icon--pre"]').click();
    expect($('*[class="list-group-item create-account "]'));
     
})


Then(/^I get redirected to login page$/, async()=>{

    expect(browser).toHaveUrl('https://www.imdb.com/registration/signin?u=%2Ftaskcompletion%2Fredeem%3Ftasktoken%3DeyJ0b2tlbklkZW50aWZpZXIiOiIxNDItMjY1MDUxNC0yNjY5MjIwIiwidG9rZW5JZGVudGlmaWVyVHlwZSI6IlNFU1NJT05fSUQiLCJhY3Rpb25EYXRhIjp7InRhcmdldENvbnN0IjoidHQxMTEyNjk5NCIsInJhdGluZ1ZhbHVlIjpudWxsfSwiYWN0aW9uIjoiYWRkVG9XYXRjaGxpc3QiLCJ0aW1lc3RhbXAiOjE2Mzg3ODc1NTY3MjEsInJldHVyblVSTCI6Ii8ifQ%3D%3D%26ref_%3Dhm_fanfav_wl_btn_1_pd_fp1');
    browser.pause(3000)

})
