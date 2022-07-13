import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/service/users.service';
import {MatDialog} from '@angular/material/dialog';
import {NgForm} from '@angular/forms';
import {FormControl} from '@angular/forms';
import { FormGroup,  } from '@angular/forms';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  selectWishes = new FormControl('');
  categoryData: any;
  subCategoryData: any;
  selectedCategoryId:any;
  selectedCategoryName: any;
  data: any;
  categoryId: any;
  subCategoryId: any;
  skillLevel:any;
  teachLevel:any;
  wishesTo:any;
  // form: FormGroup;
  user: Object = {};


  constructor(public userService: UsersService ) { }

  ngOnInit(): void {
    this.userService.getCategory().subscribe((category:any)=>{
      console.log(category);
      this.categoryData = category;      
    
    }); 
    
    this.data = this.userService.getCurrentCardSkill(); //get data from service call
    console.log(this.data);
    this.categoryId = this.data[0].cat_id;
        console.log(this.categoryId);

    this.callService(this.categoryId);
    this.subCategoryId = this.data[0].sub_cat_id;
    console.log(this.subCategoryId);
    this.skillLevel = this.data[0].skillLevel;
    this.teachLevel =this.data[0].teachLevel;
    this.wishesTo =this.data[0].wishesTo;
    console.log(this.wishesTo, this.data[0].category, this.data[0].subCategory );  
       
  }

    levels = [{name:'Basic'},
    {name:'Good'},
    {name:'Expert'}
    ]

    swapList =[{name:'Swap'},
    {name:'Partner with'},
    {name:'Start a group'},
    {name:'Swap and train'},
    {name:'Teach'},
    {name:'Tutor'},
    {name:'Be employed in'},
    {name:'Consoult in'},
    {name:'Offer a good service'}]

  selectSubCategory(selectedCategoryId: any){
    this.selectedCategoryId = selectedCategoryId;
    // alert(selectedCategoryId);

    console.log(this.selectedCategoryId);
    this.callService(this.selectedCategoryId);

    }

    callService(selectedCategoryId: any) {
      this.userService.getSubCategory(selectedCategoryId).subscribe((subCategory:any)=>{
            //console.log("asfsfd" + subCategory);
            this.subCategoryData = subCategory;
            console.log(this.subCategoryData);
          });
    }
    editSkillData(user: any){
      console.log("hi");
      console.log(user);
        // this.submitted.emit(this.form.getRawValue());

      
    }
  
}


function category(category: any) {
  throw new Error('Function not implemented.');
}

