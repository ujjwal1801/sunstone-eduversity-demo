import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-layout',
  templateUrl: './content-layout.component.html',
  styleUrls: ['./content-layout.component.scss']
})
export class ContentLayoutComponent implements OnInit {

  public opportunityFilter: any = '';
  public counters: any = [
    {
      title: 'New Opportunities',
      counter: 24,
      color: '#72BC08'
    },
    {
      title: 'Hot Opportunities',
      counter: 24,
      color: '#D35E5E'
    },
    {
      title: 'Hot Opportunities',
      counter: 24,
      color: '#4A90E2'
    },
  ]
  constructor() { }

  ngOnInit(): void {
    this.opportunityFilter = 'new';
  }

  setOpportunityFilter = (filter) => {
    this.opportunityFilter = filter;
    console.log('this.opportunityFilter -------> ', this.opportunityFilter);
  }
}
