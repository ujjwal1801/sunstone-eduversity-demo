import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  public user: any;
  constructor(public userService: UserService) { }


  ngOnInit(): void {
    this.user = this.userService.userData;
  }

}
