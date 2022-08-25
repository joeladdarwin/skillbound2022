import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  url = 'http://localhost:3000/';
  userId = 7;
  currentSkillCard: any;
  notificationData: any;
  currentWantSkillCard: any;
  // @Input() categoryId :any;

  constructor(private http: HttpClient) {}
  //login
  // loginRequest(data:any){
  //   return this.http.post(`${this.url}login`, data)
  // }
  // isAuthendication():boolean{
  //   if(sessionStorage.getItem('token')!==null){
  //     return true;
  //   }
  //   return false
  // }
  logout() {
    //this.token = null;
    // this.isAuthenticated = false;
  }

  //get user details
  userDetails() {
    return this.http.get(`${this.url}userDetails/${this.userId}`);
  }
  // get skills
  getCurrentUserSkill() {
    return this.http.get(`${this.url}skills/${this.userId}`);
  }

  // get static category list
  getCategory() {
    return this.http.get(`${this.url}category`);
  }

  // get sub category
  getSubCategory(categoryId: any) {
    return this.http.get(`${this.url}subCategory/${categoryId}`);
  }
  //skill data update
  skillDataUpdate(data: any) {
    return this.http.put(`${this.url}skillUpdate/`, data);
  }

  //skill data delete
  deleteSkill(skillId: any) {
    return this.http.delete(`${this.url}delete/${skillId}`);
  }

  // card data pass another component
  getCurrentCardSkill() {
    return this.currentSkillCard;
  }

  //update notification
  getCurrentUserId() {
    return this.userId;
  }

  userSkillAdd(addSkilldata: any) {
    return this.http.post(`${this.url}addSkill`, addSkilldata);
  }

  //startwant Skill table data

  //get want skill data
  getCurrentUserWantSkill() {
    return this.http.get(`${this.url}wantSkill/${this.userId}`);
  }
  //want skill data sent another component
  currentSkilldata() {
    return this.currentWantSkillCard;
  }
  //want skill update data
  wantSkillDataUpdate(data:any){
    return this.http.put(`${this.url}wantSkillUpdate/`,data);
  }
  //want skill add data
  userWantSkillAdd(addWantSkilldata:any){
    return this.http.post(`${this.url}addWantSkill`, addWantSkilldata);

  }

  //want skill delete data
  deleteWantSkills(wantSkillId:any){
    return this.http.delete(`${this.url}WantSkilldelete/${wantSkillId}`);

  }

  //get skill sale data
  getSkillSaleData(){
    return this.http.get(`${this.url}getSkillSale/${this.userId}`)
  }

  //add skill sale data
  saleSkillData(file:any):Observable<any>{
    const formData = new FormData(); 
    formData.append("file", file, file.name);
    return this.http.post(`${this.url}addSaleSkill/`,formData);
  }
}
