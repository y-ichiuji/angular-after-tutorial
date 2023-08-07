import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  template: `<h1>{{ appName }}</h1>`,
  standalone: true,
})
export class TitleComponent {
  @Input() appName = '';
}
