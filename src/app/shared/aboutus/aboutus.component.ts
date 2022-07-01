import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   contents =[{content:"Welcome to Skillbound.com , an online person-to-person skill swapping and skill cross-training portal in your community."},
  {content:"Our mission is to bring together anyone and everyone who enjoys learning new skills and feels they have skills to offer others in their local areas."},
  {content:"  Skillbound.com is also a site to connect with and, make new friends."},
  {content:"  We believe there's a world of untapped skills and talents out there. Why not explore?"}
  ]
}
