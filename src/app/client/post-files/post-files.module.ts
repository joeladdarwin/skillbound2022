import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostFilesRoutingModule } from './post-files-routing.module';
import { PostFilesComponent } from './post-files.component';


@NgModule({
  declarations: [
    PostFilesComponent
  ],
  imports: [
    CommonModule,
    PostFilesRoutingModule
  ]
})
export class PostFilesModule { }
