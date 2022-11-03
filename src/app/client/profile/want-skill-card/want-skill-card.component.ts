import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/service/user.model';
import { UsersService } from 'src/app/service/users.service';
import { MatDialog } from '@angular/material/dialog';

import { WantSkillEditComponent } from './want-skill-edit/want-skill-edit.component';
import { WantSkillAddComponent } from './want-skill-add/want-skill-add.component';
import { DeleteWantSkillComponent } from './delete-want-skill/delete-want-skill.component';

@Component({
  selector: 'app-want-skill-card',
  templateUrl: './want-skill-card.component.html',
  styleUrls: ['./want-skill-card.component.css'],
})
export class WantSkillCardComponent implements OnInit {
  wantSkillDetails?: IUser[] | undefined;
  userId: any;
  countryId: any;

  constructor(public userService: UsersService, private dialog: MatDialog) {}

  ngOnInit(): void {
    // get data skill_want table
    this.getWantSkillData();
  }
  // get data skill_want
  getWantSkillData() {
    this.userService
      .getCurrentUserWantSkill()
      .subscribe((userWantSkills: any) => {
        this.wantSkillDetails = this.userDetails(userWantSkills);
        console.log(userWantSkills);
        this.userId = userWantSkills[0].user_id;
        this.countryId = userWantSkills[0].country;
      });
  }

  userDetails(userWantSkills: any) {
    return userWantSkills.map((wantSkillDetails: any) => {
      let wishesSplitData = wantSkillDetails.wishesTo.split(',');
      let wishesData = wishesSplitData.map(
        (data: any) =>
          data.charAt(0).toUpperCase() + data.slice(1).toLowerCase()
      );

      return {
        user_id: wantSkillDetails.user_id,
        wantSkillId: wantSkillDetails.skillId,
        category: wantSkillDetails.cat_name,
        subCategory: wantSkillDetails.s_cat_name,
        country: wantSkillDetails.country,
        cat_id: wantSkillDetails.cat_id,
        s_cat_id: wantSkillDetails.s_cat_id,
        wishesTo: wishesData,
        wishesColor: this.getWishesData(
          wantSkillDetails.wishesTo.replace(/this skill/g, '')
        ), //set whishes slide color
        skillWish: false,
      };
    });
  }

  //set whishes slide color
  getWishesData(wish: any) {
    var wishes = wish.toLowerCase().replace(/ , /g, ',').split(',');

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
  editSkill(id: any) {
    this.userService.currentWantSkillCard = this.wantSkillDetails?.filter(
      (x) => x.wantSkillId == id
    );
    const dialogRef = this.dialog.open(WantSkillEditComponent);
    dialogRef.afterClosed().subscribe((editedData) => {
      let wantSkillId = editedData[1];
      let formValue = editedData[0].value;
      let payload = {
        wantSkillId: wantSkillId,
        categoryId: formValue.categoryId,
        subCategoryId: formValue.subCategoryId,
        selectWishes:
          formValue.selectWishes == ['']
            ? ''
            : this.addStringtoWishes(formValue.selectWishes),
      };
      console.log(payload);
      this.userService
        .wantSkillDataUpdate(payload)
        .subscribe((updateAlert: any) => {
          console.log(updateAlert);
          this.getWantSkillData();
        });
    });
  }

  addStringtoWishes(val: any) {
    return val.map((e: any) => e + ' this skill');
  }
  addWantSkill() {
    let dialogRef = this.dialog.open(WantSkillAddComponent);
    dialogRef.afterClosed().subscribe((addData) => {
      console.log(addData);
      let data = addData;

      const payload = {
        userId: this.userId,
        countryId: this.countryId,
        categoryId: data.categoryId,
        subCategoryId: data.subCategoryId,
        wishes: data.wishes == [''] ? '' : this.addStringtoWishes(data.wishes),
      };
      this.userService
        .userWantSkillAdd(payload)
        .subscribe((addWantSkillnotification: any) => {
          console.log(addWantSkillnotification);
          this.getWantSkillData();
        });
    });
  }

  deleteWantSkill(wantskillId: any) {
    console.log(wantskillId);
    let dialogRef = this.dialog.open(DeleteWantSkillComponent);
    dialogRef.afterClosed().subscribe((deleteStatus) => {
      console.log(deleteStatus);
      this.userService.deleteWantSkills(wantskillId).subscribe((deleteMsg) => {
        console.log(deleteMsg);
        this.getWantSkillData();
      });
    });
  }
}
