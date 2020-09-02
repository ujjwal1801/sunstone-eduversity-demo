import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OpportunityService {
  public opportunities: any = [
    {
      org: 'SBI',
      designation: 'Marketing Analyst',
      dateTime: '2020-09-20T18:30:00.000Z',
      jobType: 'Full Time',
      location: 'Bangalore',
      compensation: '30,000',
      eligibility: 'eligible',
      status: 'hot'
    },
    {
      org: 'Amazon',
      designation: 'Marketing Analyst',
      dateTime: '2020-09-20T18:30:00.000Z',
      jobType: 'Full Time',
      location: 'Bangalore',
      compensation: '30,000',
      eligibility: 'ineligible',
      status: 'hot'
    },
    {
      org: 'SBI',
      designation: 'Marketing Analyst',
      dateTime: '2020-09-20T18:30:00.000Z',
      jobType: 'Full Time',
      location: 'Bangalore',
      compensation: '30,000',
      eligibility: 'eligible',
      status: 'normal'
    },
    {
      org: 'SBI',
      designation: 'Marketing Analyst',
      dateTime: '2020-09-20T18:30:00.000Z',
      jobType: 'Full Time',
      location: 'Bangalore',
      compensation: '30,000',
      eligibility: 'eligible',
      status: 'normal'
    }
  ]

  constructor() { }
}
