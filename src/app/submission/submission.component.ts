import { Component, OnInit, EventEmitter, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-submission',
  templateUrl: './submission.component.html',
  styleUrls: ['./submission.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SubmissionComponent implements OnInit {
  @Output() normalCustomerCreated = new EventEmitter<{name: string, balance: number}>();
  @Output() priorityCustomerCreated = new EventEmitter<{name: string, balance: number}>();


  newCustomerName = '';
  newCustomerBalance = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onAddCustomer() {
    this.normalCustomerCreated.emit(
      {
        name: this.newCustomerName,
        balance: this.newCustomerBalance
      }
    );
  }

  onAddPriorityCustomer() {
    this.priorityCustomerCreated.emit(
      {
        name: this.newCustomerName,
        balance: this.newCustomerBalance
      }
    );
  }

}
