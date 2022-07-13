import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { IUser, ISkills, WishesColor } from 'src/app/service/user.model';
import { UsersService } from 'src/app/service/users.service';
import {MatDialog} from '@angular/material/dialog';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { EditComponent } from 'src/app/profile-detail/edit/edit.component';


@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.css'],
  // animations:[
  //   // traingle shape animation
  //   trigger('wishAnimation', [
  //     state('start', style({
  //       // 'background-color':'#a4e5fa',
  //       transform: 'translateX(130px) '

  //     })),
  //     state('end', style({
  //     transform: 'translateX(0px) '

  //     }) ),
  //     transition('start <=> end', animate(500))

  //   ]),

    // wish content animation
  //   trigger('wishSkill', [
  //     state('start', style({
  //       transform: 'translateX(100px)' 
  //     })),
  //     state('end', style({
  //       transform: 'translateX(0px) translateY(0px) '

  //     }) ),
  //     transition('start <=> end', animate(500) )
  //   ])
  // ]
})
export class SkillCardComponent implements OnInit {
  userData?: IUser[];
   skill?:ISkills[];
  // state = 'start';
  lazyRender: IUser[] | undefined;
    user: any;
    changeText:boolean;
  // @Input() userData='';



  constructor(public userService: UsersService, public dialog:MatDialog) {
    this.changeText = false;
   }

  ngOnInit(): void {
      // get skill value
     this.userService.getCurrentUserSkill().subscribe((user:any)=>{
      // console.log(user);    
      this.userData =this.userInterFaceData(user);
    });  
  }

  getWishData(wish:any) {
   var wishes = wish.toLowerCase().replace(/ , /g,",").split(",").filter(Boolean);
    var wishValue = wishes[wishes.length-1];
    console.log(wish);
    console.log(wishes);
    console.log(wishValue + typeof(wishValue));

    let wishColorCode ="#f7f ";
    console.log(wishValue);
     switch(wishValue){
      case "swap":
         wishColorCode = "  #8ec4f7  ";
      break;

      case "swap and train":
        wishColorCode = "  #fffd86  "; 
        break;
      
      case "teach ":
        wishColorCode = " #fd71a4  "; 
        break;
      case "tutor ":
        wishColorCode = " #ac60db  "; 
        break;
      case "consult in":
        wishColorCode = " #fb8cff  "; 
        break;
      case "be employed in ":
        wishColorCode = " #255f40  "; 
        break;
     }

     return  wishColorCode ;
  }


  // user data fetch interface
  userInterFaceData(users: any) {
    return users.map((userData: any) => {
      console.log(userData);
      let splitedData =userData.level3.split(',');
      let wishedsData = splitedData.map((data:any)=> data.charAt(0).toUpperCase()+ data.slice(1).toLowerCase());
      console.log(splitedData );
      console.log(wishedsData);
      return {
      id: userData.id,
      username:userData.username,
      category:userData.category,
      subCategory: userData.s_cat_name,
      emailid:userData.emailid,
      name: userData.fname,
      gender:userData.Gender,
      country:userData.country,
      keywords:userData.sk_got_keywords ,
      skillLevel:userData.level1,
      levelSkill: userData.level1.toLowerCase(),
       wishesTo: wishedsData,
      wishesColor: this.getWishData(userData.level3.replace( /this skill/g,"")),
      teachLevel:userData.level2,
      teachingLevel:userData.level2.toLowerCase(),
      fname:userData.fname,
      lname:userData.lname,
      work:userData.work,
      company:userData.Company,
      desiredskills:userData.desiredskills,
      business:userData.business,
      qualifications:userData.qualifications,
      school:userData.school,
      licenses:userData.licenses,
      experiences:userData.experiences,
      rates:userData.rates,
      bod:userData.bod,
      address:userData.address,
      borough:userData.borough,
      province:userData.province,
      village:userData.village,
      town:userData.town,
      city:userData.city,
      // state:userData.state,
      zip:userData.zip,
      phone:userData.phone,
      cat_id:userData.cat_id,
      sub_cat_id:userData.sub_cat_id
    }
    
    })
     

  } 

  // onTriangleAnimation(){
  //    document.getElementsByClassName('wishesPart').style.display = 'block';

  // }
  getClass(level:string) {
    return level && level.toLowerCase();
  }

  // edit the skill
   editSkill(selectedId:string){
  this.userService.currentSkillCard = this.userData?.filter(x =>x.id == selectedId)
    this.dialog.open(EditComponent);

  }  

   // lazy render call
  renderData(){
    // console.log(this.userData);
   this.lazyRender = this.userData;
   
  }


}


