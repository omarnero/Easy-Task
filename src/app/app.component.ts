import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId!: string;
  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId);
  }
  onSelectUser(id: string) {
    console.log('the user id is ' + id);
    // this.selectedUser = DUMMY_USERS.find((user) => user.id === id);
    // console.log(this.selectedUser);
    this.selectedUserId = id;
  }
}
