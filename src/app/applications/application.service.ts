import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  public applications: any = [
    {
      id: 1,
      org: 'SBI',
      designation: 'Marketing Analyst',
      dateTime: '2020-09-20T18:30:00.000Z',
      questionType: 'MCQ',
      duration: '2 Hrs',
      venue: 'Andheri Nagar, Mumbai',
      status: 'active'
    },
    {
      id: 2,
      org: 'SBI',
      designation: 'Marketing Analyst',
      dateTime: '2020-09-20T18:30:00.000Z',
      questionType: 'MCQ',
      duration: '2 Hrs',
      venue: 'Andheri Nagar, Mumbai',
      status: 'inactive'
    },
    {
      id: 3,
      org: 'SBI',
      designation: 'Marketing Analyst',
      dateTime: '2020-09-20T18:30:00.000Z',
      questionType: 'MCQ',
      duration: '2 Hrs',
      venue: 'Andheri Nagar, Mumbai',
      status: 'inactive'
    }
  ]
  constructor() { }
}
