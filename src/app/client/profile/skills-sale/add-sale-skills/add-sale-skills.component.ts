import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/service/users.service';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {map, startWith} from 'rxjs/operators';

export interface User {
  cat_name: string;
}


// // import { map, startWith } from 'rxjs/operator'
// export interface SkillList{
//   cat_name:string;
// }

@Component({
  selector: 'app-add-sale-skills',
  templateUrl: './add-sale-skills.component.html',
  styleUrls: ['./add-sale-skills.component.css']
})
export class AddSaleSkillsComponent implements OnInit {
  myControl = new FormControl('');
  options: User[] = [];
  filteredOptions: Observable<User[]> | undefined;
  fileUrl:any;
  fileData:any;
  currency:any;
  serviceOffer:any;
  userId:any;
  categoryData:any;

  // skilllist= Observable<categoryData[]>;
  // myControl = new FormControl();
  //filteredOptions: Observable<SkillList[]> | undefined;

  constructor(private usersService:UsersService) { }
  addSaleDataData = new FormGroup({
    saleSkillName:new FormControl('',[Validators.required]),
    offerService: new FormControl(''),
    payment: new FormControl(''),
    currencyType: new FormControl(''),
    className: new FormControl(''),
    fileUploadCofirmation: new FormControl('')
  })

  ngOnInit() {
    this.usersService.getCategory().subscribe((category: any) => {

      this.categoryData = category;
      this.options = this.categoryData;
      // this.skilldata =this.categoryData.cat_name;
      // console.log(this.skilldata)

      this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => {
          const name = typeof value === 'string' ? value : value?.cat_name;
          return name ? this._filter(name as string) : this.options.slice();
        }),
      );
    });

  

    this.userId = this.usersService.getCurrentUserId();
    // country list
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

    // service offer list
    this.serviceOffer=[
      {values:'In person', name:'In person'},
      {values:'In a group',name:'In a group'},
      {values:'On Skype',name:'On Skype'},
      {values:'On skillbound chat',name:'On skillbound chat'}
    ]
    

  }
  
  
  fileUpload(value:any){
     this.fileData=value;
     console.log(this.fileData);
  }
  skillData(){
    alert();
    console.log(this.myControl);
    console.log(this.addSaleDataData);
    const formValue = this.addSaleDataData.value;
    // let formData = new FormData(); 
    // formData.append("file", this.fileUrl, this.fileUrl.name);
    // console.log(formData);
    const addSaleSkill ={
    userId:this.userId,
    className:formValue.className,
    skillName:this.myControl.value.cat_name ,
    currency:formValue.currencyType,
    payment:formValue.payment,
    videoFile:this.fileUrl,
    serviceOffer:formValue.offerService
  };
  
  console.log(addSaleSkill);
  // console.log(addSaleSkill.videoFile.name);


    this.usersService.saleSkillData(addSaleSkill).subscribe((data:any)=>{

    });
  }

  displayFn(categoryData:any) {

    return categoryData && categoryData.cat_name ? categoryData.cat_name : "";

  }
  private _filter(cat_name: string): User[] {
    const filterValue = cat_name?.toLowerCase();
    return this.options.filter((option:any) => {
      return option.cat_name.toLowerCase().includes(filterValue)
    });

  }
  fileDetails(event:any){
    this.fileUrl =event.target.files[0];
    
    console.log(this.fileUrl);
    console.log(this.fileUrl.name);
  }

  
}
