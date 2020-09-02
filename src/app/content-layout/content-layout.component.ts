import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-layout',
  templateUrl: './content-layout.component.html',
  styleUrls: ['./content-layout.component.scss']
})
export class ContentLayoutComponent implements OnInit {

  public opportunityFilter: any = '';
  constructor() { }

  ngOnInit(): void {
  }

  setOpportunityFilter = (filter) => {
    this.opportunityFilter = filter;
    console.log('this.opportunityFilter -------> ', this.opportunityFilter);
  }
}
