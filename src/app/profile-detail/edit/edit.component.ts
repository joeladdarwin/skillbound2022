import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/service/users.service';
import {MatDialog} from '@angular/material/dialog';
import {NgForm} from '@angular/forms';
import {FormControl} from '@angular/forms';





@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  categoryData: any;
  subCategoryData: any;
  selectedCategoryId:any;
  selectedCategoryName: any;
  data: any;
  categoryName: any;
  subCategoryName: any;
  skillLevel:any;
  teachLevel:any;
  wishesTo:any;

  constructor(public userService: UsersService ) { }

  ngOnInit(): void {
    this.userService.getCategory().subscribe((category:any)=>{
      // console.log(category);
      this.categoryData = category;

      
    
    }); 
    
    this.data = this.userService.getCurrentCardSkill();
    this.categoryName = this.data[0].category;
    this.callService(this.categoryName);
    this.subCategoryName = this.data[0].subCategory;
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

  selectSubCategory(selectedCategoryName: any){
    this.selectedCategoryName =selectedCategoryName;
    // alert(selectedCategoryId);

    console.log(this.selectedCategoryName);
    this.callService(this.selectedCategoryName);

    }

    callService(selectedCategoryName: any) {
      this.userService.getSubCategory(selectedCategoryName).subscribe((subCategory:any)=>{
            console.log("asfsfd" + subCategory);
            this.subCategoryData = subCategory;
            console.log(this.subCategoryData);
          });
    }
    editSkillData(){
      
    }
  
}


function category(category: any) {
  throw new Error('Function not implemented.');
}

