import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  customers = [];
  newCustomerName = '';
  newCustomerBalance = '';

  onAddCustomer() {
    this.customers.push({
      type: 'normal',
      name: this.newCustomerName,
      balance: this.newCustomerBalance
    });
  }

  onAddPriorityCustomer() {
    this.customers.push({
      type: 'priority',
      name: this.newCustomerName,
      content: this.newCustomerBalance
    });
  }
}
