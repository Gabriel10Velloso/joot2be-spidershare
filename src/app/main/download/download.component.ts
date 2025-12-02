import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit {
    title = 'teste';
    convertBtn;
    URLinput;
    baseUrl;
    match;
    public loadingInProgress = false;
    downloadID;
    @ViewChild('formDownload' , { static: true }) formDownload: NgForm;
    constructor() { }

  ngOnInit() {
    
      this.downloadID = JSON.parse(localStorage.getItem('download'));
  }


sendURL(){
//     this.loadingInProgress = true;
//   this.convertBtn = document.querySelector('.convert-button');
//   this.URLinput = document.querySelector('.URL-input');
  
//   this.convertBtn.addEventListener('click', () => {
//       console.log(`URL: ${this.URLinput.value}`);	
//       // sendURL(URLinput.value);
//       window.location.href = `https://downloadyoutube.herokuapp.com/download?URL=${this.URLinput.value}`;
//       // this.http.get(this.baseUrl + this.URLinput.value).subscribe();
//       // this.lala();
//       console.log(window.location.href);
//   });
 
}




}
