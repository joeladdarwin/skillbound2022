import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UsersService } from 'src/app/service/users.service';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-skill-edit',
  templateUrl: './skill-edit.component.html',
  styleUrls: ['./skill-edit.component.css'],
})
export class SkillEditComponent implements OnInit {
  matDialogClose: boolean = false;

  [x: string]: any;
  selectWishes = new UntypedFormControl('');
  categoryData: any;
  subCategoryData: any;
  selectedCategoryId: any;
  selectedCategoryName: any;
  data: any;
  datas: any;
  categoryId: any;
  subCategoryId: any;
  skillLevel: any;
  teachLevel: any;
  wishesTo: any;
  skillId: any;

  // form: FormGroup;
  // userEditData = {
  //   categoryId:'',
  // };
  selectedObject: any;
  showPopover = false;
  editedData = new UntypedFormGroup({
    categoryId: new UntypedFormControl('', Validators.required),
    subCategoryId: new UntypedFormControl('', Validators.required),
    skillLevel: new UntypedFormControl('', Validators.required),
    teachLevel: new UntypedFormControl('', Validators.required),
    selectWishes: new UntypedFormControl([''], Validators.required),
  });

  constructor(public userService: UsersService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.userService.getCategory().subscribe((category: any) => {
      this.categoryData = category;
    });

    this.data = this.userService.getCurrentCardSkill(); //get data from service call
    this.skillId = this.data[0].skillId;

    this.categoryId = this.data[0].cat_id;

    this.callService(this.categoryId);
    this.subCategoryId = this.data[0].s_cat_id;
    this.skillLevel = this.data[0].skillLevel;
    this.teachLevel = this.data[0].teachLevel;
    this.wishesTo = this.data[0].wishesTo
      .toString()
      .replace(/this skill/g, '')
      .split(',');
  }
  levels = [{ name: 'Basic' }, { name: 'Good' }, { name: 'Expert' }];
  swapList: string[] = [
    'Swap',
    'Swap and train',
    'Teach',
    'Tutor',
    'Be employed in',
    'Consoult in',
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
