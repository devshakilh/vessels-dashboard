import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { ServiceOverviewComponent } from './service-overview.component';
import { PortRotationComponent } from './port-rotation.component';
import { VesselsTableComponent } from './vessels-table.component';
import { TimeUtilizationComponent } from './time-utilization.component';
import { VesselScheduleComponent } from './vessel-schedule.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    ServiceOverviewComponent,
    PortRotationComponent,
    VesselsTableComponent,
    TimeUtilizationComponent,
    VesselScheduleComponent,
  ],
  template: `
    <div class="flex h-screen bg-gray-50">
      <!-- Sidebar -->

      <!-- Main Content -->
      <div class="flex-1  flex flex-col overflow-hidden">
        <!-- Header -->
        <app-header></app-header>

        <!-- Dashboard Content -->
        <main class="flex-1 overflow-y-auto">
          <div class="p-6 space-y-6  mx-auto">
            <!-- Service Overview -->
            <app-service-overview></app-service-overview>
            <app-port-rotation></app-port-rotation>
            <!-- Two Column Layout -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
              <!-- Left Column (2/3) -->
              <div class="lg:col-span-2 space-y-6">
                            
                <app-vessels-table></app-vessels-table>
              </div>

              <!-- Right Column (1/3) -->
              <div class="space-y-6">
                 <app-time-utilization></app-time-utilization>
              </div>
            </div>

            <!-- Full Width Schedule -->
            <app-vessel-schedule></app-vessel-schedule>
          </div>
        </main>
      </div>
    </div>
  `,
})
export class VessalComponent {}
