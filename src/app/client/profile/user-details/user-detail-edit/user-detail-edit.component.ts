import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/service/users.service';
import {FormControl} from '@angular/forms';
// import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
// import * as _moment from 'moment';

// import {default as _rollupMoment} from 'moment';

@Component({
  selector: 'app-user-detail-edit',
  templateUrl: './user-detail-edit.component.html',
  styleUrls: ['./user-detail-edit.component.css'],
  
})
export class UserDetailEditComponent implements OnInit {
  hide = true;
  userDetail:any;
  result:any;
  maxDate =new Date();
  dobDate:any;
  countryList:any;
  // const moment = _rollupMoment || _moment;

  constructor(public userService:UsersService) { }

  ngOnInit(): void {
    // start get user details
    this.userService.getUserDetails().subscribe((data: any) => {
      console.log(data);
  
      
       this.userDetail = this.userDetails(data);
       console.log(this.userDetail);
        // this.date = new Date(this.userDetail.joinedDate *1000)
       
      });
    // End get user details

    // Start Country List
    this.userService.getCuntryList().subscribe((country:any)=>{
      console.log(country);
      this.countryList =country;
    })
    //End country List

  }
  dateConvertion(date:any){
    
    if(date !== ""){
    date = date.split('/').join(",");  
    
    
    }
    

}
  gender = ["Male", "Female", "Others"];
  userDetails(details:any){
    return  details.map((userData:any) => {

      return{
        user_id : userData.id,
        userName :userData.userName,
        password:userData.password,
        emailId:userData.emailId,
        jobName:userData.work || "",
        gender : userData.gender ||"",
        city : userData.citiesName ||"",
        state : userData.statesName ||"",
        country : userData.countryName ||"",
        work : userData.work ||"",
        company:userData.company ||"",
        qualifications:userData.qualifications || "",
        school : userData.school || "",
        licenses : userData.licenses || "",
        experiences :userData.experiences ||"",
        rates : userData.rates || "",
        dob: userData.bod,
      }
    });
    
  }
 
  
  
  // serializedDate = new FormControl(new Date().toISOString());

}
