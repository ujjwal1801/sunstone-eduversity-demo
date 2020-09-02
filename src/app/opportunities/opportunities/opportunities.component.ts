import { Component, OnInit } from '@angular/core';
import { OpportunityService } from '../opportunity.service';

@Component({
  selector: 'app-opportunities',
  templateUrl: './opportunities.component.html',
  styleUrls: ['./opportunities.component.scss']
})
export class OpportunitiesComponent implements OnInit {

  public opportunities: any;
  constructor(public opportunityService: OpportunityService ) { }

  ngOnInit(): void {
    this.opportunities = this.opportunityService.opportunities;
    console.log('this.opportunities -------> ', this.opportunities);
  }

}
