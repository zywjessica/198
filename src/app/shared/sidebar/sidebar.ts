import { Component } from '@angular/core';
import { BUSINESS_INFO } from '../../data/business-info';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  template: `
    <aside class="rounded-lg bg-spa-light p-6">
      <h4 class="font-heading mb-4 text-lg font-semibold text-spa-dark">Foot Care Spa Hours</h4>
      <table class="w-full text-sm">
        <tbody>
          @for (day of days; track day) {
            <tr class="border-b border-spa-accent/30">
              <td class="py-2 font-medium">{{ day }}</td>
              <td class="py-2 text-right text-gray-600">
                {{ info.hours.open }} &ndash; {{ info.hours.close }}
              </td>
            </tr>
          }
        </tbody>
      </table>
    </aside>
  `,
})
export class SidebarComponent {
  readonly info = BUSINESS_INFO;
  readonly days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
}
