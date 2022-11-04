import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/service/users.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import * as moment from 'moment'; //import moment
@Component({
  selector: 'app-user-detail-edit',
  templateUrl: './user-detail-edit.component.html',
  styleUrls: ['./user-detail-edit.component.css'],
})
export class UserDetailEditComponent implements OnInit {
  hide = true;
  userDetail: any;
  result: any;
  maxDate = new Date();
  dobDate: any;
  countryList: any;
  stateList: any;
  cityList: any;
  countryNameId: any;
  time: any;
  date: any;
  serializedDate: any;

  EditeduserDetail = new FormGroup({
    password: new FormControl('', Validators.required),
    work: new FormControl('', Validators.required),
    companyName: new FormControl('', Validators.required),
    qualifications: new FormControl('', Validators.required),
    schoolName: new FormControl('', Validators.required),
    licenses: new FormControl(''),
    experience: new FormControl(''),
    rates: new FormControl(''),
    countryId: new FormControl('', Validators.required),
    stateId: new FormControl('', Validators.required),
    cityId: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
  });

  constructor(public userService: UsersService) {}

  ngOnInit(): void {
    this.time = new FormControl(moment(this.date).format());
    console.log(this.time);

    // start get user details
    this.userService.getUserDetails().subscribe((data: any) => {
      this.userDetail = this.userDetails(data);
      this.StateNameList(this.userDetail[0].countryId);
      this.callCityName(this.userDetail[0].stateId);
    });
    // End get user details

    // Start get Country List
    this.userService.getCountryList().subscribe((country: any) => {
      this.countryList = country;
    });

    //End get country List
  }

  // get Sate list
  StateNameList(getcountryId: any) {
    this.userService.getStateList(getcountryId).subscribe((state: any) => {
      this.userDetail.stateId = '';
      this.userDetail.cityId = '';
      // console.log(data);
      this.stateList = state;
    });
  }
  //get city lis
  callCityName(state: any) {
    this.userService.getCityList(state).subscribe((city: any) => {
      this.userDetail.cityId = '';
      console.log(city);
      this.cityList = city;
    });
  }

  //convert date
  dateConvertion(date: any) {
    if (date !== '') {
      this.date = date.split('/').join(',');
      this.time = new FormControl(moment(this.date).format());
      return this.time;
    }
  }

  gender = ['Male', 'Female', 'Others']; //user Gender List
  // compaine the database data with interface
  userDetails(details: any) {
    return details.map((userData: any) => {
      return {
        user_id: userData.id,
        userName: userData.userName,
        password: userData.password,
        emailId: userData.emailId,
        jobName: userData.work || '',
        gender: userData.gender || '',
        city: userData.citiesName || '',
        state: userData.statesName || '',
        country: userData.countryName || '',
        work: userData.work || '',
        company: userData.company || '',
        qualifications: userData.qualifications || '',
        school: userData.school || '',
        licenses: userData.licenses || '',
        experiences: userData.experiences || '',
        rates: userData.rates || '',
        dob: this.dateConvertion(userData.bod),
        countryId: Number(userData.countryId),
        stateId: Number(userData.stateId),
        cityId: Number(userData.cityId),
      };
    });
  }
}
