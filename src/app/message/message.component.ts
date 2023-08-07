import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
})
export class MessageComponent {
  private language: 'en' | 'ja' = 'en';

  get message() {
    return this.language === 'en' ? 'Hello' : 'こんにちは';
  }

  toggleLanguage() {
    this.language = this.language === 'en' ? 'ja' : 'en';
  }
}
