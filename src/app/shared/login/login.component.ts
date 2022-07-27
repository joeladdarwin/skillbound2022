import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';

import { UsersService } from 'src/app/service/users.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private userService:UsersService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }
  // onClickSubmit(value:any){
  //   const requestPayload = {
  //     "email": value.form.value.emailId,
  //     "password": value.form.value.password
  //   }
  //   console.log(requestPayload);
  //   this.userService.loginRequest(requestPayload).subscribe((loginUser:any)=>{
  //     if(loginUser.length > 0) {
  //       this.router.navigate(['/dashboard']);
  //     } else {
  //       alert("Invalid Username and Password!!");
  //     }
  //   })
  // }

}
