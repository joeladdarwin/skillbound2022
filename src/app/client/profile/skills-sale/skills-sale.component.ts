import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/service/users.service';
import { AddSaleSkillsComponent } from './add-sale-skills/add-sale-skills.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-skills-sale',
  templateUrl: './skills-sale.component.html',
  styleUrls: ['./skills-sale.component.css'],
})
export class SkillsSaleComponent implements OnInit {
  userId: any;
  skillSaleDetails: any;

  constructor(public usersService: UsersService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.getSaleData();
  }

  getSaleData() {
    this.usersService.getSkillSaleData().subscribe((skillsSaleData: any) => {
      this.userId = skillsSaleData[0].user_id;
      this.skillSaleDetails = this.UserDetails(skillsSaleData);
    });
  }

  UserDetails(skillsSaleData: any) {
    return skillsSaleData.map((data: any) => {
      return {
        className: data.classname,
        conductedby: data.conductedby,
        saleSkills: data.skills,
      };
    });
  }

  addSkill() {
    let dialogRef = this.dialog.open(AddSaleSkillsComponent);
    dialogRef.afterClosed().subscribe((data) => {
      let formValue = data[0].value;
      let fileUrl = data[1];
      let payload = {
        userId: this.userId,
        className: formValue.className,
        skillName: formValue.saleSkillName.cat_name,
        currency: formValue.currencyType,
        payment: formValue.payment,
        videoFile: fileUrl ? fileUrl : '',
        serviceOffer: formValue.offerService,
      };

      this.usersService.saleSkillData(payload).subscribe((data: any) => {
        this.getSaleData();
      });
    });
  }
}
