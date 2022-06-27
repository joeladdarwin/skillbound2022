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
  categoryId: any;
  data: any;

  constructor(public userService: UsersService ) { }

  ngOnInit(): void {
    this.userService.getCategory().subscribe((category:any)=>{
      // console.log(category);
      this.categoryData = category;
    });

    
    this.data = this.userService.getCurrentCardSkill()
    console.log(this.data);
      
    
    
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
    {name:'be employed in'},
    {name:'consoult in'},
    {name:'Offer a good service'}]

  selectSubCategory(selectedCategoryId: any){
    this.categoryId =selectedCategoryId;
    // alert(selectedCategoryId);

    console.log(this.categoryId);
    this.callService(this.categoryId);

    }

    callService(categoryId: any) {
      this.userService.getSubCategory(categoryId).subscribe((subCategory:any)=>{
            console.log(subCategory);
            this.subCategoryData = subCategory;
            console.log(this.subCategoryData);
          });
    }
  
}


function category(category: any) {
  throw new Error('Function not implemented.');
}

