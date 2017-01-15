import { Component, OnInit } from '@angular/core';

import { CustomersService } from './../customers.service';

@Component({
  selector: 'pb-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
  providers: [CustomersService]
})
export class CustomerListComponent implements OnInit {
  customerList: Array<any>;

  constructor(private customersService: CustomersService) { }

  ngOnInit() {
    this.customersService.getAll()
      .subscribe(customers => this.customerList = customers)
  }

}
