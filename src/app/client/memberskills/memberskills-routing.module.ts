import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberskillsComponent } from './memberskills.component';

const routes: Routes = [{ path: '', component: MemberskillsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberskillsRoutingModule { }
