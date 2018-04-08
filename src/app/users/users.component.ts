import { Component, OnInit } from '@angular/core';
import {User} from './User';

export const USERS: User[] = [
  {name: 'Brian', surname: 'Cachia', email: 'brian.cachia@wsc.com.mt', active: 'A'},
  {name: 'User', surname: '2', email: 'user.2@wsc.com.mt', active: 'A'},
  {name: 'User', surname: '3', email: 'user.3@wsc.com.mt', active: 'A'},
  {name: 'User', surname: '4', email: 'user.4@wsc.com.mt', active: 'A'},
  {name: 'User', surname: '5', email: 'user.5@wsc.com.mt', active: 'A'}
];

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users = USERS;
  selectedUser: User;

  constructor() { }

  ngOnInit() {

  }

  onSelect(user: User) {
    this.selectedUser = user;
  }
}
