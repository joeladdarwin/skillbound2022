import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EditComponent } from 'src/app/profile-detail/edit/edit.component';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
   userId= "289";
  currentSkilCard:any;
  // @Input() categoryId :any;


  constructor(private http:HttpClient) {

  }

  // get skills
   getCurrentUserSkill(){
    //  let  url = "http://localhost:3000/skills/"+(this.userId);
    return this.http.get("http://localhost:3000/skills/"+(this.userId));
  }

  // get static category list
  getCategory(){
    return this.http.get("http://localhost:3000/category/");
  }

  // get sub category
   getSubCategory(categoryId: any){
    return this.http.get("http://localhost:3000/subCategory/" + (categoryId));
  }
  getCurrentCardSkill(){
    return this.currentSkilCard
  }

}
