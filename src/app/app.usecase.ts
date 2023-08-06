import { Injectable, inject } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';
import { BehaviorSubject } from 'rxjs';

export type State = {
  users: User[];
};

@Injectable()
export class AppUsecase {
  private readonly userService = inject(UserService);

  private readonly store = new BehaviorSubject<State>({
    users: [],
  });

  get state$() {
    return this.store.asObservable();
  }

  initialize() {
    this.userService.getUsers().subscribe((users) => {
      const state = this.store.getValue();
      this.store.next({
        ...state,
        users,
      });
    });
  }
}
