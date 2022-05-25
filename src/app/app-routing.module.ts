import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'clients', loadChildren: () => import('./client/client/client.module').then(m => m.ClientModule) }, 
{ path: 'skills', loadChildren: () => import('./client/skills/skills.module').then(m => m.SkillsModule) }, 
{ path: 'memberskills', loadChildren: () => import('./client/memberskills/memberskills.module').then(m => m.MemberskillsModule) }, 
{ path: 'wantSkills', loadChildren: () => import('./client/want-skills/want-skills.module').then(m => m.WantSkillsModule) }, 
{ path: 'postFiles', loadChildren: () => import('./client/post-files/post-files.module').then(m => m.PostFilesModule) }, 
{ path: 'classes', loadChildren: () => import('./client/classes/classes.module').then(m => m.ClassesModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
