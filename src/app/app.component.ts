import { Component } from '@angular/core';
import { UsersService } from './service/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'skillbound';
  customer : any;
  constructor(public service:UsersService){
     //this.service.getCurrentUserSkill().subscribe((data: any) =>{
    //  console.log(data);
    // })
  }


  
}
