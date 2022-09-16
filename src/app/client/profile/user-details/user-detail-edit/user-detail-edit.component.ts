import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/service/users.service';
import {FormControl} from '@angular/forms';
import * as moment from 'moment';//import moment
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
  stateList:any;
  cityList:any;
  countryNameId :any;
  time:any;
  date:any;
  serializedDate:any;
  constructor(public userService:UsersService) { }

  ngOnInit(): void {
    this.time =new FormControl( moment(this.date).format());
    console.log(this.time);

    // start get user details
    this.userService.getUserDetails().subscribe((data: any) => {
       this.userDetail = this.userDetails(data);
       this.StateNameList(this.userDetail[0].countryId); 
       this.callCityName(this.userDetail[0].stateId)     
      });
    // End get user details

    // Start get Country List
    this.userService.getCountryList().subscribe((country:any)=>{
      this.countryList =country;
    });
    
    //End get country List
    

  }
// get Sate list
StateNameList(getcountryId:any){
  this.userService.getStateList(getcountryId).subscribe((state:any) => {
    // console.log(data);
    this.stateList = state;
  })
}  
//get city lis
callCityName(state:any){
  this.userService.getCityList(state).subscribe((city:any) => {
    console.log(city);
    this.cityList = city;
  })
}  

//convert date
  dateConvertion(date:any){    
    if(date !== ""){
    this.date = date.split('/').join(",");  
     this.time =new FormControl( moment(this.date).format());
      return this.time;    
    } 
}


  gender = ["Male", "Female", "Others"];//user Gender List
// compaine the database data with interface 
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
        dob : this.dateConvertion(userData.bod),
        countryId : Number(userData.countryId),
        stateId : Number(userData.stateId),
        cityId : Number(userData.cityId)
      }
    });
    
  }

  
  

}
