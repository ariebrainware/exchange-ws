import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  constructor() { }
  
  settings = {
    columns: {
      source: {
        title: 'Source'
      },
      currency_pair: {
        title: 'Currency Pair'
      },
      price: {
        title: 'Price'
      },
      quantity: {
        title: 'Quantity'
      },
      submission_time:{
        title: 'Submission Time'
      },
      time_limit: {
        title: 'Time Limit'
      }
    }
  }
  ngOnInit() {
  }

}
