import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-want-skill-card',
  templateUrl: './want-skill-card.component.html',
  styleUrls: ['./want-skill-card.component.css']
})
export class WantSkillCardComponent implements OnInit {

  constructor(public userService: UsersService) { }

  ngOnInit(): void {
    this.userService.getCurrentUserWantSkill().subscribe((userWantSkills:any)=>{
      console.log(userWantSkills);
    });
  }

}
