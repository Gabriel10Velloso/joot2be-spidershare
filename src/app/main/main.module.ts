import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScrollingModule,ScrollDispatcher } from '@angular/cdk/scrolling';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { RouterModule } from '@angular/router';



// Serviços
import { YoutubeApiService } from '../shared/services/youtube-api.service';
import { YoutubePlayerService } from '../shared/services/youtube-player.service';
import { NotificationService } from '../shared/services/notification.service';
import { PlaylistStoreService } from '../shared/services/playlist-store.service';
import { BrowserNotificationService } from '../shared/services/browser-notification.service';
import { PlayListService } from '../shared/services/playlist.service';

// component
import { MainComponent } from './main.component';
import { PlaylistJOOComponent } from './playlist-joo/playlist-joo.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { VideosListComponent } from './videos-list/videos-list.component';
import { VideosPlaylistComponent } from './videos-playlist/videos-playlist.component';
import { VideosSearchComponent } from './videos-search/videos-search.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ModalPlaylistComponent } from './modal-playlist/modal-playlist.component';

//Pipe
import { VideoDurationPipe } from '../shared/pipes/video-duration.pipe';
import { VideoLikesViewsPipe } from '../shared/pipes/video-likes-views.pipe';
import { VideoNamePipe } from '../shared/pipes/video-name.pipe';
import { LazyScrollDirective } from '../shared/directives/lazy-scroll/lazy-scroll.directive';
import { UrlPipe } from '../shared/pipes/url.pipe';
import { FilterPlayListPipe } from '../shared/pipes/filterPlaylist.pipe';


import { ArticleModule } from '../article/article.module';
import { DownloadComponent } from './download/download.component';




// Pipes


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    HttpModule, 
    ScrollingModule,
    DragDropModule,
    BrowserAnimationsModule,
    ArticleModule,
  ],
  
  declarations: [ MainComponent, PlaylistJOOComponent, 
                  VideoPlayerComponent, VideosListComponent, VideosPlaylistComponent, 
                  VideosSearchComponent ,
      
                  VideoDurationPipe,FilterPlayListPipe,
                  VideoLikesViewsPipe,VideoNamePipe,LazyScrollDirective, UrlPipe, ModalPlaylistComponent, 
                  DownloadComponent ],

  exports: [ MainComponent, PlaylistJOOComponent,
            VideoPlayerComponent, VideosListComponent, VideosPlaylistComponent, 
            VideosSearchComponent ,ModalPlaylistComponent,DownloadComponent],
          
  providers: [
    ScrollDispatcher,
    YoutubeApiService,
    YoutubePlayerService,
    PlaylistStoreService,
    NotificationService,
    BrowserNotificationService,
    PlayListService,
    
  ]
})
export class MainModule { }
