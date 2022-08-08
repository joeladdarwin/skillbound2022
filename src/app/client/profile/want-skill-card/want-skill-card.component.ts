import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/service/user.model';
import { UsersService } from 'src/app/service/users.service';
import { MatDialog } from '@angular/material/dialog';

import { WantSkillEditComponent } from './want-skill-edit/want-skill-edit.component';

@Component({
  selector: 'app-want-skill-card',
  templateUrl: './want-skill-card.component.html',
  styleUrls: ['./want-skill-card.component.css'],
})
export class WantSkillCardComponent implements OnInit {
  wantSkillDetails?: IUser[] | undefined;

  constructor(public userService: UsersService, private dialog: MatDialog) {}

  ngOnInit(): void {
    // get data skill_want table
    this.userService
      .getCurrentUserWantSkill()
      .subscribe((userWantSkills: any) => {
        this.wantSkillDetails = this.userDetails(userWantSkills);
        console.log(this.wantSkillDetails);
      });
  }

  userDetails(userWantSkills: any) {
    return userWantSkills.map((wantSkillDetails: any) => {
      // console.log(wantSkillDetails);
      // wishes skill split the data
      let wishesSplitData = wantSkillDetails.wishesTo.split(',');
      console.log(wishesSplitData);
      let wishesData = wishesSplitData.map(
        (data: any) =>
          data.charAt(0).toUpperCase() + data.slice(1).toLowerCase()
      );
      console.log(wishesData);

      return {
        user_id: wantSkillDetails.user_id,
        wantSkillId: wantSkillDetails.skillId,
        category: wantSkillDetails.cat_name,
        subCategory: wantSkillDetails.s_cat_name,
        country: wantSkillDetails.country,
        cat_id: wantSkillDetails.cat_id,
        s_cat_id: wantSkillDetails.s_cat_id,
        //wishesTo: wantSkillDetails.wishesTo,
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
    console.log(wishes);

    var wishValue = wishes[wishes.length];

    let wishColorCode = '#f7f ';
    console.log(wishValue);
    switch (wishValue) {
      case 'swap':
        wishColorCode = '  #8ec4f7  ';
        break;

      case 'swap and train':
        wishColorCode = '  #fffd86  ';
        break;
      case 'Form a group':
        wishColorCode = '  #0ffd86  ';
        break;
      case 'consoult in':
        wishColorCode = '  #f11d86  ';
        break;
      case 'offer a good or service ':
        wishColorCode = ' #0d71a4  ';
        break;
      case 'be hired by someone ':
        wishColorCode = ' #0c60db  ';
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
      case 'perform ':
        wishColorCode = ' #2ee1e0  ';
        break;
      case 'mentor ':
        wishColorCode = ' #2a1f40  ';
        break;
    }

    return wishColorCode;
  }
  editSkill(id: any) {
    console.log(id);
    this.userService.currentWantSkillCard = this.wantSkillDetails?.filter(
      (x) => x.wantSkillId == id
    );
    this.dialog.open(WantSkillEditComponent);
  }
}
