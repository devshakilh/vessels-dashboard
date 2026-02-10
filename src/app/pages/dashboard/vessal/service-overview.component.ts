import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Stat {
  label: string;
  value: string | number;
  trend?: number;
  trendPositive?: boolean;
}

@Component({
  selector: 'app-service-overview',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="crd">
      <!-- Service Header -->
      <div class="flex items-start justify-between mb-6">
        <div class="flex items-center gap-4">
          <div class="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
            <svg class="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </div>
          <div>
            <div class="flex items-center gap-2">
              <h1 class="text-2xl font-bold text-gray-900">SSA Service</h1>
              <span class="badge badge-info">4</span>
            </div>
            <p class="text-sm text-gray-500 mt-1">CPB302 (Subset 2)</p>
          </div>
        </div>

        <button class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
          Edit
        </button>
      </div>

      <!-- Service Stats -->
      <div class="grid grid-cols-2 gap-4 mb-6 border bg-white p-6 rounded-lg">
        <div *ngFor="let stat of topStats" class="flex items-center justify-between">
          <span class="text-sm text-gray-600">{{ stat.label }}</span>
          <span class="text-sm font-semibold text-gray-900">{{ stat.value }}</span>
        </div>
      </div>

      <!-- Performance Metrics -->
      <div class="grid grid-cols-4 my-6  gap-6">
        <div *ngFor="let metric of metrics" class="px-4 text-start border bg-white rounded-lg py-3">
          <div class="text-sm text-gray-600 mb-2">{{ metric.label }}</div>
          <div class="flex items-baseline justify-start  gap-2">
            <span class="text-3xl font-bold text-gray-900">{{ metric.value }}</span>
            <span 
              *ngIf="metric.trend"
              [class.text-green-600]="metric.trendPositive"
              [class.text-red-600]="!metric.trendPositive"
              class="text-sm font-medium flex items-center"
            >
              <svg 
                *ngIf="metric.trendPositive" 
                class="w-4 h-4" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              <svg 
                *ngIf="!metric.trendPositive" 
                class="w-4 h-4" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
              {{ metric.trend > 0 ? '+' : '' }}{{ metric.trend }}%
            </span>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class ServiceOverviewComponent {
  topStats = [
    { label: 'Speed', value: '16.8 Kts' },
    { label: 'Req Speed Up', value: 'Yes' },
    { label: 'Spool Up', value: '16.8 Kts' },
    { label: 'Lowest Speed', value: '16.8 Kts' },
    { label: 'Consumption', value: '24.0 MT/Day' },
    { label: 'Port Consumption Incl.', value: '24.0 MT/Day' },
    { label: 'Speed-up consumption', value: '24.0 MT/Day' },
    { label: 'Maneuvering Consumption', value: '24.0 MT/Day' },
  ];

  metrics = [
    { label: 'Services Performance', value: '89.5%', trend: 0.05, trendPositive: true },
    { label: 'Commercial (Fuel & Time)', value: '78.5%', trend: -3.70, trendPositive: false },
    { label: 'Operational ( Speed Performance)', value: '89.5%', trend: 0.93, trendPositive: true },
    { label: 'All Service Emissions', value: '23 CII - C', trend: 0.93, trendPositive: true },
  ];
}