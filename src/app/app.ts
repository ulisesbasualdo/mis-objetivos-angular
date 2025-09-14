import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GoalsPage } from "./pages/goals-page/goals-page";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, GoalsPage],
  template: `
    <app-goals-page />
    <router-outlet />
  `,
  styles: [],
})
export class App {
  protected readonly title = signal('mis-objetivos');
}
