import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  customers = [
    {
      type: 'normal',
      name: 'Normal Customer',
      balance: 10000000.00
    }
    ,
    {
      type: 'priority',
      name: 'Priority Customer',
      balance: 2000000000.00
    }
  ];

  onCustomerAdded(customerData: {name: string, balance: number}){
    this.customers.push(
      {
        type: 'normal',
        name: customerData.name,
        balance: customerData.balance
      }
    );
  }

  onPrirorityCustomerAdded(customerData: {name: string, balance: number}){
    this.customers.push(
      {
        type: 'priority',
        name: customerData.name,
        balance: customerData.balance
      }
    );
  }
}
