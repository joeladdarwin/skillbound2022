import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';



import { FriendsRoutingModule } from './friends-routing.module';
import { FriendRequestComponent } from './friend-request/friend-request.component';
import { FriendListComponent } from './friend-list/friend-list.component';
import { FriendsComponent } from './friends.component';



import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { BlockListComponent } from './block-list/block-list.component';


@NgModule({
  declarations: [
    FriendRequestComponent,
    FriendListComponent,
    FriendsComponent,
    BlockListComponent
  ],
  imports: [
    CommonModule,
    FriendsRoutingModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule
  ]
})
export class FriendsModule { }
