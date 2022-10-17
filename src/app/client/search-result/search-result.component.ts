import { Component, Input, OnInit } from '@angular/core';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
data:any;
@Input('user') filterUsers!:{name:string};

  constructor(private service:UsersService) { }

  ngOnInit(): void {
    console.log(this.filterUsers);
    // this.data = this.service.getEnteredUser();
    // console.log(this.data);
  }

}
