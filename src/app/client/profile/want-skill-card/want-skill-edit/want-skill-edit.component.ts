import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/service/users.service';
import { MatDialog } from '@angular/material/dialog';

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
  selectedCategoryId: any;
  subCategoryData: any;
  matDialogClose: boolean =false;

  constructor(private userService: UsersService, private dialog: MatDialog) {}
  WantEditedData = new FormGroup({
    categoryId: new FormControl('', Validators.required),
    subCategoryId: new FormControl('', Validators.required),
    
    selectWishes: new FormControl([''], Validators.required),
  });

  ngOnInit(): void {
    this.userService.getCategory().subscribe((category: any) => {
      this.categoryData = category;
    });

    this.data = this.userService.currentSkilldata();
    this.wantSkillId = this.data[0].wantSkillId;

    this.categoryId = this.data[0].cat_id;
    // console.log(this.categoryId);

    this.callService(this.categoryId);//call sub category list
    this.subCategoryId = this.data[0].s_cat_id;

    this.wishesTo = this.data[0].wishesTo
      .toString()
      .replace(/this skill/g, '')
      .split(',');

  }
  // wishes list
  swapList: string[] = [
    'Swap',
    'Swap and train',
    'Employ',
    'Hire to consult',
    'Form a group',
    'Partner with someone',
    'Tutor'
  ];


  // send select category data 
  selectSubCategory(selectedCategoryId:any){
    this.selectedCategoryId = selectedCategoryId;
    this.callService(this.selectedCategoryId);
  }


  callService(selectedCategoryId:any){
    this.userService.getSubCategory(selectedCategoryId)
    .subscribe((subCategory: any) => {
      this.subCategoryData = subCategory;
    });
  }
  addStringtoWishes(val: any) {
    return val.map((e: any) => e + ' this skill');
  }
  wnatEditSkillData(){
    const formValue = this.WantEditedData.value;
    const payload = {
      wantSkillId: this.wantSkillId,
      categoryId: formValue.categoryId,
      subCategoryId: formValue.subCategoryId,
      skillLevel: formValue.skillLevel,
      teachLevel: formValue.teachLevel,
      selectWishes:
        formValue.selectWishes == ['']
          ? ''
          : this.addStringtoWishes(formValue.selectWishes),
    };

    this.userService.wantSkillDataUpdate(payload).subscribe((updateAlert: any) => {
        this.matDialogClose = true;

  
      });


  }

}
