import { Component, Input, OnInit } from '@angular/core';
import { UsersService } from 'src/app/service/users.service';
// import { SuggestionSkillPopupComponent } from 'src/app/client/profile/suggestion-skill-popup/suggestion-skill-popup.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-skill-add',
  templateUrl: './skill-add.component.html',
  styleUrls: ['./skill-add.component.css'],
})
export class SkillAddComponent implements OnInit {
  categoryData: any; //get category list
  selectedCategoryId: any; //selected category Id
  subCategoryData: any; //sub category list
  userId: any; //current user Id
  countryId: any = '';
  constructor(private userService: UsersService, public dialog: MatDialog) {}
  @Input()
  user_Id!: string;
  ngOnInit(): void {
    this.userService.getCategory().subscribe((category: any) => {
      this.categoryData = category;
    });
    this.userId = this.userService.getCurrentUserId();
    // console.log(this.userId);
    this.userService.userDetails().subscribe((userDetails: any) => {
      return userDetails.map((userDetails: any) => {
        // console.log(userDetails.country);
        this.countryId = userDetails.country;
      });
    });
  }

  levels = ['Basic', 'Good', 'Expert'];
  swapList: string[] = [
    'Swap',
    'Swap and train',
    'Partner with',
    'Swap and train',
    'Teach',
    'Tutor',
    'Be employed in',
    'Consoult in',
    'Offer a good orservice',
    'Be hired by someone',
    'Form a group',
    'Perform',
    'Mentor ',
  ];
  selectSubCategory(selectedCategoryId: any) {
    this.selectedCategoryId = selectedCategoryId;
    this.callService(this.selectedCategoryId);
  }
  callService(selectedCategoryId: any) {
    //alert(selectedCategoryId);
    this.userService
      .getSubCategory(selectedCategoryId)
      .subscribe((subCategory: any) => {
        this.subCategoryData = subCategory;
        // alert(this.subCategoryData);
      });
  }
  addStringtoWishes(val: any) {
    return val.map((e: any) => e + ' this skill');
  }

  
}
