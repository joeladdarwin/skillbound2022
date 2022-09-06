import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/service/user.model';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  userDetail ?: IUser[];
  joinedDate:any;
  // date:any;
  constructor(public userService:UsersService ) { }

  ngOnInit(): void {
    this.userService.getUserDetails().subscribe((data: any) => {
    console.log(data);

    //   this.jonedDate = data.joinedDate;
    //   console.log(this.jonedDate);
    //  this.date = new Date(this.jonedDate *1000);
    //  console.log(this.date);
    //  this.jonedDate = (this.date.getDate()) + "-" + (this.date.getMonth()+1) + "-" + this.date.getFullYear();
    //   console.log(this.jonedDate);
     this.userDetail = this.userDetails(data);
     console.log(this.userDetail);
     console.log(this.userDetail);
      // this.date = new Date(this.userDetail.joinedDate *1000)
     
    });
  }
  dateConvert(date:any){
    const dates = new Date(date*1000);
    this.joinedDate = dates.getDate() + "-" + (dates.getMonth()+1) +"-" + dates.getFullYear();
    return this.joinedDate;
  
  }

  userDetails(details:any){
    return  details.map((userData:any) => {

      return{
        user_id : userData.id,
        joiningDate:this.dateConvert(userData.regtime),
        jobName:userData.work,
        gender : userData.gender,
        city : userData.city,
        state : userData.state,
        country : userData.country
      }
    });

  }
  userDetailsList=[
    {name: 'Joined'},
    {name: 'Job'},
    {name: 'Gender'},
    {name: 'City'},
    {name: 'State'},
    {name: 'Country'}
  ]

}
