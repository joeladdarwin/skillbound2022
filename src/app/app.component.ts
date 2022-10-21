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

  constructor(
    public service: UsersService
  ) //public notificationService: NotificationsService
  {
    //this.service.getCurrentUserSkill().subscribe((data: any) =>{
    //  console.log(data);
    // })
  }
}
