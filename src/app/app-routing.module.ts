import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainRoutes } from './main/main.routing';
import { ArticleRoutes } from './article/article.routing';



export const routes: Routes = [
  ...MainRoutes,
  ...ArticleRoutes,

   { path: '**', redirectTo: '/videos', pathMatch: 'full' },
 

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
