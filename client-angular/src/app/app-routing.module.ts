import { CustomerDetailComponent } from './customers/customer-detail/customer-detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'Customers', pathMatch: 'full' },
  { path: 'Customers', component: CustomerListComponent },
  { path: 'Customers/:id', component: CustomerDetailComponent },
  { path: '**', redirectTo: 'Customers' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class PicoBizRoutingModule { }
