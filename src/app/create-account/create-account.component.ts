import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
   account$;
  constructor(private accountService: AccountService) {
    this.account$ = this.accountService.getAll();
   }

  ngOnInit() {
  }

}
