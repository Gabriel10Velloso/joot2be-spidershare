import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { YoutubePlayerService } from '../../shared/services/youtube-player.service';
import { PlaylistStoreService } from '../../shared/services/playlist-store.service';
import { PlayListService } from 'src/app/shared/services/playlist.service';
// Gambiarra pra funcinar SweetAlert
// import { SweetAlert } from 'sweetalert/typings/core';
// import * as _swal from 'sweetalert';
// import { PlayListService } from 'src/app/shared/services/playlist.service';
// const swal: SweetAlert = _swal as any;

@Component({
  selector: 'videos-list',
  templateUrl: 'videos-list.component.html',
  styleUrls: ['videos-list.component.css']
})

export class VideosListComponent implements OnInit {
  @Input() videoList;
  @Input() loadingInProgress;
  downloadId;
  @Output() videoPlaylist = new EventEmitter();
  pegandoIdDownload = { idDown: ''};

  candidate="localhost:5000"
  youtube='https://www.youtube.com/watch?v='

  constructor(
    private youtubePlayer: YoutubePlayerService,
    private playlistService: PlaylistStoreService,
    private _playList: PlayListService,
  ) { }

  ngOnInit() {

}

getDownload() {
    this._playList.getDownload().subscribe();
}

getDownload2() {
    this._playList.getDownload2().subscribe();
}

  play(video: any): void {
    this.youtubePlayer.playVideo(video.id, video.snippet.title);
    this.addToPlaylist(video);
    // this.pegandoIdDownload.idDown = video;
  }

  teste(video: any): void {
    setTimeout(() => {
        this.pegandoIdDownload.idDown = video.id;
        console.log(this.pegandoIdDownload.idDown);
      }, 500);
  }

  addToPlaylist(video: any): void {
    this.videoPlaylist.emit(video);
    // console.log(video.id);
  }

  addToPlaylist2(video: any): void {
    this.downloadId = video;
    localStorage.setItem('download',JSON.stringify(video));
  }
}
