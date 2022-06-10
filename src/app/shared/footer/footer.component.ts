import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  links1 =[{name:"Home",href:"#"},
          {name:"Classifieds",href:"#"},
          {name:"FAQ",href:"#"},
          {name:"About Us",href:"#"},
          {name:"Terms & Conditions",href:"#"}
        ]
  links2= [{name:"Privacy Policy",href:"#"},
          {name:"Saftey Guidelines",href:"#"},
          {name:"Contact Us",href:"#"},
          {name:"Press Releases",href:"#"},
          {name:"Press",href:"#"}
          
        ]

}
