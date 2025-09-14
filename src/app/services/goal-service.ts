import { httpResource } from '@angular/common/http';
import { effect, Injectable, signal } from '@angular/core';
import { IGoal } from '../core/interfaces/i-goal';

@Injectable({
  providedIn: 'root',
})
export class GoalService {
  anfitrionState = signal<IGoal>(JSON.parse(localStorage.getItem('goals')!) as IGoal);
  syncStorage = effect(() => {
    localStorage.setItem('goals', JSON.stringify(this.anfitrionState()));
  });

  public goals = httpResource<IGoal[]>(() => `./json/consulta-objetivos.json`);
}
