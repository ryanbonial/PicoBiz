import { CustomersService } from './../customers.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'pb-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css'],
  providers: [CustomersService]
})
export class CustomerDetailComponent implements OnInit {
  customer: any;

  constructor(private customersService: CustomersService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.customer = {};

    this.route.params
      .subscribe(params => {
        if (params['id']) {
          this.customersService.get(params['id'])
            .subscribe(customer => this.customer = customer);
        }
      });
  }
}
