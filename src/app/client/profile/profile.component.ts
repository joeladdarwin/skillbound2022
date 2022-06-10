import { LowerCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Gender, IUser, ISkills } from 'src/app/service/user.model';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent  {
   userData?: IUser[];
   skill?:ISkills[];
  user: any;
  expert: any;
  // user: any;
  // userService: any;

  constructor(private service: UsersService) { 
  }
  ngOnInit(): void {
    this.service.getCurrentUserSkill().subscribe((user:any)=>{
      console.log(user);    
      this.expert = "#ff0000";
      this.userData =this.userInterFaceData(user);

    })
  
  }

  getClass(level:string) {
    return level && level.toLowerCase();
  }
  
  userInterFaceData(users: any) {
    return users.map((userData: any) => {
      return {
      id: userData.id,
      username:userData.username,
      category:userData.category,
      subCategory: userData.s_cat_name|| undefined,
      emailid:userData.emailid,
      name: userData.fname,
      gender:userData.Gender,
      country:userData.country,
      keywords:userData.sk_got_keywords || undefined,
      levelSkill: userData.level1.toLowerCase() || undefined,
      wishesTo:userData.level3 || undefined,
      teachingLevel:userData.level2.toLowerCase() || undefined,
      fname:userData.fname,
      lname:userData.lname || undefined,
      work:userData.work || undefined,
      company:userData.Company || undefined,
      desiredskills:userData.desiredskills || undefined,
      business:userData.business || undefined,
      qualifications:userData.qualifications || undefined,
      school:userData.school || undefined,
      licenses:userData.licenses || undefined,
      experiences:userData.experiences || undefined,
      rates:userData.rates || undefined,
      bod:userData.bod,
      address:userData.address || undefined,
      borough:userData.borough || undefined,
      province:userData.province || undefined,
      village:userData.village || undefined,
      town:userData.town || undefined,
      city:userData.city || undefined,
      state:userData.state || undefined,
      zip:userData.zip || undefined,
      phone:userData.phone || undefined,
    }
    });
    // let currentUser: IUser =
    
    // {
    //   id: user.id,
    //   username:user.username,
    //   category:user.category,
    //   subCategory:(user.s_cat_name != "")? user.s_cat_name: undefined,
    //   emailid:user.emailid,
    //   name: user.fname,
    //   gender:user.Gender,
    //   country:user.country,
    //   keywords:(user.sk_got_keywords != "")? user.sk_got_keywords:undefined,
    //   levelSkill: user.level1 || undefined,
    //   skillkeywords:(user.level3 !="")? user.level3:undefined,
    //   teachingLevel:(user.level2 !="")? user.level2:undefined,
    //   fname:user.fname,
    //   lname:(user.lname !="")? user.lname:undefined,
    //   work:(user.work !="")? user.work:undefined,
    //   company:(user.Company !="")? user.company:undefined,
    //   desiredskills:(user.desiredskills != "")? user.desiredskills:undefined,
    //   business:(user.business != "")? user.business:undefined,
    //   qualifications:(user.qualifications != "")? user.qualifications:undefined,
    //   school:(user.school !="")? user.school:undefined,
    //   licenses:(user.licenses !="")? user.licenses:undefined,
    //   experiences:(user.experiences !="")? user.experiences:undefined,
    //   rates:(user.rates !="")? user.rates:undefined,
    //   bod:user.bod,
    //   address:(user.address !="")? user.address:undefined,
    //   borough:(user.borough !="")? user.borough:undefined,
    //   province:(user.province !="")? user.province:undefined,
    //   village:(user.village !="")? user.village:undefined,
    //   town:(user.town !="")? user.town:undefined,
    //   city:(user.city !="")? user.city:undefined,
    //   state:(user.state !="")? user.state:undefined,
    //   zip:(user.zip !="")? user.zip:undefined,
    //   phone:(user.phone !="")? user.phone:undefined,


    // }
    // return {
      
    //   Company: user.emailId,
    //   Qualification: user.emailId,
    //   school: user.emailId,
    //   licenses: user.emailId,
    //   experiences: user.emailId,
    //   rates: user.emailId,
    //   bod: user.emailId,
    //   country: user.emailId,
    //   state: user.emailId,
    //   city: user.emailId,
    //   photolink: user.emailId,
    //   category: user.emailId,
    //   userId: user.emailId
    // }  
  }

  // datalist(){
  // this.service.getData().subscribe(data=>{
  //   console.log(data);
  //  this.user = {  } as IUser;
  //      console.log("hi" + this.user);
  //     // this.user.name=;
  //     this.post =data;
  //   }
  //     )
  // }
  
    
  
  
  

}


