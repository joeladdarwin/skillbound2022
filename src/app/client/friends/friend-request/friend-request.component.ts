import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/service/user.model';
import { UsersService } from 'src/app/service/users.service';


@Component({
  selector: 'app-friend-request',
  templateUrl: './friend-request.component.html',
  styleUrls: ['./friend-request.component.css']
})
export class FriendRequestComponent implements OnInit {
  friendRequestList ?:IUser[];
  imageLink:any;

  constructor(public userService : UsersService) { }

  ngOnInit(): void {
    this.userService.getFriendRequestList().subscribe((list)=>{
      console.log(list);
      this.friendRequestList = this.FriendsDetails(list);
      console.log(this.friendRequestList);
    })
  }
  FriendsDetails(list:any){
    return list.map((data:any) =>{
      return{
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

}
