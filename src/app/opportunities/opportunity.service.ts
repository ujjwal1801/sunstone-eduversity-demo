import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OpportunityService {
  public opportunity: any = [
    {
      org: 'SBI',
      designation: 'Marketing Analyst',
      dateTime: '2020-09-20T18:30:00.000Z',
      jobType: 'Full Time',
      location: 'Bangalore',
      compensation: '30,000',
      eligibility: 'eligible'
    },
    {
      org: 'Amazon',
      designation: 'Marketing Analyst',
      dateTime: '2020-09-20T18:30:00.000Z',
      jobType: 'Full Time',
      location: 'Bangalore',
      compensation: '30,000',
      eligibility: 'ineligible'
    },
    {
      org: 'SBI',
      designation: 'Marketing Analyst',
      dateTime: '2020-09-20T18:30:00.000Z',
      jobType: 'Full Time',
      location: 'Bangalore',
      compensation: '30,000',
      eligibility: 'eligible'
    },
    {
      org: 'SBI',
      designation: 'Marketing Analyst',
      dateTime: '2020-09-20T18:30:00.000Z',
      jobType: 'Full Time',
      location: 'Bangalore',
      compensation: '30,000',
      eligibility: 'eligible'
    }
  ]

  constructor() { }
}
