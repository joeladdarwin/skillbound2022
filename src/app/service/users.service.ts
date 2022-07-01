import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EditComponent } from 'src/app/profile-detail/edit/edit.component';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
   userId= "3061";
  currentSkillCard:any;
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
   getSubCategory(selectedCategoryName: any){
    return this.http.post("http://localhost:3000/subCategory/",{ category:(selectedCategoryName)}  );
  }
 

  getCurrentCardSkill(){
    return this.currentSkillCard
  }

}
