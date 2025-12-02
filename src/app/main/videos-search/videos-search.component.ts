import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { YoutubeApiService } from '../../shared/services/youtube-api.service';
import { YoutubePlayerService } from '../../shared/services/youtube-player.service';
import { NotificationService } from '../../shared/services/notification.service';

@Component({
  selector: 'videos-search',
  templateUrl: 'videos-search.component.html',
  styleUrls: ['videos-search.component.css']
})

export class VideosSearchComponent implements OnInit {
  @Output() videosUpdated = new EventEmitter();
  @Input() loadingInProgress;

  private last_search: string;

  public searchForm = this.fb.group({
    query: ['', Validators.required]
  });

  constructor(
    public fb: FormBuilder,
    private youtubeService: YoutubeApiService,
    private youtubePlayer: YoutubePlayerService,
    private notificationService: NotificationService
  ) {
    const items = sessionStorage.getItem('items');
    if (items == null) {
      this.youtubeService.searchVideos('')
        .then(data => {
          sessionStorage.setItem('items', JSON.stringify(data));
          this.videosUpdated.emit(data);
          // console.log(data);
        });
    }
  }

  ngOnInit() {
    const items = sessionStorage.getItem('items');
    // Isso está sendo feito afim de consumir menos serviço da api do google
    // toda vez a página fizer um refresh irá pegar os dados do sessionStorage 
    if (items != null) {
      this.videosUpdated.emit(JSON.parse(items));
    }
  }

  doSearch(event): void {
    if (this.loadingInProgress ||
      (this.searchForm.value.query.trim().length === 0) ||
      (this.last_search && this.last_search === this.searchForm.value.query)) {
      return;
    }

    this.videosUpdated.emit([]);
    this.last_search = this.searchForm.value.query;

    this.youtubeService.searchVideos(this.last_search)
      .then(data => {
        if (data.length < 1) {
          this.notificationService.showNotification('No matches found.');
        }
        this.videosUpdated.emit(data);
      })
  }
}
