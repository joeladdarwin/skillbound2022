import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './shared/aboutus/aboutus.component';
import { FaqComponent } from './shared/faq/faq.component';
import { LoginComponent } from './shared/login/login.component';
import { LogoutComponent } from './shared/logout/logout.component';
import { TermsComponent } from './shared/terms/terms.component';

const routes: Routes = [
  {
    path: 'clients',
    loadChildren: () =>
      import('./client/client/client.module').then((m) => m.ClientModule),
  },
  {
    path: 'skills',
    loadChildren: () =>
      import('./client/skills/skills.module').then((m) => m.SkillsModule),
  },
  {
    path: 'memberskills',
    loadChildren: () =>
      import('./client/memberskills/memberskills.module').then(
        (m) => m.MemberskillsModule
      ),
  },
  {
    path: 'wantSkills',
    loadChildren: () =>
      import('./client/want-skills/want-skills.module').then(
        (m) => m.WantSkillsModule
      ),
  },
  {
    path: 'postFiles',
    loadChildren: () =>
      import('./client/post-files/post-files.module').then(
        (m) => m.PostFilesModule
      ),
  },
  {
    path: 'classes',
    loadChildren: () =>
      import('./client/classes/classes.module').then((m) => m.ClassesModule),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./client/profile/profile.module').then((m) => m.ProfileModule),
  },
  {
    path: 'friends',
    loadChildren: () =>
      import('./client/friends/friends.module').then((m) => m.FriendsModule),
  },
  {
    path: 'nameSearch',
    loadChildren: () =>
      import('./client/search-result/search-result.module').then(
        (m) => m.SearchResultModule
      ),
  },
  { path: 'terms', component: TermsComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
