import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/service/users.service';

declare var angular: any;


@Component({
  selector: 'app-add-sale-skills',
  templateUrl: './add-sale-skills.component.html',
  styleUrls: ['./add-sale-skills.component.css']
})
export class AddSaleSkillsComponent implements OnInit {
  fileData:any;
  currency:any;
  serviceOffer:any;
  userId:any;
  constructor(private usersService:UsersService) { }

  ngOnInit(): void {
    this.userId = this.usersService.getCurrentUserId();
    this.currency=[
      {values:'AUD', name:'Australian Dollar'},
      {values:'CAD', name:'Canadian Dollar'},
      {values:'EUR', name:'Euro'},
      {values:'JPY', name:'Japanese Yen'},
      {values:'MXN', name:'Mexican Peso'},
      {values:'GBP', name:'Pound Sterling'},
      {values:'IND', name:'Rupee'},
      {values:'CHF', name:'Swiss Franc'},
      {values:'USD', name:'U.S. Dollar'}
    ]
    this.serviceOffer=[
      {values:'In person', name:'In person'},
      {values:'In a group',name:'In a group'},
      {values:'On Skype',name:'On Skype'},
      {values:'On skillbound chat',name:'On skillbound chat'}
    ]
  }
  fileUpload(value:any){
    console.log(value);
     this.fileData=value;
  }
  skillData(saleSkillData:any){
    // alert();
    console.log(saleSkillData);
    const addSaleSkill ={
    userId:this.userId,
    className:saleSkillData.className ,
    skillName:saleSkillData.saleSkillName,
    currency:saleSkillData.currencyType,
    payment:saleSkillData.payment,
    videoFile:saleSkillData.videoFile,
    serviceOffer:saleSkillData.offerService
  };
  
  console.log(addSaleSkill);
    this.usersService.saleSkillData(addSaleSkill).subscribe((data:any)=>{

    });
  }
  

}
