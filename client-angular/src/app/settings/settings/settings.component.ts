import { Component, OnInit } from '@angular/core';

import { CustomersService } from './../../customers/customers.service';
import { SettingsService } from './../settings.service';

@Component({
  selector: 'pb-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
  providers: [SettingsService, CustomersService]
})
export class SettingsComponent implements OnInit {

  constructor(private settingsService: SettingsService, private customersService: CustomersService) { }

  ngOnInit() {
  }

  loadMockCustomers() {
    this.customersService.loadMock()
      .subscribe();
  }

  clearAllCustomers() {
    this.customersService.clearAll()
      .subscribe()
  }

}
