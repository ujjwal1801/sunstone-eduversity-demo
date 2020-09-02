import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationCardComponent } from './application-card/application-card.component';
import { ApplicationsComponent } from './applications/applications.component';



@NgModule({
  declarations: [ApplicationCardComponent, ApplicationsComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ApplicationCardComponent,
    ApplicationsComponent
  ]
})
export class ApplicationsModule { }
