import { Component } from '@angular/core';
import { BUSINESS_INFO } from '../../data/business-info';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header class="relative bg-white">
      <div
        class="h-48 bg-cover bg-center bg-no-repeat"
        style="background-image: url('images/header-banner.png')"
      ></div>
      <div class="mx-auto flex max-w-6xl flex-wrap items-center justify-between px-4 py-4">
        <div>
          <h1 class="font-heading text-2xl font-bold text-spa-dark md:text-3xl">
            {{ info.name }}
          </h1>
          <p class="text-sm text-gray-500">{{ info.tagline }}</p>
        </div>
        <div class="mt-2 text-right text-sm text-gray-400 md:mt-0">
          <p>A Reflexology & Massage Spa</p>
          <p>Serving South Florida</p>
          <a [href]="info.phoneLink" class="font-semibold text-spa-primary hover:underline">
            {{ info.phone }}
          </a>
        </div>
      </div>
    </header>
  `,
})
export class HeaderComponent {
  readonly info = BUSINESS_INFO;
}
