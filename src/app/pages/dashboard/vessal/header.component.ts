import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="bg-white border-b border-gray-200 py-3 px-6">
      <div class="flex items-center justify-between">
        <!-- Breadcrumb -->
        <div class="flex items-center gap-2 text-sm">
          <a href="#" class="text-green-600 hover:text-green-700">Services</a>
          <span class="text-gray-400">/</span>
          <span class="text-gray-900 font-medium">SSA Service</span>
        </div>

        <!-- Right side -->
        <div class="flex items-center gap-4">
          <span class="text-sm text-gray-500">last updated: 1 Dec, 2025</span>
        </div>
      </div>
    </header>
  `,
})
export class HeaderComponent {}