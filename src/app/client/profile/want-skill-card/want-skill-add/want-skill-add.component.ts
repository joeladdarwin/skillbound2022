import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-want-skill-add',
  templateUrl: './want-skill-add.component.html',
  styleUrls: ['./want-skill-add.component.css'],
})
export class WantSkillAddComponent implements OnInit {
  categoryData: any;
  selectedCategoryId: any;
  subCategoryData: any;
  userId: any;
  countryId: any;
  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.userService.getCategory().subscribe((category: any) => {
      this.categoryData = category;
    });
    this.userId = this.userService.getCurrentUserId(); //get current user id

    //get current user country
    this.userService.userDetails().subscribe((userDetails: any) => {
      return userDetails.map((userDetails: any) => {
        this.countryId = userDetails.country;
      });
    });
  }
  swapList: string[] = [
    'Swap',
    'Swap and be trained in',
    'Employ',
    'Hire to',
    'Hire a tutor',
    'Partner with',
    'form a group',
    'Pay someone to perform',
    'Be Mentored in',
  ];
  selectSubCategory(selectedCategoryId: any) {
    this.selectedCategoryId = selectedCategoryId;
    this.callService(this.selectedCategoryId);
  }
  callService(selectedCategoryId: any) {
    this.userService
      .getSubCategory(selectedCategoryId)
      .subscribe((subCategory: any) => {
        this.subCategoryData = subCategory;
      });
  }
}
