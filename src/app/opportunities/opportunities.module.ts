import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpportunityCardComponent } from './opportunity-card/opportunity-card.component';
import { OpportunitiesComponent } from './opportunities/opportunities.component';



@NgModule({
  declarations: [OpportunityCardComponent, OpportunitiesComponent],
  imports: [
    CommonModule
  ]
})
export class OpportunitiesModule { }
