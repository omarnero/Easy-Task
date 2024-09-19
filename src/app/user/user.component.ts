import {
  Component,
  computed,
  Input,
  signal,
  input,
  Output,
  EventEmitter,
  output,
} from '@angular/core';
import { type User } from './user.model';
import { DUMMY_USERS } from '../dummy-users';
import { CardComponent } from '../shared/card/card.component';
const randomUser = Math.floor(Math.random() * DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }
  onSelectedUser() {
    this.select.emit(this.user.id);
  }
}
// avatar = input.required<string>();
// name = input.required<string>();
// imagePath = computed(() => 'assets/users/' + this.avatar());
// this.selectedUser = DUMMY_USERS[randomUser];
// select = output<string>();
