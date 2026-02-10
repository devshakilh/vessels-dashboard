import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface UtilizationData {
  label: string;
  value: number;
  percentage: number;
  color: string;
  trend?: number;
}

@Component({
  selector: 'app-time-utilization',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card bg-white p-6 border rounded-lg w-full">
      <div class="flex items-center justify-between mb-6">
        <h3 class="text-lg font-semibold text-gray-900">Time Utilization</h3>
        <button class=" flex  gap-2 text-sm items-center text-gray-600 hover:text-gray-900">
          Details <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right-icon lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </button>
      </div>

      <div class="flex items-center justify-center gap-8">
        <!-- Donut Chart -->
        <div class="relative w-48 h-56">
          <svg #chartSvg class="w-full h-full transform -rotate-90" viewBox="0 0 200 200">
            <!-- Background circle -->
            <circle
              cx="100"
              cy="100"
              r="80"
              fill="none"
              stroke="#f3f4f6"
              stroke-width="30"
            />
            <!-- Dynamic segments -->
            <circle
              *ngFor="let segment of chartSegments; let i = index"
              cx="100"
              cy="100"
              r="80"
              fill="none"
              [attr.stroke]="segment.color"
              stroke-width="30"
              [attr.stroke-dasharray]="segment.dasharray"
              [attr.stroke-dashoffset]="segment.dashoffset"
              class="transition-all duration-500"
            />
          </svg>
        </div>

        <!-- Legend -->
        <div class="space-y-3">
          <div *ngFor="let item of utilizationData" class="flex items-center justify-between gap-8">
            <div class="flex items-center gap-3">
              <div class="w-3 h-3 rounded-full" [style.background-color]="item.color"></div>
              <span class="text-sm text-gray-700">{{ item.label }}</span>
            </div>
            <div class="flex items-center gap-4">
              <span class="text-sm font-semibold text-gray-900 w-16 text-right">{{ item.value }}</span>
              <span 
                *ngIf="item.trend !== undefined"
                [class.text-green-600]="item.trend > 0"
                [class.text-red-600]="item.trend < 0"
                class="text-sm font-medium w-16 text-right"
              >
                {{ item.trend > 0 ? '+' : '' }}{{ item.trend }}%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class TimeUtilizationComponent implements AfterViewInit {
  @ViewChild('chartSvg') chartSvg!: ElementRef;

  utilizationData: UtilizationData[] = [
    { label: 'At Sea Days', value: 66.98, percentage: 66.98, color: '#10b981', trend: 8.2 },
    { label: 'Pilotage Hrs', value: 42, percentage: 10, color: '#ef4444', trend: 2.8 },
    { label: 'At Port Days', value: 10.92, percentage: 10.92, color: '#3b82f6', trend: -4.7 },
  ];

  chartSegments: { color: string; dasharray: string; dashoffset: number }[] = [];

  ngAfterViewInit() {
    this.calculateChartSegments();
  }

  calculateChartSegments() {
    const radius = 80;
    const circumference = 2 * Math.PI * radius;
    let currentOffset = 0;

    this.chartSegments = this.utilizationData.map((item) => {
      const segmentLength = (item.percentage / 100) * circumference;
      const segment = {
        color: item.color,
        dasharray: `${segmentLength} ${circumference}`,
        dashoffset: -currentOffset,
      };
      currentOffset += segmentLength;
      return segment;
    });
  }
}