import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostFilesComponent } from './post-files.component';

const routes: Routes = [{ path: '', component: PostFilesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostFilesRoutingModule { }
