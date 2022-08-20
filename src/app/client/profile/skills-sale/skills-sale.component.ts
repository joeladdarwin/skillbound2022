import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/service/users.service';
import { AddSaleSkillsComponent } from './add-sale-skills/add-sale-skills.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-skills-sale',
  templateUrl: './skills-sale.component.html',
  styleUrls: ['./skills-sale.component.css']
})
export class SkillsSaleComponent implements OnInit {
 
  skillSaleDetails:any;
  constructor(public usersService:UsersService,private dialog:MatDialog ) { }

  ngOnInit(): void {
    this.usersService.getSkillSaleData().subscribe((skillsSaleData:any)=>{
      this.skillSaleDetails = this.UserDetails(skillsSaleData);
    });
  }
    

  UserDetails(skillsSaleData:any){
    return skillsSaleData.map((data:any)=>{
      return{
        className:data.classname,
        conductedby: data.conductedby, 
        saleSkills: data.skills
      }
    })
  }
  addSkill(){
    this.dialog.open(AddSaleSkillsComponent);
    // alert();


  }


}
