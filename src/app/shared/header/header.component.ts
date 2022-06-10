import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  links=[{name:'Search Skills',href:'#'},
  {name:'Browse Skills',href:'#'},
  {name:'Skills Members Have',href:'#'},
  {name:'Skills Members want',href:'#'},
  {name:'Post vedio Files',href:'#'},
  {name:'Post Audio Files',href:'#'},
  {name:'Classes',href:'#'}
]
  profile_detail =[{name:'Profile',href:'#'},
  {name:'Message',href:'#'},
{name:'Logout',href:'#'}]

}

