import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/service/users.service';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';

export interface User {
  cat_name: string;
}

@Component({
  selector: 'app-add-sale-skills',
  templateUrl: './add-sale-skills.component.html',
  styleUrls: ['./add-sale-skills.component.css'],
})
export class AddSaleSkillsComponent implements OnInit {
  myControl = new FormControl('');
  options: User[] = [];
  filteredOptions: Observable<User[]> | undefined;
  fileUrl: any = '';
  fileData: any;
  currency: any;
  serviceOffer: any;
  userId: any;
  categoryData: any;
  matDialogClose: boolean = false;

  constructor(private usersService: UsersService) {}

  // file Validation
  addSaleDataData = new FormGroup({
    saleSkillName: new FormControl('', [Validators.required]),
    offerService: new FormControl('', Validators.required),
    payment: new FormControl('', Validators.required),
    currencyType: new FormControl('', Validators.required),
    className: new FormControl('', Validators.required),
    fileUploadCofirmation: new FormControl('', Validators.required),
  });

  ngOnInit() {
    this.usersService.getCategory().subscribe((category: any) => {
      this.categoryData = category;
      this.options = this.categoryData;
      this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map((value) => {
          const name = typeof value === 'string' ? value : value?.cat_name;
          return name ? this._filter(name as string) : this.options.slice();
        })
      );
    });

    this.userId = this.usersService.getCurrentUserId();
    // country list
    this.currency = [
      { values: 'AUD', name: 'Australian Dollar' },
      { values: 'CAD', name: 'Canadian Dollar' },
      { values: 'EUR', name: 'Euro' },
      { values: 'JPY', name: 'Japanese Yen' },
      { values: 'MXN', name: 'Mexican Peso' },
      { values: 'GBP', name: 'Pound Sterling' },
      { values: 'IND', name: 'Rupee' },
      { values: 'CHF', name: 'Swiss Franc' },
      { values: 'USD', name: 'U.S. Dollar' },
    ];

    // service offer list
    this.serviceOffer = [
      { values: 'In person', name: 'In person' },
      { values: 'In a group', name: 'In a group' },
      { values: 'On Skype', name: 'On Skype' },
      { values: 'On skillbound chat', name: 'On skillbound chat' },
    ];
  }

  fileUpload(value: any) {
    this.fileData = value;
    console.log(this.fileData);
  }

  displayFn(categoryData: any) {
    return categoryData && categoryData.cat_name ? categoryData.cat_name : '';
  }
  private _filter(cat_name: string): User[] {
    const filterValue = cat_name?.toLowerCase();
    return this.options.filter((option: any) => {
      return option.cat_name.toLowerCase().includes(filterValue);
    });
  }
  fileDetails(event: any) {
    if (event.target.files[0] && event.target.files) {
      console.log(event.target.files[0]);
      if (
        event.target.files[0].type == 'video/mp4' ||
        event.target.files[0].type == 'video/mov'
      ) {
        console.log('correct');
        this.fileUrl = event.target.files[0];
      } else {
        this.fileUrl = '';
      }
    }
  }
}
