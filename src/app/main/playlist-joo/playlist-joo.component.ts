import {
  Component,
  OnInit,
  Input,
  AfterViewInit,
  Renderer2
} from "@angular/core";
import { Router } from "@angular/router";
import { PlayListService } from "src/app/shared/services/playlist.service";
import { Observable } from "rxjs";
import { moveItemInArray } from "@angular/cdk/drag-drop";

import { Sertanejo } from "src/app/shared/model/sertanejo.model";
import { PostGrunge } from "src/app/shared/model/postgrunge.model";
import { Reggae } from "src/app/shared/model/reggae.model";

declare let $: any;
declare var adsbygoogle: any;
@Component({
  selector: "app-playlist-joo",
  templateUrl: "./playlist-joo.component.html",
  styleUrls: ["./playlist-joo.component.css"]
})

export class PlaylistJOOComponent implements OnInit, AfterViewInit {

isLoading = false;
loadingInProgress = false;
private pageLoadingFinished = false;
item;
Items = [];
public valores: string = "";

private sertanejos: Sertanejo[];

public videos: any = [];
public videos2: any = [];
idPlayList;

// preciso declarar se não o ng build --prod quebra.
showDialog1; showDialog2; showDialog3; showDialog4; showDialog5; showDialog6;
showDialog7; showDialog8; showDialog9; showDialog10; showDialog11; showDialog12;
showDialog13; showDialog14; showDialog15;

  constructor(
    private router: Router,
    private renderer: Renderer2,
    private _playList: PlayListService
  ) {}

  ngOnInit() {
    // this.cliente = new Cliente();
    this.buscar2();
    this.buscar();
    //   this.searchMore();
    this.initializeList();
    // https://stackoverflow.com/questions/34489916/how-to-load-external-scripts-dynamically-in-angular
    // https://pt.stackoverflow.com/questions/305978/arquivo-de-script-em-um-component-angular
    // https://stackblitz.com/edit/angular-3drmyp

    // https://stackoverflow.com/questions/38088996/adding-script-tags-in-angular-component-template
  }

  //   addJsToElement(src: string): HTMLScriptElement {
  //     const script = document.createElement('script');
  //     script.type = 'text/javascript';
  //     script.src = src;
  //     this.renderer.appendChild(document.body, script);
  //     return script;
  //   }

  ngAfterViewInit() {}

  play(item: any): void {
    this.idPlayList = item;
  }

  initializeList() {
    this.Items = [];
    for (let index = 0; index < 10000; index++) {
      this.Items.push(index);
    }
  }

  //   buttonClick() {
  //     this.router.navigate(['/videos']);
  //     location.reload();
  // }

  aternativerockList() {
    return this._playList.aternativerockList();
  }

  rockList() {
    return this._playList.rockList();
  }

  funkList() {
    return this._playList.funkList();
  }

  eletronicaList() {
    return this._playList.eletronicaList();
  }

  heavymetalList() {
    return this._playList.heavymetalList();
  }

  nationallList() {
    return this._playList.nationallList();
  }

  pagodeList() {
    return this._playList.pagodeList();
  }

  popList() {
    return this._playList.popList();
  }

  postgrungeList() {
    return this._playList.postgrungeList();
  }

  reggaeList() {
    return this._playList.reggaeList();
  }

  sertanejoList() {
    return this._playList.sertanejoList();
  }

  buscar() {
    this._playList.buscar().subscribe(result => {
      this.videos = result.items;
    });
  }

  buscar2() {
    this._playList.buscar2().subscribe(result => {
      this.videos2 = result.items;
    });
  }
}
