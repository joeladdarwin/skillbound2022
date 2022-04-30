import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WantSkillsRoutingModule } from './want-skills-routing.module';
import { WantSkillsComponent } from './want-skills.component';


@NgModule({
  declarations: [
    WantSkillsComponent
  ],
  imports: [
    CommonModule,
    WantSkillsRoutingModule
  ]
})
export class WantSkillsModule { }
