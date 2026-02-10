import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ScheduleItem {
  seq: number;
  portCall: string;
  timeZone: string;
  wt: string;
  arrivalPilotStation: string;
  totalMoves: number;
  oi: number;
  movesCranehour: string;
  berthProductiv: number;
  workHrs: number;
  berthDept: string;
  action: string;
}

@Component({
  selector: 'app-vessel-schedule',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card bg-white p-6 border rounded-lg">
      <div class="flex items-center justify-between mb-4">
        <h3 class="text-lg font-semibold text-gray-900">Vessel Schedule</h3>
        <button class=" flex  gap-2 text-sm items-center text-gray-600 hover:text-gray-900">
          Details <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right-icon lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </button>
      </div>

      <div class="overflow-x-auto -mx-6 px-6">
        <table class="w-full text-sm">
          <thead>
            <tr class="border-b border-gray-200">
              <th class="text-left py-3 px-3 text-xs font-medium text-gray-500 uppercase">Seq</th>
              <th class="text-left py-3 px-3 text-xs font-medium text-gray-500 uppercase">Port Call</th>
              <th class="text-center py-3 px-3 text-xs font-medium text-gray-500 uppercase">Time Zone</th>
              <th class="text-center py-3 px-3 text-xs font-medium text-gray-500 uppercase">Wt</th>
              <th class="text-center py-3 px-3 text-xs font-medium text-gray-500 uppercase">Arrival Pilot Station</th>
              <th class="text-center py-3 px-3 text-xs font-medium text-gray-500 uppercase">Total Moves</th>
              <th class="text-center py-3 px-3 text-xs font-medium text-gray-500 uppercase">Oi</th>
              <th class="text-center py-3 px-3 text-xs font-medium text-gray-500 uppercase">Moves/Cranehour</th>
              <th class="text-center py-3 px-3 text-xs font-medium text-gray-500 uppercase">Berth Productiv</th>
              <th class="text-center py-3 px-3 text-xs font-medium text-gray-500 uppercase">Work Hrs</th>
              <th class="text-center py-3 px-3 text-xs font-medium text-gray-500 uppercase">Berth Dept</th>
              <th class="text-center py-3 px-3 text-xs font-medium text-gray-500 uppercase">Action</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100">
            <tr *ngFor="let item of scheduleData" class="hover:bg-gray-50">
              <td class="py-3 px-3 text-gray-900">{{ item.seq }}</td>
              <td class="py-3 px-3">
                <div class="font-medium text-gray-900">{{ item.portCall }}</div>
              </td>
              <td class="py-3 px-3 text-center text-gray-900">{{ item.timeZone }}</td>
              <td class="py-3 px-3 text-center text-gray-900">{{ item.wt }}</td>
              <td class="py-3 px-3 text-center text-gray-900">{{ item.arrivalPilotStation }}</td>
              <td class="py-3 px-3 text-center text-gray-900">{{ item.totalMoves }}</td>
              <td class="py-3 px-3 text-center text-gray-900">{{ item.oi }}</td>
              <td class="py-3 px-3 text-center text-gray-900">{{ item.movesCranehour }}</td>
              <td class="py-3 px-3 text-center text-gray-900">{{ item.berthProductiv }}</td>
              <td class="py-3 px-3 text-center text-gray-900">{{ item.workHrs }}</td>
              <td class="py-3 px-3 text-center text-gray-900">{{ item.berthDept }}</td>
              <td class="py-3 px-3 text-center">
                <button class="text-gray-400 hover:text-gray-600">
                  <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                  </svg>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
})
export class VesselScheduleComponent {
  scheduleData: ScheduleItem[] = [
    {
      seq: 1,
      portCall: 'JPTAO Shanghai',
      timeZone: '800',
      wt: 'W',
      arrivalPilotStation: '00 | Thu | 04:00',
      totalMoves: 1650,
      oi: 6,
      movesCranehour: '25 MPH',
      berthProductiv: 125,
      workHrs: 13,
      berthDept: '00 | Thu | 19:00',
      action: '•••',
    },
    {
      seq: 2,
      portCall: 'SHA Shanghai',
      timeZone: '800',
      wt: 'W',
      arrivalPilotStation: '00 | Thu | 04:00',
      totalMoves: 1650,
      oi: 6,
      movesCranehour: '25 MPH',
      berthProductiv: 125,
      workHrs: 13,
      berthDept: '00 | Thu | 19:00',
      action: '•••',
    },
    {
      seq: 3,
      portCall: 'SHA',
      timeZone: '800',
      wt: 'W',
      arrivalPilotStation: '00 | Thu | 04:00',
      totalMoves: 1650,
      oi: 6,
      movesCranehour: '25 MPH',
      berthProductiv: 125,
      workHrs: 13,
      berthDept: '00 | Thu | 19:00',
      action: '•••',
    },
  ];
}