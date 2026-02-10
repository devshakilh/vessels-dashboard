import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-port-rotation',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card bg-white p-6 border rounded-lg mb-6">
      <h3 class="text-lg font-semibold text-gray-900 mb-4">Port Rotation</h3>
      
      <!-- Direction Indicator -->
      <div class="flex items-center gap-4 mb-6">
        <div class="flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-1.5">
          <svg class="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
          <span class="text-sm font-medium text-gray-900">E</span>
        </div>
        <div class="text-sm text-gray-600">
          <span class="font-semibold text-gray-900">9,803</span> nm
        </div>
        <div class="text-sm text-gray-600">
          <span class="font-semibold text-gray-900">77</span> days
        </div>
        <div class="text-sm text-gray-600">
          <span class="font-semibold text-gray-900">17.5</span> kts
        </div>
      </div>

      <!-- Port Tabs - Eastbound -->
      <div class="mb-4">
        <div class="flex items-center gap-6 overflow-x-auto pb-2">
          <div 
            *ngFor="let port of eastboundPorts; let i = index"
            [class.bg-green-500]="port.active"
            [class.text-white]="port.active"
            [class.bg-gray-100]="!port.active"
            [class.text-gray-700]="!port.active"
            class="px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap cursor-pointer hover:shadow-md transition-all"
          >
            {{ port.name }}
          </div>
        </div>
      </div>

      <!-- Direction Indicator -->
      <div class="flex items-center gap-4 mb-6">
        <div class="flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-1.5">
          <svg class="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span class="text-sm font-medium text-gray-900">W</span>
        </div>
      </div>

      <!-- Port Tabs - Westbound -->
      <div>
        <div class="flex items-center gap-6 overflow-x-auto pb-2">
          <div 
            *ngFor="let port of westboundPorts"
            [class.bg-gray-100]="!port.active"
            [class.text-gray-700]="!port.active"
            class="px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap cursor-pointer hover:shadow-md transition-all"
          >
            {{ port.name }}
          </div>
        </div>
      </div>
    </div>
  `,
})
export class PortRotationComponent {
  eastboundPorts = [
    { name: 'TAO', active: false },
    { name: 'SHA', active: false },
    { name: 'NGB', active: false },
    { name: 'SHK', active: false },
    { name: 'SIN', active: false },
    { name: 'HKHKG', active: false },
    { name: 'HN/USG', active: true },
    { name: 'IGI', active: false },
    { name: 'HK/HKG', active: false },
    { name: 'HKHKG', active: false },
    { name: 'SSZ', active: false },
  ];

  westboundPorts = [
    { name: 'TAO', active: false },
    { name: 'HKHKG', active: false },
    { name: 'HKG', active: false },
    { name: 'SIN', active: false },
    { name: 'SSZ', active: false },
    { name: 'ITJ', active: false },
    { name: 'NVT', active: false },
    { name: 'IDA', active: false },
    { name: 'PNG', active: false },
  ];
}