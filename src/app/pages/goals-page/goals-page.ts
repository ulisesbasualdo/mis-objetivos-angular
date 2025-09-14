import { Component, inject } from '@angular/core';
import { GoalService } from '../../services/goal-service';
import { GoalsFooter } from './components/goals-footer/goals-footer';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faEyeSlash,
  faEdit,
  faTrash,
  faCoins,
  faExclamationTriangle,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-goals-page',
  imports: [GoalsFooter, FontAwesomeModule],
  template: `
    <div class="container mx-auto p-6 max-w-6xl pb-32">
      <h1 class="text-3xl font-bold text-gray-800 mb-6">Objetivos Septiembre</h1>
      <div class="bg-white rounded-lg shadow-lg overflow-hidden">
        <div class="overflow-x-auto">
          <table class="min-w-full">
            <thead class="bg-gradient-to-r from-blue-500 to-blue-600">
              <tr>
                <th
                  class="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider w-32"
                >
                  Progreso
                </th>
                <th
                  class="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider w-96"
                >
                  Descripción del Objetivo
                </th>
                <th
                  class="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider w-64"
                >
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-100">
              @if (goalService.goals.hasValue()) {
                @for (item of goalService.goals.value(); track $index) {
                  <tr class="hover:bg-gray-50 transition-colors duration-200">
                    <td class="px-6 py-4 whitespace-nowrap text-left w-32">
                      <span
                        class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800"
                      >
                        {{ item.numberReached }} / {{ item.numberGoal }}
                      </span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-left text-sm font-medium text-gray-900 w-96">
                      {{ item.goalDesc }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-left text-sm font-medium w-64">
                      <div class="flex space-x-2">
                        <div class="relative group">
                          <button
                            class="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors duration-200"
                          >
                            <fa-icon [icon]="faEyeSlash"></fa-icon>
                          </button>
                          <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                            Ocultar objetivo
                            <div class="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
                          </div>
                        </div>

                        <div class="relative group">
                          <button
                            class="px-3 py-1 text-xs bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200 transition-colors duration-200"
                          >
                            <fa-icon [icon]="faEdit"></fa-icon>
                          </button>
                          <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                            Editar objetivo
                            <div class="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
                          </div>
                        </div>

                        <div class="relative group">
                          <button
                            class="px-3 py-1 text-xs bg-red-100 text-red-700 rounded-md hover:bg-red-200 transition-colors duration-200"
                          >
                            <fa-icon [icon]="faTrash"></fa-icon>
                          </button>
                          <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                            Eliminar objetivo
                            <div class="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
                          </div>
                        </div>

                        <div class="relative group">
                          <button
                            class="px-3 py-1 text-xs bg-yellow-100 text-yellow-700 rounded-md hover:bg-yellow-200 transition-colors duration-200"
                          >
                            <fa-icon [icon]="faCoins"></fa-icon>
                          </button>
                          <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                            Registrar progreso
                            <div class="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
                          </div>
                        </div>

                        <div class="relative group">
                          <button
                            class="px-3 py-1 text-xs bg-purple-100 text-purple-700 rounded-md hover:bg-purple-200 transition-colors duration-200"
                          >
                            <fa-icon [icon]="faExclamationTriangle"></fa-icon>
                          </button>
                          <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                            Reportar problema
                            <div class="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                }
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <app-goals-footer />
  `,
  styles: ``,
})
export class GoalsPage {
  goalService = inject(GoalService);

  // FontAwesome icons
  faEyeSlash = faEyeSlash;
  faEdit = faEdit;
  faTrash = faTrash;
  faCoins = faCoins;
  faExclamationTriangle = faExclamationTriangle;
}
