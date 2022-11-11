import { Page } from "puppeteer";
import { InsuranceApplication } from "../interfaces";

export const cholaLogin = async (
    data: InsuranceApplication,
    page: Page,
    takeScreenshot: Function
  ) => {
    console.log(`Filling star insurance login details`);
    await page.goto('https://cashless.cholainsurance.com/login');
    //await page.screenshot({'path': 'login.png'})
    await page.waitForSelector("input[formcontrolname='UserName']");
    //console.log(User Name, Password);
    await page.waitForTimeout(5000);
    console.log("------------------------------------------------------------------------------------------")
  await (await page.$('input[formcontrolname="UserName"]')).type("101000000038555");
  page.waitForNavigation(),
  await page.waitForTimeout(2000);
  await (await page.$('input[formcontrolname="PassWord"]')).type("CHOLA@123");
  page.waitForNavigation(),

  await page.waitForTimeout(1000);
  await takeScreenshot();
  //await Promise.all([page.click('button[type="LOGIN"]')]);
  /*await page.evaluate(() => {
    document.querySelector('input[class=btn login-btn]').click();
  });*/
    const output = (await page.$x("//button[contains(., 'LOGIN')]"));
    if (output.length> 0) {
      await output[0].click();
      page.waitForNavigation();
      await page.waitForTimeout(3000);

    }
    const output1 = (await page.$x("//div[contains(., 'Pre-auth Submitted & Drafted Pre-auth')]"));
    if (output1.length> 0) {
      await output1[3].click();
      page.waitForNavigation();
      await page.waitForTimeout(3000);

    }
    const divContext: any =await page.$eval('.mat-paginator-range-label', e => e.innerHTML);
      console.log("------divContext----", divContext);
      if(divContext.trim() !== "0 of 0"){
        const element=await page.$x("//a[contains(., 'A5900694A')]");
        if (element.length> 0) {
          await element[0].click();
        }
          else{

          }
    //const row = (await page.$x("//a[contains(., 'A6452468B')]"))[0];
    /*if (output2.length> 0) {
      await output2[0].click();
      page.waitForNavigation();
      await page.waitForTimeout(3000);

    }*/
    page.waitForNavigation();
      await page.waitForTimeout(3000);
    const num = (await page.$x("//div[contains(., 'Query Raised')]"))[3].click();
    page.waitForNavigation();
      await page.waitForTimeout(3000);
      const divContext: any =await page.$eval('.mat-paginator-range-label', e => e.innerHTML);
      console.log("------divContext----", divContext);
      if(divContext.trim() !== "0 of 0"){
        const element=await page.$x("//a[contains(., 'A5900694A')]");
        if (element.length> 0) {
          await element[0].click();
        }
          else{

          }
        // sesrch
      }

      const output3 = (await page.$x("//div[contains(., 'Pre-auth Approvals and Denials')]"))[5].click();
      page.waitForNavigation();
      await page.waitForTimeout(3000);
      const divContext1: any =await page.$eval('.mat-paginator-range-label', e => e.innerHTML);
      console.log("------divContext----", divContext1);
      if(divContext1.trim() !== "0 of 0"){
        // sesrch
      }
      
      /*const tbl=await page.$$('.mat-table');
      const value=await page.$$('.ng-star-inserted');
      for (let i=0;i<tbl.length;i++)
      {
        let tblhandle=tbl[i];
        //const valuehandle=value[i];
        if(value===tblhandle[i])
        {
  //  let tbl: any;
        console.log("element found",tbl[i].click());
        page.waitForNavigation();
        await page.waitForTimeout(3000);

        //return value;
          //tblhandle=(await tblhandle.$eval('tbl',Element=>Element.textContent)).trim();
        }
        else 
        {
          console.log('element not found for this element');
        }
      }*/
      const output4 = (await page.$x("//div[contains(., 'Enhancements Submitted')]"));
    if (output4.length> 0) {
      await output4[5].click();
      page.waitForNavigation();
      await page.waitForTimeout(3000);
      const divContext: any =await page.$eval('.mat-paginator-range-label', e => e.innerHTML);
      console.log("------divContext----", divContext)
      if(divContext.trim() !== "0 of 0"){
        const element=await page.$x("//a[contains(., 'A5900694A')]");
        if (element.length> 0) {
          await element[0].click();
          await Promise.all ([
            page.click('.mat-paginator-navigation-previous mat-focus-indicator mat-tooltip-trigger mat-icon-button mat-button-base mat-button-disabled'),
            page.waitForNavigation(),
          ]);

          
        }
            /*const element1=await page.$x("//a[contains(., 'A5900694A')]");
        if (element1.length> 0) {
          await element[0].click();
        ]);*/
        
        //page.waitForNavigation();
      //await page.waitForTimeout(3000);

        
          else{


          }
        // sesrch
    }
    
    const output5 = (await page.$x("//div[contains(., 'Claims Submitted for Payment')]"));
    console.log("-----output5------", output5)
    if (output5.length> 0) {
      
      await output5[5].click();
      await page.waitForTimeout(3000);
      const divContext1: any =await page.$eval('.mat-paginator-range-label', e => e.innerHTML);
      console.log("------divContext----", divContext1);
      if(divContext1.trim() !== "0 of 0"){
        const element=await page.$x("//a[contains(., 'A5900694A')]");
        if (element.length> 0) {
          await element[0].click();
          //page.waitForNavigation();
          /*await page.waitForTimeout(3000);
         const btn=await page.$x("//a[contains(., '>')]");
         
          if (btn.length> 0) {
            await btn[0].click();
            await page.waitForTimeout(3000);
         }*/
         /*const [link] = await page.$x(`/html/body/app-root/body/div/div/app-dashboard/div[2]/app-dashboard-grid/div/mat-paginator/div/div/div[2]/button[2]/span[1]/svg')]`);
        await link.click();*/
        //await page.click(".mat-paginator-navigation-next mat-focus-indicator mat-tooltip-trigger mat-icon-button mat-button-base mat-button-disabled");
        //await page.click('[span(class="mat-button-wrapper"]');
        //await page.click
        //await page.waitForTimeout(3000);
        // await Promise.all([
        //   await page.waitForSelector(".mat-paginator-navigation-next"),
        //   await page.click('button[class=".mat-paginator-navigation-next"]'),
        //    ]);
        console.log("------icons-----123-----");
        const icons=await page.$eval(".mat-button-wrapper", (e) => e);
        console.log("------icons----------", icons);
        await icons[1].click();
        }

        console.log("------icons-----123-----");
        await Promise.all([page.click('button[aria-label="Next page"]')]);

        const element1=await page.$x("//a[contains(., 'A5900694A')]");
        if (element1.length> 0) {
          await element1[0].click();
          await page.waitForNavigation();
           await page.waitForTimeout(3000);
        }

        // console.log("------icons----------", icons.length); // $x("//button[contains(., 'LOGIN')]"));
        // await icons[0].click();
        
          // else{

          // }
          // await page.waitForNavigation();
          // await page.waitForTimeout(3000);

      }
      }

      
      
    /*  const tb5=await page.$$('.example-container mat-elevation-z8');
      //const value=await page.$$('.ng-star-inserted');
      for (let i=0;i<tbl.length;i++)
      {
        let tblhandle=tbl[i];
        //const valuehandle=value[i];
        if(value===tblhandle[i])
        {
  //  let tbl: any;
        console.log("element found",tbl[i].click());
        page.waitForNavigation();
        await page.waitForTimeout(3000);

        //return value;
          //tblhandle=(await tblhandle.$eval('tbl',Element=>Element.textContent)).trim();
        }
        else 
        {
          console.log('element not found for this element');
        }
    }*/
  }
  }
}
