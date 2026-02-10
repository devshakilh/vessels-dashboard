import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Vessel {
  name: string;
  pfs: string;
  actual: string;
  etd: string;
  alert: string;
}

@Component({
  selector: 'app-vessels-table',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card bg-white p-6 border rounded-lg">
      <div class="flex items-center justify-between mb-4">
        <h3 class="text-lg font-semibold text-gray-900">Vessels</h3>
        <span class="text-sm text-gray-500">Subset of 4</span>
      </div>

      <div class="overflow-x-auto -mx-6 px-6">
        <table class="w-full">
          <thead>
            <tr class="border-b border-gray-200">
              <th class="text-left py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">Cabar</th>
              <th class="text-center py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">PFS</th>
              <th class="text-center py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">Actual</th>
              <th class="text-center py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">ETD</th>
              <th class="text-center py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">Alert</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <tr *ngFor="let vessel of vessels" class="hover:bg-gray-50">
              <td class="py-3 px-4">
                <div class="font-medium text-gray-900">{{ vessel.name }}</div>
              </td>
              <td class="py-3 px-4 text-center text-sm text-gray-900">{{ vessel.pfs }}</td>
              <td class="py-3 px-4 text-center text-sm text-gray-900">{{ vessel.actual }}</td>
              <td class="py-3 px-4 text-center text-sm text-gray-900">{{ vessel.etd }}</td>
              <td class="py-3 px-4 text-center">
                <span 
                  [class]="getAlertClass(vessel.alert)"
                  class="badge"
                >
                  {{ vessel.alert }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
})
export class VesselsTableComponent {
  vessels: Vessel[] = [
    { name: 'Cabar', pfs: '94.5%', actual: '93.2%', etd: '93.2%', alert: 'Arrived' },
    { name: 'Cahaya', pfs: '94.5%', actual: '93.2%', etd: '93.2%', alert: 'Departure' },
    { name: 'Cantil', pfs: '94.5%', actual: '93.2%', etd: '93.2%', alert: 'On Time' },
    { name: 'Carum', pfs: '94.5%', actual: '93.2%', etd: '93.2%', alert: 'Departure' },
  ];

  getAlertClass(alert: string): string {
    switch (alert) {
      case 'Arrived':
        return 'badge-success';
      case 'Departure':
        return 'badge-warning';
      case 'On Time':
        return 'badge-info';
      default:
        return 'badge-info';
    }
  }
}