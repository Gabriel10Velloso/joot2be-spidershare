import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit  {
  constructor() {    
  } 

  ngAfterViewInit() {
    //  setTimeout(()=>{
    //   try{
    //     (window['adsbygoogle'] = window['adsbygoogle'] || []).push({
    //       google_ad_client: "ca-pub-8422188742388224",
    //       enable_page_level_ads: true,
    //     });
    //   }catch(e){
    //     console.error("error");
    //   }
    // },2000);
 }     
}