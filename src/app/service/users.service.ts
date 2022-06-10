import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IUser } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
   userId= "394";
 

  constructor(private http:HttpClient) {

  }
   getCurrentUserSkill(){
    //  let  url = "http://localhost:3000/skills/"+(this.userId);
    return this.http.get("http://localhost:3000/skills/"+(this.userId));
  }
}
