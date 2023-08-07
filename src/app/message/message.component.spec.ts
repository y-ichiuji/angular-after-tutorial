/**
 * Karma Version
 */
// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { MessageComponent } from './message.component';

// describe('MessageComponent', () => {
//   let component: MessageComponent;
//   let fixture: ComponentFixture<MessageComponent>;
//   let element: HTMLElement;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [MessageComponent],
//     }).compileComponents();
//     fixture = TestBed.createComponent(MessageComponent);
//     component = fixture.componentInstance;
//     element = fixture.nativeElement as HTMLElement;
//     fixture.detectChanges();
//   });

//   it('.message should be "Hello', () => {
//     expect(component.message).toBe('Hello');
//   });

//   it('.message should be "こんにちは" after toggleLanguage()', () => {
//     component.toggleLanguage();
//     expect(component.message).toBe('こんにちは');
//   });

//   it('should render "こんにちは" after toggle language button click', () => {
//     const button = element.querySelector('button') as HTMLButtonElement;

//     button.click();
//     fixture.detectChanges();

//     expect(element.textContent).toContain('こんにちは');
//   });
// });

/**
 * Angular Testing Library Version
 */
import { screen, render, fireEvent } from '@testing-library/angular';
import { MessageComponent } from './message.component';

it('should render "こんにちは" after toggle language button click', async () => {
  await render(MessageComponent);

  fireEvent.click(screen.getByRole('button'));

  expect(screen.getByText('こんにちは')).toBeDefined();
});
