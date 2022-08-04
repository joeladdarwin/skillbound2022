import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UsersService } from 'src/app/service/users.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

//import { SkillCardComponent } from 'src/app/client/profile/skill-card/skill-card.component';
//import { ProfileComponent } from 'src/app/client/profile/profile.component';
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
  title = 'hi';

  [x: string]: any;
  selectWishes = new FormControl('');
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
  editedData = new FormGroup({
    categoryId: new FormControl('', Validators.required),
    subCategoryId: new FormControl('', Validators.required),
    skillLevel: new FormControl('', Validators.required),
    teachLevel: new FormControl('', Validators.required),
    selectWishes: new FormControl([''], Validators.required),
  });

  constructor(public userService: UsersService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.userService.getCategory().subscribe((category: any) => {
      // console.log(category);
      this.categoryData = category;
    });

    this.data = this.userService.getCurrentCardSkill(); //get data from service call
    console.log(this.data);
    this.skillId = this.data[0].skillId;

    this.categoryId = this.data[0].cat_id;
    // console.log(this.categoryId);

    this.callService(this.categoryId);
    this.subCategoryId = this.data[0].s_cat_id;
    console.log(this.subCategoryId);
    this.skillLevel = this.data[0].skillLevel;
    this.teachLevel = this.data[0].teachLevel;
    this.wishesTo = this.data[0].wishesTo
      .toString()
      .replace(/this skill/g, '')
      .split(',');

    console.log(this.wishesTo, this.data[0].category, this.data[0].subCategory);
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

    console.log(this.selectedCategoryId);
    this.callService(this.selectedCategoryId);
  }

  callService(selectedCategoryId: any) {
    this.userService
      .getSubCategory(selectedCategoryId)
      .subscribe((subCategory: any) => {
        //console.log("asfsfd" + subCategory);
        this.subCategoryData = subCategory;
        console.log(this.subCategoryData);
      });
  }

  addStringtoWishes(val: any) {
    return val.map((e: any) => e + ' this skill');
  }

  editSkillData() {
    console.log(this.editedData);

    const formValue = this.editedData.value;
    console.log(formValue.selectWishes);
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
      // this.updateAlert = updateAlert;
      console.log(updateAlert);
      this.matDialogClose = true;
      updateMsgs(updateAlert);

      //this.editMsg.emit('{ updateAlert}');
      // this.profileComponent.updatemsg();
      //this.ngOnInit();
      // this.editPopup = true;
      //updateMsg(updateAlert);
    });

    // this.updateMsg = function (updateAlert: any) {
    //   alert(this.updateMsg);
    //   this.msg.emit(this.updateMsg);
    //this.userService.updateMsgs = updateAlert;
    //};

    console.log(this.editedData.value);
  }
}

function updateMsgs(updateAlert: any) {
  throw new Error('Function not implemented.');
}

function updateAlert(updateAlert: any) {
  throw new Error('Function not implemented.');
}
