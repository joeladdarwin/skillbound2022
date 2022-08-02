import {
  Component,
  Input,
  OnInit,
  ViewEncapsulation,
  EventEmitter,
} from '@angular/core';
import { IUser, ISkills } from 'src/app/service/user.model';
import { UsersService } from 'src/app/service/users.service';
import { MatDialog } from '@angular/material/dialog';
import { SkillEditComponent } from './skill-edit/skill-edit.component';
import { SkillAddComponent } from './skill-add/skill-add.component';
@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.css'],
})
export class SkillCardComponent implements OnInit {
  @Input() newMusicianEvent: any;
  upadateMsg: any;
  userData?: IUser[]; //inter face assian
  //  skill?:ISkills[];
  msg: any;
  lazyRender: IUser[] | undefined; //lazy render
  user: any; //get user data from service call
  changeText: boolean; //wishes background  color change
  skillId: any;
  deleteMsg: any;
  deletNotification: boolean = false;
  // @Input() userData='';

  constructor(public userService: UsersService, public dialog: MatDialog) {
    this.changeText = false;
  }
  //@Output() deleteId: EventEmitter <any>= new EventEmitter()

  ngOnInit(): void {
    // get skill value
    this.userService.getCurrentUserSkill().subscribe((user: any) => {
      console.log(user);
      this.userData = this.userInterFaceData(user);
    });
  }

  // wishes back ground color chage code
  getWishData(wish: any) {
    var wishes = wish
      .toLowerCase()
      .replace(/ , /g, ',')
      .split(',')
      .filter(Boolean);
    var wishValue = wishes[wishes.length - 1];
    console.log(wish);
    console.log(wishes);
    console.log(wishValue + typeof wishValue);

    let wishColorCode = '#f7f ';
    console.log(wishValue);
    switch (wishValue) {
      case 'swap':
        wishColorCode = '  #8ec4f7  ';
        break;

      case 'swap and train':
        wishColorCode = '  #fffd86  ';
        break;

      case 'teach ':
        wishColorCode = ' #fd71a4  ';
        break;
      case 'tutor ':
        wishColorCode = ' #ac60db  ';
        break;
      case 'consult in':
        wishColorCode = ' #fb8cff  ';
        break;
      case 'be employed in ':
        wishColorCode = ' #255f40  ';
        break;
    }

    return wishColorCode;
  }

  // user data fetch interface
  userInterFaceData(users: any) {
    return users.map((userData: any) => {
      console.log(userData);
      let splitedData = userData.level3.split(',');
      let wishedsData = splitedData.map(
        (data: any) =>
          data.charAt(0).toUpperCase() + data.slice(1).toLowerCase()
      );

      return {
        user_id: userData.user_id,
        skillId: userData.skillId,
        username: userData.username,
        category: userData.cat_name,
        subCategory: userData.s_cat_name,
        emailid: userData.emailid,
        name: userData.fname,
        gender: userData.Gender,
        country: userData.country,
        keywords: userData.sk_got_keywords,
        skillLevel: userData.level1,
        levelSkill: userData.level1.toLowerCase(),
        wishesTo: wishedsData,
        wishesColor: this.getWishData(
          userData.level3.replace(/this skill/g, '')
        ),
        teachLevel: userData.level2,
        teachingLevel: userData.level2.toLowerCase(),
        //fname:userData.fname,
        //lname:userData.lname,
        //work:userData.work,
        //company:userData.Company,
        desiredskills: userData.desiredskills,
        business: userData.business,
        qualifications: userData.qualifications,
        school: userData.school,
        licenses: userData.licenses,
        experiences: userData.experiences,
        rates: userData.rates,
        bod: userData.bod,
        address: userData.address,
        borough: userData.borough,
        province: userData.province,
        village: userData.village,
        town: userData.town,
        city: userData.city,
        // state:userData.state,
        zip: userData.zip,
        phone: userData.phone,
        cat_id: userData.cat_id,
        s_cat_id: userData.s_cat_id,
        skillWish: false,
      };
    });
  }

  // onTriangleAnimation(){
  //    document.getElementsByClassName('wishesPart').style.display = 'block';

  // }
  getClass(level: string) {
    return level && level.toLowerCase();
  }

  // edit the skill
  editSkill(selectedId: string) {
    this.userService.currentSkillCard = this.userData?.filter(
      (x) => x.skillId == selectedId
    );
    this.dialog.open(SkillEditComponent);
  }

  // lazy render call
  renderData() {
    // console.log(this.userData);
    // this.lazyRender = this.userData;
  }
  deleteSkill(skills: any) {
    // this.dialog.open(DeleteComponent);
    let confirmation = 'Do you want to delete?';
    if (confirm(confirmation) == true) {
      this.userService
        .deleteSkill(skills.skillId)
        .subscribe((deleteMsg: any) => {
          alert(deleteMsg);
          this.ngOnInit();
          this.deletNotification = true;
          setTimeout(() => {
            this.deletNotification = false;
          }, 3000);
        });
    }
    this.skillId = skills.skillId;
  }

  addSkill() {
    this.dialog.open(SkillAddComponent);
  }

  //console.log(newMusicianEvent: any);
}
