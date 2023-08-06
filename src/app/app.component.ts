import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';

import { User } from './user';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './user.service';
import { AppUsecase } from './app.usecase';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, UserListComponent],
  providers: [AppUsecase],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  private readonly usecase = inject(AppUsecase);
  readonly state$ = this.usecase.state$;

  ngOnInit(): void {
    this.usecase.initialize();
  }
}
