import { Component, Input } from '@angular/core';
import { UsersService } from './service/users.service';
//import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'skillbound';
  customer: any;
  @Input('user') filterUsers!:{name:string};

  constructor(
    public service: UsersService
  ) //public notificationService: NotificationsService
  {
    console.log(this.filterUsers)
    //this.service.getCurrentUserSkill().subscribe((data: any) =>{
    //  console.log(data);
    // })
  }
}
