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
import { SkillDeleteComponent } from './skill-delete/skill-delete.component';
//import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.css'],
})
export class SkillCardComponent implements OnInit {
  @Input() newMusicianEvent: any;
  upadateMsg: any;
  userData?: IUser[]; //inter face assian
  msg: any;
  lazyRender: IUser[] | undefined; //lazy render
  user: any; //get user data from service call
  changeText: boolean; //wishes background  color change
  deleteMsg: any;
  deletNotification: boolean = false;
  userId: any;
  countryId: any;

  constructor(
    public userService: UsersService,
    public dialog: MatDialog //public notification: NotificationsService
  ) {
    this.changeText = false;
  }

  ngOnInit(): void {
    this.getSkills();
  }
  getSkills() {
    // get skill value
    this.userService.getCurrentUserSkill().subscribe((user: any) => {
      this.userData = this.userInterFaceData(user);
      this.userId = user[0].user_id;
      this.countryId = user[0].country;
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

    let wishColorCode = '#ff9f9f';
    switch (wishValue) {
      case 'swap ':
        wishColorCode = '#ff498c';
        break;

      case 'partner with ':
        wishColorCode = '#fcb589';
        break;

      case 'start a group ':
        wishColorCode = '#ffe895';
        break;

      case 'swap and train ':
        wishColorCode = '#ffdb57';
        break;

      case 'tech ':
        wishColorCode = '#ffca0b';
        break;

      case 'tutor ':
        wishColorCode = '#ad8700';
        break;

      case 'be employed in ':
        wishColorCode = '#97a400';
        break;

      case 'consult in ':
        wishColorCode = '#eaff06';
        break;

      case 'offer a good or service ':
        wishColorCode = '#aeff00';
        break;

      case 'swap and train ':
        wishColorCode = '#5d8800';
        break;

      case 'employ ':
        wishColorCode = '#47e512';
        break;

      case 'hire to consult ':
        wishColorCode = '#95fe71';
        break;

      case 'form a group ':
        wishColorCode = '#449a8c';
        break;

      case 'partner with someone ':
        wishColorCode = '#68ffe6';
        break;

      case 'be hired by someone ':
        wishColorCode = '#1bffd9';
        break;

      case 'partner with ':
        wishColorCode = '#2eceff';
        break;

      case 'perform ':
        wishColorCode = '#9de8ff';
        break;

      case 'mentor ':
        wishColorCode = '#8cbefe';
        break;

      case 'swap and be trained in ':
        wishColorCode = '#6f80ff';
        break;

      case 'hire to ':
        wishColorCode = '#b76fff';
        break;

      case 'hire a tutor ':
        wishColorCode = '#F27405';
        break;

      case 'pay some one to perform skill ':
        wishColorCode = '#f66b75';
        break;

      case 'be mentor in ':
        wishColorCode = '#d058e2';
        break;
    }

    return wishColorCode;
  }

  // user have skilldata fetch interface
  userInterFaceData(users: any) {
    return users.map((userData: any) => {
      let splitedData = userData.level3.split(',');
      let wishedsData = splitedData.map(
        (data: any) =>
          data.charAt(0).toUpperCase() + data.slice(1).toLowerCase()
      );

      return {
        user_id: userData.user_id,
        skillId: userData.skillId,
        userName: userData.username,
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
        zip: userData.zip,
        phone: userData.phone,
        cat_id: userData.cat_id,
        s_cat_id: userData.s_cat_id,
        skillWish: false,
      };
    });
  }

  getClass(level: string) {
    return level && level.toLowerCase();
  }

  // edit the skill
  editSkill(selectedId: string) {
    this.userService.currentSkillCard = this.userData?.filter(
      (x) => x.skillId == selectedId
    );
    const dialogRef = this.dialog.open(SkillEditComponent);
    dialogRef.afterClosed().subscribe((editedData) => {
      const formValue = editedData[0].value;
      const skillId = editedData[1];

      const payload = {
        skillId: skillId,
        categoryId: formValue.categoryId,
        subCategoryId: formValue.subCategoryId,
        skillLevel: formValue.skillLevel,
        teachLevel: formValue.teachLevel,
        selectWishes:
          formValue.selectWishes == ['']
            ? ''
            : this.addStringtoWishes(formValue.selectWishes),
      };
      this.userService
        .skillDataUpdate(payload)
        .subscribe((updateAlert: any) => {
          this.getSkills();
        });
    });
  }
  addStringtoWishes(val: any) {
    return val.map((e: any) => e + ' this skill');
  }

  // lazy render call
  renderData() {
    // console.log(this.userData);
    // this.lazyRender = this.userData;
  }

  // delet the skill
  deleteSkill(skills: any) {
    const dialogRef = this.dialog.open(SkillDeleteComponent);
    dialogRef.afterClosed().subscribe((deleteCofirmation) => {
      this.userService
        .deleteSkill(skills.skillId)
        .subscribe((deleteMsg: any) => {
          this.getSkills();
        });
    });
  }

  addSkill() {
    const dialogRef = this.dialog.open(SkillAddComponent);
    dialogRef.afterClosed().subscribe((addData) => {
      const addSkilldata = {
        userId: this.userId,
        countryId: this.countryId,
        categoryId: addData.categoryId,
        subCategoryId: addData.subCategoryId,
        skillLevel: addData.skillLevel,
        teachLevel: addData.teachLevel,
        //wishes:userlogin.wishes,
        wishes:
          addData.wishes == [''] ? '' : this.addStringtoWishes(addData.wishes),
      };
      this.userService
        .userSkillAdd(addSkilldata)
        .subscribe((addSkillnotification: any) => {
          this.getSkills();
        });
    });
  }
}
