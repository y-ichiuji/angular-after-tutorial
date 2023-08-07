/**
 * Karma Ver.
 */
// import { TestBed } from '@angular/core/testing';
// import { TitleComponent } from './title.component';

// describe('TitleComponent', () => {
//   it('should render application title as <h1>', async () => {
//     await TestBed.configureTestingModule({
//       imports: [TitleComponent],
//     }).compileComponents();

//     const fixture = TestBed.createComponent(TitleComponent);
//     const element = fixture.nativeElement as HTMLElement;

//     expect(element.querySelector('h1')?.textContent).toContain(
//       'My Application'
//     );
//   });
// });

/**
 * Angular Testing Library Ver.
 */
import { render, screen } from '@testing-library/angular';
import { TitleComponent } from './title.component';

it('should render application title', async () => {
  await render(TitleComponent, {
    componentProperties: { appName: 'My Application' },
  });

  expect(screen.getByRole('heading').textContent).toContain('My Application');
});

it('should render changed application title', async () => {
  const { rerender } = await render(TitleComponent, {
    componentProperties: { appName: 'My Application' },
  });

  rerender({ componentProperties: { appName: 'My Application v2' } });

  expect(screen.getByRole('heading').textContent).toContain(
    'My Application v2'
  );
});

it('should render application title template', async () => {
  await render(`<app-title [appName]="'My Application'"></app-title>`, {
    imports: [TitleComponent],
  });

  expect(screen.getByRole('heading').textContent).toContain('My Application');
});

it('should render changed application title template', async () => {
  const { rerender } = await render(
    `<app-title [appName]="appName"></app-title>`,
    {
      imports: [TitleComponent],
      componentProperties: { appName: 'My Application' },
    }
  );

  rerender({ componentProperties: { appName: 'My Application v2' } });

  expect(screen.getByRole('heading').textContent).toContain(
    'My Application v2'
  );
});
