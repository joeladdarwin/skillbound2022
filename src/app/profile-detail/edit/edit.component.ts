import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/service/users.service';
import { MatDialog } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { SkillCardComponent } from 'src/app/client/profile/skill-card/skill-card.component';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
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
  successMsg: any;
  formSuccessMessage: boolean = false;
  // form: FormGroup;
  // userEditData = {
  //   categoryId:'',
  // };
  selectedObject: any;
  showPopover = false;
  editedData = new UntypedFormGroup({
    categoryId: new UntypedFormControl(''),
    subCategoryId: new UntypedFormControl(''),
    skillLevel: new UntypedFormControl(''),
    teachLevel: new UntypedFormControl(''),
    selectWishes: new UntypedFormControl(['']),
  });

  // userService: any;
  constructor(public userService: UsersService) {}
  //myCompOneObj = new SkillCardComponent();
  ngOnInit(): void {
    this.userService.getCategory().subscribe((category: any) => {
      // console.log(category);
      this.categoryData = category;
    });

    this.data = this.userService.getCurrentCardSkill(); //get data from service call
    this.skillId = this.data[0].skillId;

    this.categoryId = this.data[0].cat_id;
    // console.log(this.categoryId);

    this.callService(this.categoryId);
    this.subCategoryId = this.data[0].s_cat_id;
    this.skillLevel = this.data[0].skillLevel;
    this.teachLevel = this.data[0].teachLevel;
    this.wishesTo = this.data[0].wishesTo.toString().replace(/this skill/g, '');

  }

  levels = [{ name: 'Basic' }, { name: 'Good' }, { name: 'Expert' }];
  swapList: string[] = [
    'Swap',
    'Partner with',
    'Swap and train',
    'Teach',
    'Tutor',
    'Be employed in',
    'Consoult in',
    'Offer a good service',
  ];

  selectSubCategory(selectedCategoryId: any) {
    this.selectedCategoryId = selectedCategoryId;
    // alert(selectedCategoryId);

    this.callService(this.selectedCategoryId);
  }

  callService(selectedCategoryId: any) {
    this.userService
      .getSubCategory(selectedCategoryId)
      .subscribe((subCategory: any) => {
        //console.log("asfsfd" + subCategory);
        this.subCategoryData = subCategory;
      });
  }

  addStringtoWishes(val: any) {
    return val.map((e: any) => e + ' this skill');
  }

  editSkillData() {
    const formValue = this.editedData.value;
    const payload = {
      skillId: this.skillId,
      categoryId: formValue.categoryId,
      subCategoryId: formValue.subCategoryId,
      skillLevel: formValue.skillLevel,
      teachLevel: formValue.teachLevel,
      selectWishes:
        formValue.selectWishes == ['']
          ? ''
          : this.addStringtoWishes(formValue.selectWishes),
    };
    this.userService.skillDataUpdate(payload).subscribe((updateAlert: any) => {
      this.ngOnInit();
      //  this.skillCard.
    });
  }
}

//this.userEditData.categoryId = this.editForm.value.categoryId;
// console.log("hi");
//console.log(this.userEditData.categoryId);
//console.log(this.selectedObject);

// this.submitted.emit(this.form.getRawValue());

function category(category: any) {
  throw new Error('Function not implemented.');
}

// function getCurrentCardSkill() {
//   throw new Error('Function not implemented.');
// }
