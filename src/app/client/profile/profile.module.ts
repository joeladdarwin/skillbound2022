import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { SkillCardComponent } from './skill-card/skill-card.component';
import {SkillEditComponent} from './skill-card/skill-edit/skill-edit.component';
import { SkillAddComponent } from './skill-card/skill-add/skill-add.component';
import { WantSkillCardComponent } from './want-skill-card/want-skill-card.component'
// import { TriangleAnimateComponent } from './skillCard/triangle-animate/triangle-animate.component';





@NgModule({
  declarations: [
    ProfileComponent,    
    SkillCardComponent,
    SkillEditComponent,
    SkillAddComponent,
    WantSkillCardComponent
    // TriangleAnimateComponent
    
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    MatExpansionModule,
    MatIconModule,
    MatProgressBarModule,
    MatGridListModule,
    MatMenuModule,
    MatDialogModule,
    MatSelectModule,
    
    ReactiveFormsModule,
    FormsModule

  ]
})
export class ProfileModule {

 }
