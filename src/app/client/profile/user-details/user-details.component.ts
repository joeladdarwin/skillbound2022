import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/service/user.model';
import { UsersService } from 'src/app/service/users.service';
import { MatDialog } from '@angular/material/dialog';
import { UserDetailEditComponent } from './user-detail-edit/user-detail-edit.component';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  userDetail ?: IUser[];
  joinedDate:any;
  // date:any;
  constructor(public userService:UsersService, public dialog:MatDialog ) { }

  ngOnInit(): void {
    this.userService.getUserDetails().subscribe((data: any) => {
 
     this.userDetail = this.userDetails(data);
     
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
        city : userData.citiesName,
        state : userData.statesName,
        country : userData.countryName
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
  userDetailsEdit(){
    this.dialog.open(UserDetailEditComponent);
  }
}
