import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WantSkillsComponent } from './want-skills.component';

const routes: Routes = [{ path: '', component: WantSkillsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WantSkillsRoutingModule { }
