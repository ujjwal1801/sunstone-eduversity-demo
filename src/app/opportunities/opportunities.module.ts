import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpportunityCardComponent } from './opportunity-card/opportunity-card.component';
import { OpportunitiesComponent } from './opportunities/opportunities.component';
import { OpportunityService } from './opportunity.service';



@NgModule({
  declarations: [OpportunityCardComponent, OpportunitiesComponent],
  imports: [
    CommonModule
  ],
  exports: [
    OpportunityCardComponent,
    OpportunitiesComponent
  ]
})
export class OpportunitiesModule { }
