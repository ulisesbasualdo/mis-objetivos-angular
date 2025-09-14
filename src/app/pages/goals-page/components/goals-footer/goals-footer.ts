import { Component, inject } from '@angular/core';
import { GoalService } from '../../../../services/goal-service';
import { faChevronLeft, faChevronRight, faPlus, faChevronUp, faChevronDown, faExchangeAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-goals-footer',
  imports: [FontAwesomeModule],
  template: `
    <!-- Footer fijo -->
    <footer class="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-blue-700 shadow-2xl border-t border-blue-500">
      <div class="container mx-auto px-4 py-4">
        <!-- Navegación, botón añadir y estadísticas centrados -->
        <div class="flex justify-center items-center gap-6 mb-3">
          <!-- Navegación -->
          <div class="flex items-center">
            <button class="p-2 rounded-full bg-blue-500 hover:bg-blue-400 text-white transition-all duration-200 mx-2 shadow-lg">
              <fa-icon [icon]="faChevronLeft" class="text-sm"></fa-icon>
            </button>

            <div class="mx-4 px-6 py-2 bg-white rounded-full shadow-lg">
              <span class="text-blue-700 font-semibold text-sm">Septiembre</span>
            </div>

            <button class="p-2 rounded-full bg-blue-500 hover:bg-blue-400 text-white transition-all duration-200 mx-2 shadow-lg">
              <fa-icon [icon]="faChevronRight" class="text-sm"></fa-icon>
            </button>
          </div>

          <!-- Botón añadir -->
          <button class="p-2 rounded-full bg-green-500 hover:bg-green-400 text-white transition-all duration-200 shadow-lg">
            <fa-icon [icon]="faPlus" class="text-sm"></fa-icon>
          </button>

          <!-- Estadísticas -->
          <div class="flex items-center">
            <div class="backdrop-blur-sm rounded-lg p-3 min-w-[200px] transition-all duration-300 ease-in-out"
                 [class]="showingBest ? 'bg-green-500/20' : 'bg-red-400/20'">
              <div class="flex items-center justify-between">
                <button
                  (click)="toggleGoalDisplay()"
                  class="p-2 rounded bg-white/20 hover:bg-white/30 text-white transition-all duration-200 mr-3"
                >
                  <fa-icon [icon]="faExchangeAlt" class="text-sm"></fa-icon>
                </button>

                <div class="flex-1">
                  <div class="text-xs text-blue-200 uppercase tracking-wide mb-1">
                    {{ showingBest ? 'Mejor' : 'Peor' }}
                  </div>
                  <div class="text-sm font-semibold text-white truncate">
                    {{ currentDisplayGoal?.goalDesc || 'N/A' }}
                  </div>
                  @if (currentDisplayGoal) {
                    <div class="text-xs text-blue-200 mt-1">
                      {{ currentDisplayGoal.numberReached }}/{{ currentDisplayGoal.numberGoal }}
                      ({{ getProgressPercentage(currentDisplayGoal) }}%)
                    </div>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: ``
})
export class GoalsFooter {

  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
  faPlus = faPlus;
  faChevronUp = faChevronUp;
  faChevronDown = faChevronDown;
  faExchangeAlt = faExchangeAlt;
  showingBest = true;
  goalService = inject(GoalService);

  get bestActualGoal() {
    if (!this.goalService.goals.hasValue()) return null;

    const goals = this.goalService.goals.value();
    return goals.reduce((best, current) => {
      const currentProgress = current.numberReached / current.numberGoal;
      const bestProgress = best.numberReached / best.numberGoal;
      return currentProgress > bestProgress ? current : best;
    }, goals[0]);
  }

  get worstActualGoal() {
    if (!this.goalService.goals.hasValue()) return null;

    const goals = this.goalService.goals.value();
    return goals.reduce((worst, current) => {
      const currentProgress = current.numberReached / current.numberGoal;
      const worstProgress = worst.numberReached / worst.numberGoal;
      return currentProgress < worstProgress ? current : worst;
    }, goals[0]);
  }

  get currentDisplayGoal() {
    return this.showingBest ? this.bestActualGoal : this.worstActualGoal;
  }

  toggleGoalDisplay() {
    this.showingBest = !this.showingBest;
  }

  getProgressPercentage(goal: any): number {
    return Math.round((goal.numberReached / goal.numberGoal) * 100);
  }
}
