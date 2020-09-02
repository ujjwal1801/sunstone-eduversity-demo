import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { OpportunityService } from '../opportunity.service';

@Component({
  selector: 'app-opportunities',
  templateUrl: './opportunities.component.html',
  styleUrls: ['./opportunities.component.scss']
})
export class OpportunitiesComponent implements OnInit {

  @Input('filter') filter: any;
  public opportunities: any;
  public filteredOpportunities: any;
  constructor(public opportunityService: OpportunityService ) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.fnFilterOpportunities(changes.filter.currentValue)
  }

  ngOnInit(): void {
    this.opportunities = this.opportunityService.opportunities;
    this.filteredOpportunities = this.opportunities
  }

  fnFilterOpportunities = (filter) => {
    if(filter === 'eligible'){
      this.filteredOpportunities = this.opportunities.filter(opp=>opp.eligibility === 'eligible')
    }
    else if (filter === 'hot') {
      this.filteredOpportunities = this.opportunities.filter(opp => opp.status === 'hot')
    }
    else{
      this.filteredOpportunities = this.opportunities;
    }
  }
}
