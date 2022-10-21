import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/service/users.service';
import { IUser } from 'src/app/service/user.model';
import { UserDetailsComponent } from '../../profile/user-details/user-details.component';
import { UpperCasePipe } from '@angular/common';


@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.css']
})
export class FriendListComponent implements OnInit {
  friendList ?:IUser[];
  imageLink:string | undefined;
  constructor(public userService:UsersService) { }

  ngOnInit(): void {
    this.userFriendlist();
  }
  userFriendlist(){
    this.userService.getFriendlist().subscribe((list)=>{
      console.log(list);
      this.friendList = this.FriendsDetails(list);
      console.log(this.friendList);
    })
  }

  FriendsDetails(list:any){
    return list.map((data:any) =>{
      return{
        friendId: data.id,
        userName : data.username,
        gender : this.findGender(data.gender),
        gendera : data.gender.toUpperCase(),
        work : data.work
      }
    });
  }

  findGender(gender:any){
    if(gender.toUpperCase() === "MALE"){
      return this.imageLink ="../assets/img/male.jpg";

    }else if(gender.toUpperCase() === "FEMALE"){
      return this.imageLink ="../assets/img/female.png";

    }else{
      return this.imageLink = "../assets/img/profiles.png";

    }
  }

  unfriendRequest(id:any){
    this.userService.unfriend(id).subscribe((result)=>{
      console.log(result);
      this.userFriendlist()
    })

  }

  blockRequest(friendId:any){
    
    let blockUser={
      id : friendId,
      blocknumber: 1

    }
    this.userService.blockedUser(blockUser).subscribe((result)=>{
      console.log(result);
      this.userFriendlist();
    })
  }

}
