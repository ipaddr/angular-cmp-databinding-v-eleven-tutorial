import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ViewerComponent implements OnInit {

  @Input('customerViewAlias')
  customerView: {
    type: string, 
    name: string, 
    balance: number
  }

  constructor() { }

  ngOnInit(): void {
  }

}
