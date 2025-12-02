import { Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { PlaylistJOOComponent } from './playlist-joo/playlist-joo.component';
import { DownloadComponent } from './download/download.component';



export const MainRoutes: Routes = [


{ path: 'videos', 	component: MainComponent },
{ path: 'playList', 	component: PlaylistJOOComponent },
{ path: 'download', 	component: DownloadComponent },
];
