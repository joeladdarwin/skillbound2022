import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url ="http://localhost:3000/";
   userId= 768;
  currentSkillCard:any;
  notificationData:any;
  // @Input() categoryId :any;


  constructor(private http:HttpClient) {

  }

  // get skills
   getCurrentUserSkill(){
    return this.http.get(`${this.url}skills/${this.userId}`);
  }

  // get static category list
  getCategory(){
    return this.http.get(`${this.url}category`);
  }

  // get sub category
   getSubCategory(categoryId: any){
    return this.http.get(`${this.url}subCategory/${categoryId}` );
  }
  //skill data update
  skillDataUpdate(data:any){
    return this.http.put(`${this.url}skillUpdate/`,data);
  }
 
  //skill data delete
  deleteSkill(skillId:any){
    return this.http.delete(`${this.url}delete/${skillId}`)
  }

  // card data pass another component
  getCurrentCardSkill(){
    return this.currentSkillCard
  }
   
  //update notification
  getCurrentUserId(){
    return this.userId
  }

  userSkillAdd(addSkilldata:any){
    return this.http.post(`${this.url}addSkill`,addSkilldata)
  }
  updateNotification(){
    return this.notificationData
  }


  //startwant Skill table data
  
  //get want skill data
  getCurrentUserWantSkill(){
    return this.http.get(`${this.url}wantSkill${this.userId}`)
  }
 
}
