import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { CreateComponent } from 'src/app/profile-detail/create/create.component';


@Component({
  selector: 'app-post-files',
  templateUrl: './post-files.component.html',
  styleUrls: ['./post-files.component.css']
})
export class PostFilesComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  openDialog() {
    this.dialog.open(CreateComponent);
  }
  ngOnInit(): void {
  }

}
