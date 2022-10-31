import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-block-list',
  templateUrl: './block-list.component.html',
  styleUrls: ['./block-list.component.css']
})
export class BlockListComponent implements OnInit {
  blockeduserDetailsList:any;
  imageLink: any;
  constructor(private userService:UsersService) { }

  ngOnInit(): void {
    this.getBlockedList();
  }
  getBlockedList(){
    this.userService.getBlockedList().subscribe((list:any)=>{
      console.log(list);
      this.blockeduserDetailsList = this.blockeduserDetails(list);
      console.log(this.blockeduserDetailsList);
    })
  }

  blockeduserDetails(list:any){
    return list.map((data:any)=>{
      return{
        requestId:data.requestId,
        userName:data.username,
        gender : this.findGender(data.gender),
        work : data.work
      }
    })
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

  unBlockUser(id:any){
    let details ={
      requestId:id,
      block:0
    }
    this.userService.unBlockService(details).subscribe((result)=>{
      this.getBlockedList()
    })

  }

  unfriend(id:any){
    this.userService.unfriend(id).subscribe((result)=>{
      console.log(result);
      this.getBlockedList()
    })
  }



}
