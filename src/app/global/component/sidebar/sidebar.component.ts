import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';
import { Router } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { Role } from '../../models/Role';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  currentUser: User;

  constructor(
      private router: Router,
      private authenticationService: ApiService
  ) {
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  get isAdmin() {
    if(this.currentUser.authorities.length != 0) {
      return this.currentUser && this.currentUser.authorities[0].authority === Role.Admin;
    }
  }

  ngOnInit() {
  }

}
