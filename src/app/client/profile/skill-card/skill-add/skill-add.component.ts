import { Component, Input,OnInit } from '@angular/core';
import { UsersService } from 'src/app/service/users.service';
import {FormControl,FormGroup} from '@angular/forms';
import { SkillCardComponent } from '../skill-card.component';


@Component({
  selector: 'app-skill-add',
  templateUrl: './skill-add.component.html',
  styleUrls: ['./skill-add.component.css']
})
export class SkillAddComponent implements OnInit {
categoryData:any;   //get category list
selectedCategoryId:any; //selected category Id
subCategoryData:any;  //sub category list
userId:any; //current user Id

  constructor(private userService:UsersService) { }
  @Input()
  user_Id!: string;
  ngOnInit(): void {
    this.userService.getCategory().subscribe((category:any)=>{
     
      this.categoryData = category; 
      console.log(this.categoryData)   ;
    });
    this.userId = this.userService.getCurrentUserId();
     console.log(this.userId);
  }
  
  levels = ['Basic','Good','Expert'];
  swapList : string[] = [
      'Swap',
      'Partner with',       
      'Swap and train',
      'Teach','Tutor', 
      'Be employed in', 
      'Consoult in',
      'Offer a good service'] ;
  selectSubCategory(selectedCategoryId:any){
    this.selectedCategoryId = selectedCategoryId;
    this.callService(this.selectedCategoryId);

  }
  callService(selectedCategoryId:any){
    //alert(selectedCategoryId);
     this.userService.getSubCategory(selectedCategoryId).subscribe((subCategory:any)=>{
            this.subCategoryData = subCategory;
           // alert(this.subCategoryData);
          });
  }
  addStringtoWishes(val: any) {
      return val.map((e: any) => e + ' this skill');
    }
  onClickSubmit(userlogin:any){
    console.log(this.userId);
    console.log(userlogin);
    const addSkilldata = {
      userId:this.userId,
      categoryId:userlogin.categoryId,
      subCategoryId:userlogin.subCategoryId,
      skillLevel:userlogin.skillLevel,
      teachLevel:userlogin.teachLevel,
      //wishes:userlogin.wishes,
      wishes: userlogin.wishes == [''] ? '' : this.addStringtoWishes(userlogin.wishes)
    }
    console.log(addSkilldata);
    this.userService.userSkillAdd(addSkilldata).subscribe((addSkillnotification:any)=>{})
  }

}
