import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UsersService } from 'src/app/service/users.service';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { from, Observable } from 'rxjs';
import { map, startWith} from 'rxjs/operators'
import { LowerCasePipe } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userName:any;
  lists:any; //array user name list
  options:any;
  filteredOptions:any;
  searchUserName:any;
  result:any
  // myControl = new FormControl('');
  @Output('user') filterUser = new EventEmitter<{name:string}>();

  formGroup:any = FormGroup;
  constructor(private service:UsersService, private fb : FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
    this.getNames();

   
  } 
  
  links=[
    {name:'Search Skills',href:'#'},
    {name:'Browse Skills',href:'#'},
    {name:'Skills Members Have',href:'#'},
    {name:'Skills Members want',href:'#'},
    {name:'Post vedio Files',href:'#'},
    {name:'Post Audio Files',href:'#'},
    {name:'Classes',href:'#'}
  ];
  
  // profile icon list
    profile_detail =  [
    {name:'Profile',href:'#'},
    {name:'Message',href:'#'},
    {name:'Logout',href:'#'}
  ];
  


  initForm(){
    this.formGroup = this.fb.group({
      'userNames' : ['']
    });
    this.formGroup.get('userNames').valueChanges.subscribe((response:any)=>{
    this.filterData(response); 
    })

  }

  filterData(enteredData:any){
    this.filteredOptions = this.options.filter((item:any) =>{
      return item.toLowerCase().indexOf(enteredData.toLowerCase()) > -1
    })
  }

onLogout(){
  
}
  //get user user name list

  getNames(){
    this.service.userNamelist().subscribe((list)=>{      
      this.getNamelist(list);      
      this.options = this.userName;

    });
  }
  // convert username array object to array string
  getNamelist(value:any){   
    this.userName =value.map((e:any)=>{
      return e.username;
    });    
  }

  searchUser(user:NgForm){
    let name;
    this.searchUserName = user.value.userNames.toLowerCase();    
    // console.log(this.searchUserName);
    this.filterUser.emit({
      name:this.searchUserName
    });



    // this.service.searchUser = this.searchUserName;
    // this.service.getEnteredUser(this.searchUserName).subscribe((details:any) =>{
    //   console.log(details);
    //   this.result = details; 

    // });
  }


}

function output() {
  throw new Error('Function not implemented.');
}

