import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-want-skill-edit',
  templateUrl: './want-skill-edit.component.html',
  styleUrls: ['./want-skill-edit.component.css'],
})
export class WantSkillEditComponent implements OnInit {
  categoryData: any;
  data: any;
  wantSkillId: any;
  categoryId: any;
  subCategoryId: any;
  wishesTo: any;
  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.userService.getCategory().subscribe((category: any) => {
      // console.log(category);
      this.categoryData = category;
    });

    this.data = this.userService.currentSkilldata();
    console.log(this.data);
    this.wantSkillId = this.data[0].wantSkillId;

    this.categoryId = this.data[0].cat_id;
    // console.log(this.categoryId);

    // this.callService(this.categoryId);
    this.subCategoryId = this.data[0].s_cat_id;
    console.log(this.subCategoryId);

    this.wishesTo = this.data[0].wishesTo
      .toString()
      .replace(/this skill/g, '')
      .split(',');

    console.log(this.wishesTo, this.data[0].category, this.data[0].subCategory);
  }
}
