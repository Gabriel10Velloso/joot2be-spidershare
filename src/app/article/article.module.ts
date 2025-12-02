import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';



// component
import { ArticleComponent } from './article.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    HttpModule, 
  ],
  
  declarations: [  ArticleComponent],

  exports: [ArticleComponent ],
          
  providers: [

  ]
})
export class ArticleModule { }
