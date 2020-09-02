import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../application.service';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss']
})
export class ApplicationsComponent implements OnInit {

  public applications: any;
  constructor(public applicationService: ApplicationService) { }

  ngOnInit(): void {
    this.applications = this.applicationService.applications;
  }

}
