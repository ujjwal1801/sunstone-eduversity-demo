import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public userData: any = {
    fullName: 'Rajat Bhandari',
    sunstoneId: 12323423,
    specialization: 'Marketing',
    campus: 'NIU, Noida',
    ongoingApplications: 10,
    batch: '2019-2022',
    opportunitiesForYou: 78,
    profileImage: '../assets/icons/user-profile-image.png'
   }
}
