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
categoryData:any;
selectedCategoryId:any;
subCategoryData:any;

  constructor(private userService:UsersService, public userData:SkillCardComponent) { }
  @Input()
  user_Id!: string;
  ngOnInit(): void {
    this.userService.getCategory().subscribe((category:any)=>{
     
      this.categoryData = category; 
      console.log(this.categoryData)   ;
    });
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
  onClickSubmit(userlogin:any){
    alert(this.user_Id);
  }

}
