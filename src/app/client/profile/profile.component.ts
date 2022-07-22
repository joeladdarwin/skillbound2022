// import { LowerCasePipe } from '@angular/common';
import { Component, OnInit,Input } from '@angular/core';
import { IUser, ISkills, WishesColor } from 'src/app/service/user.model';
import { UsersService } from 'src/app/service/users.service';

import {MatDialog} from '@angular/material/dialog';
// import { CreateComponent } from 'src/app/profile-detail/create/create.component';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { SkillCardComponent } from './skill-card/skill-card.component';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  
})
export class ProfileComponent  {
   userData?: IUser[];
   skill?:ISkills[];
  user: any;
  expert: any;  
  creator: any;
 @Input() lazyRender= '';

  categoryData: any;  

  constructor(public service: UsersService) 
 { 
    
  }
  ngOnInit(): void {
  // get skill value
    // this.service.getCurrentUserSkill().subscribe((user:any)=>{
    //   console.log(user);    
    //   this.userData =this.userInterFaceData(user);
      // this.getWishColor(wish);
    // });  
  }

  // getWishColor(wish:any) {
  //   for (let data in this.userData ) {
  //     console.log(data);
  //   }
  //   return "#ff0000";
  // }

  // getClass(level:string) {
  //   return level && level.toLowerCase();
  // }
  
  // user data fetch interface
  // userInterFaceData(users: any) {
  //   return users.map((userData: any) => {
  //     console.log(userData);
  //     return {
  //     id: userData.id,
  //     username:userData.username,
  //     category:userData.category,
  //     subCategory: userData.s_cat_name,
  //     emailid:userData.emailid,
  //     name: userData.fname,
  //     gender:userData.Gender,
  //     country:userData.country,
  //     keywords:userData.sk_got_keywords ,
  //     levelSkill: userData.level1.toLowerCase(),
  //     wishesTo:userData.level3,
  //     teachingLevel:userData.level2.toLowerCase(),
  //     fname:userData.fname,
  //     lname:userData.lname,
  //     work:userData.work,
  //     company:userData.Company,
  //     desiredskills:userData.desiredskills,
  //     business:userData.business,
  //     qualifications:userData.qualifications,
  //     school:userData.school,
  //     licenses:userData.licenses,
  //     experiences:userData.experiences,
  //     rates:userData.rates,
  //     bod:userData.bod,
  //     address:userData.address,
  //     borough:userData.borough,
  //     province:userData.province,
  //     village:userData.village,
  //     town:userData.town,
  //     city:userData.city,
  //     state:userData.state,
  //     zip:userData.zip,
  //     phone:userData.phone,
  //     cat_id:userData.id,
  //     s_cat_id:userData.id
  //   }
  //   });
    
  // } 

  // editSkill(){
  //   this.dialog.open(EditComponent);
  // }
  
  // lazy render call


}


function wish(wish: any) {
  throw new Error('Function not implemented.');
}



