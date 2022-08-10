import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-skills-sale',
  templateUrl: './skills-sale.component.html',
  styleUrls: ['./skills-sale.component.css']
})
export class SkillsSaleComponent implements OnInit {
  skillSaleDetails:any;
  constructor(public usersService:UsersService) { }

  ngOnInit(): void {
    this.usersService.getSkillSaleData().subscribe((skillsSaleData:any)=>{
      console.log(skillsSaleData);
      this.skillSaleDetails = this.UserDetails(skillsSaleData);
      console.log(this.skillSaleDetails)
    });
  }
    // titleList=[
    //   {className:'Class Name'},
    //   {conducted: 'Conducted'},
    //   {skills:'Skills'}
      
    // ]

  UserDetails(skillsSaleData:any){
    return skillsSaleData.map((data:any)=>{
      return{
        className:data.classname,
        conductedby: data.conductedby, 
        saleSkills: data.skills
      }
    })
  }


}
